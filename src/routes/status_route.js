import express from "express";

import { getStatusQRIS, getStatusWPI } from "../services/status_service";

const router = express.Router();

router.get("/qris", getStatusQRIS);
router.get("/wpi", getStatusWPI);

export default router;
