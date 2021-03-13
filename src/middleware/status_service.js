import superagent from "superagent";

import config from "../../config";

const authKey = config.authKey;

export async function getStatusQRIS(req, res) {
  try {
    const order_id = req.query.order_id;
    const response = await superagent
      .get(`${config.gateway}/transaction/check-qris-transaction`)
      .set("Authorization", `Basic ${authKey}`)
      .query({ order_id });
    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json(json.data)
      : res.json({ code: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function postStatusQRIS(req, res) {
  try {
    const data = req.body.data;

    const response = await superagent
      .post(`${config.gateway}/transaction/check-qris-transaction`)
      .set("Authorization", `Basic ${authKey}`)
      .send({ data });
    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json(json.data)
      : res.json({ code: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getStatusWPI(req, res) {
  try {
    const id_transaction_inquiry = req.query.id_transaction_inquiry;
    const response = await superagent
      .get(`${config.gateway}/transaction/check-wpi-transaction`)
      .set("Authorization", `Basic ${authKey}`)
      .query({ id_transaction_inquiry });
    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json(json.data)
      : res.json({ code: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function postStatusWPI(req, res) {
  try {
    const data = req.body;
    const response = await superagent
      .post(`${config.gateway}/transaction/check-wpi-transaction`)
      .set("Authorization", `Basic ${authKey}`)
      .send({ data });
    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json(json.data)
      : res.json({ code: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
