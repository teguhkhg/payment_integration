import express from "express";

import { getReportQRIS, getReportWPI } from "../services/report_service";

const router = express.Router();

router.get("/qris", getReportQRIS);
router.get("/wpi", getReportWPI);

export default router;
