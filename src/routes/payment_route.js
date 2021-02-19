import express from "express";
import {
  getToolbar,
  getToken,
  getPaymentCode,
  orderListener,
} from "../services/payment_service";
import status from "./status_route";
import report from "./report_route";

const router = express.Router();

router.get("/toolbar", getToolbar);
router.get("/token", getToken);
router.post("/code/:code", getPaymentCode);
router.get("/listener", orderListener);

router.use("/status", status);
router.use("/report", report);

export default router;
