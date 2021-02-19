import express from "express";
import bodyParser from "body-parser";

import config from "./config";
import payment from "./src/routes/payment_route";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/payment", payment);

app.get("/", (req, res) => {
  res.send(`Node and express running on ${config.serverUrl}`);
});

app.listen(config.port, config.host, () => {
  console.info(`Express is listening to ${config.port}`);
});
