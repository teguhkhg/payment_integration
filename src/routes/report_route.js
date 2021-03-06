import express from "express";

import { getReportQRIS, getReportWPI } from "../middleware/report_service";

const router = express.Router();

router.get("/qris", getReportQRIS);
router.get("/wpi", getReportWPI);

export default router;
