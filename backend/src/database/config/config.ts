import { Options } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const config: Options = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,// localhost
  port: Number(process.env.MYSQLPORT),
  dialect: 'mysql',
}

export = config;