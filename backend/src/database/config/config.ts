import { Options } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const config: Options = {
  username: 'root',
  password: 'password',
  database: 'Estudos',
  host: '127.0.0.1',// localhost
  dialect: 'mysql',
}

export = config;