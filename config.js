import dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const nodeEnv = env.NODE_ENV;

export default {
  gateway: env.PAY_URL,

  authKey: env.AUTH_KEY,
  orderKey: env.ORDER_KEY,

  jwt_secret: env.JWT_SECRET,
  jwt_expired: env.JWT_EXPIRED,

  port: env.PORT,
  host: env.HOST,
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },

  db_url: env.DB_URL,
  db_name: env.DB_NAME,
  get dbUrl() {
    return `mongodb://${this.db_url}/${this.db_name}`;
  },
};
