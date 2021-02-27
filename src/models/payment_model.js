import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PaymentSchema = new Schema({
  payment_code: {
    type: String,
    required: true,
    unique: true,
  },
  payment_name: {
    type: String,
  },
  payment_description: {
    type: String,
  },
  payment_logo: {
    type: String,
  },
  payment_url: {
    type: String,
  },
  payment_url_v2: {
    type: String,
  },
  is_direct: {
    type: Boolean,
  },
});
