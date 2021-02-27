import express from "express";
import {
  addPaymentMethod,
  getPaymentMethods,
  getPaymentMethodByCode,
  updatePaymentMethod,
  deletePaymentMethod,
} from "../controllers/payment_controller";

const router = express.Router();

router.get("/", getPaymentMethods);
router.post("/", addPaymentMethod);

router.get("/:code", getPaymentMethodByCode);
router.put("/:code", updatePaymentMethod);
router.delete("/:code", deletePaymentMethod);

export default router;
