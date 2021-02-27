const env = process.env;

export const nodeEnv = env.NODE_ENV || "development";

export default {
  gateway: env.PAY_URL || "https://sandbox-payment.winpay.id",
  privateKey1: env.P_KEY1 || "9220fbdeb1d115a4f2e9b2636edc24cc",
  privateKey2: env.P_KEY2 || "5b74d200096570de0280b9838c7af1ab",
  merchantKey: env.M_KEY || "c9c64d57f0c606ef06c297f96697cab4",

  port: env.PORT || 8080,
  host: env.HOST || "0.0.0.0",
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },

  db_url: env.db_url || "localhost:27017",
  db_name: env.db_name || "payment",
  get dbUrl() {
    return `mongodb://${this.db_url}/${this.db_name}`;
  },
};
