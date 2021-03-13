import express from "express";

import {
  getStatusQRIS,
  getStatusWPI,
  postStatusQRIS,
  postStatusWPI,
} from "../middleware/status_service";

const router = express.Router();

router.get("/qris", getStatusQRIS);
router.post("/qris", postStatusQRIS);
router.get("/wpi", getStatusWPI);
router.post("/wpi", postStatusWPI);

export default router;
