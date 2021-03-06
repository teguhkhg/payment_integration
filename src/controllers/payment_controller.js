import mongoose from "mongoose";
import { PaymentSchema } from "../models/payment_model";

const Payment = mongoose.model("Payment", PaymentSchema);

export function addPaymentMethod(req, res) {
  const response = await superagent
      .get(`${config.gateway}/toolbar`)
      .auth(privateKey1, privateKey2);
  const json = JSON.parse(response.text);

  const newPayment = new Payment(req.body);
  newPayment.save((err, payment) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.json(payment);
  });
}

export function getPaymentMethods(req, res) {
  Payment.find({}, (err, payment) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.json(payment);
  });
}

export function getPaymentMethodByCode(req, res) {
  Payment.find({ payment_code: req.params.code }, (err, payment) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.json(payment);
  });
}

export function updatePaymentMethod(req, res) {
  Payment.findOneAndUpdate(
    { payment_code: req.params.code },
    req.body,
    { new: true },
    (err, payment) => {
      if (err) {
        res.status(500).json({ message: err.message });
      }
      res.json(payment);
    }
  );
}

export function deletePaymentMethod(req, res) {
  Payment.remove({ payment_code: req.params.code }, (err, payment) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.json(payment);
  });
}
