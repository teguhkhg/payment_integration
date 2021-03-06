import dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const nodeEnv = env.NODE_ENV;

export default {
  gateway: env.PAY_URL,
  privateKey1: env.P_KEY1,
  privateKey2: env.P_KEY2,
  merchantKey: env.M_KEY,

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
