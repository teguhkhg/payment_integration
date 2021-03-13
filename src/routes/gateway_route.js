import express from "express";
import {
  getToolbar,
  postPaymentCode,
  orderListener,
  getToken,
} from "../middleware/gateway_service";
import status from "./status_route";
import report from "./report_route";

const router = express.Router();

router.get("/toolbar", getToolbar);
router.get("/token", getToken);
router.post("/code/:code", postPaymentCode);
router.get("/listener", orderListener);

router.use("/status", status);
router.use("/report", report);

export default router;
