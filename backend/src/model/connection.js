import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
// DICA: para lembrar o nome de cada propriedade objeto olhar as conexões do Workbench.

export default createPool({
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  user: 'root',
  database: process.env.DATABASE,
});
