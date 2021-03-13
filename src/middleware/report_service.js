import superagent from "superagent";

import config from "../../config";

const privateKey1 = config.privateKey1;
const privateKey2 = config.privateKey2;

export async function getReportQRIS(req, res) {
  try {
    const date = req.query.date || Date.now;
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    const response = await superagent
      .get(`${config.gateway}/report/mutasi-qris`)
      .set(
        "Authorization",
        "Basic NGQwY2JhNDgyNTY1YTQzODAyODZhODc4NDhmYWM2MDA6MjAwNTYwN2I3YmE3OWQyMTBlZjM4ZDFjMzZiNDMzY2M="
      )
      .query({ date, limit, offset });
    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json(json.data)
      : res.json({ code: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getReportWPI(req, res) {
  try {
    const date = req.query.date || Date.now;
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    const response = await superagent
      .get(`${config.gateway}/report/mutasi-wpi`)
      .set(
        "Authorization",
        "Basic NGQwY2JhNDgyNTY1YTQzODAyODZhODc4NDhmYWM2MDA6MjAwNTYwN2I3YmE3OWQyMTBlZjM4ZDFjMzZiNDMzY2M="
      )
      .query({ date, limit, offset });
    const json = JSON.parse(response.text);
    json.rc === "00"
      ? res.json(json.data)
      : res.json({ code: json.rc, message: json.rd });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
