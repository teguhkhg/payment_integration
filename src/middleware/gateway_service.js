import superagent from "superagent";
import crypto from "crypto";

import config from "../../config";

const orderKey = config.orderKey;

async function createOrderData(token, json_string) {
  const encrypt = (message, method, secret, iv) => {
    const encryptor = crypto.createCipheriv(method, secret, iv);
    return (
      encryptor.update(message, "utf-8", "base64") + encryptor.final("base64")
    );
  };
  const key = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex")
    .substr(0, 32);
  const iv = key.substr(0, 16);
  const method = "aes-256-cbc";
  const output = encrypt(json_string, method, key, iv);
  const encrypted = Buffer.from(output).toString("base64").trim();
  const orderData = encrypted.substr(0, 10) + token + encrypted.substr(10);
  return orderData;
}

export async function getToken(req, res) {
  try {
    const response = await superagent
      .get(`${config.gateway}/token`)
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Authorization", `Basic ${orderKey}`);

    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json({ token: json.data.token })
      : res.json({ code: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getToolbar(req, res) {
  try {
    const response = await superagent
      .get(`${config.gateway}/toolbar`)
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Authorization", `Basic ${orderKey}`);

    const json = JSON.parse(response.text);
    console.log(json);
    json.rc === "00"
      ? res.json(json.data.products)
      : res.json({ code: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function postPaymentCode(req, res) {
  const code = req.params.code;
  const token = req.body.token;
  const json_string = JSON.stringify(req.body.json_string);

  createOrderData(token, json_string)
    .then(async (order_data) => {
      try {
        const response = await superagent
          .post(`${config.gateway}/apiv2/${code}`)
          .set("Authorization", `Basic ${orderKey}`)
          .send(`orderdata=${order_data}`);
        const json = JSON.parse(response.text);

        json.rc === "00"
          ? res.json(json.data)
          : res.json({ code: json.rc, message: json.rd });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

export function orderListener(req, res) {
  return res.send("ACCEPTED");
}
