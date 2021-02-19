import superagent from "superagent";

import config from "../../config";

const privateKey1 = config.privateKey1;
const privateKey2 = config.privateKey2;

export async function getStatusQRIS(req, res) {
  try {
    const order_id = req.query.order_id;
    const response = await superagent
      .get(`${config.gateway}/transaction/check-qris-transaction`)
      .query({ order_id })
      .auth(privateKey1, privateKey2);
    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json(json.data)
      : res.json({ status: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getStatusWPI(req, res) {
  try {
    const id_transaction = req.query.id_transaction;
    const response = await superagent
      .get(`${config.gateway}/transaction/check-wpi-transaction`)
      .query({ id_transaction })
      .auth(privateKey1, privateKey2);
    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json(json.data)
      : res.json({ status: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
