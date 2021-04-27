import { config } from 'dotenv';

config();

const globalConfig = {
    mysqlconfig : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    port: process.env.SERVER_PORT,
}

export default globalConfig;