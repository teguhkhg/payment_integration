import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";

import config from "./config";
import gateway from "./src/routes/gateway_route";
import payment from "./src/routes/payment_route";

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/gateway", gateway);
app.use("/payment", payment);

app.get("/", (req, res) => {
  res.send(`Node and express running on ${config.serverUrl}`);
});

app.listen(config.port, config.host, () => {
  console.info(`Express is listening to ${config.port}`);
});
