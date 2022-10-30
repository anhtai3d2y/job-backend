import * as dotenv from 'dotenv';

dotenv.config();
const uuidHost = process.env.UUID_HOST;
const uuidService = {
  create: `${uuidHost}/v1/user/create`,
  login: `${uuidHost}/v1/user/hash`,
  info: `${uuidHost}/v1/user/info`,
  password: `${uuidHost}/v1/user/password`,
};
export default uuidService;
