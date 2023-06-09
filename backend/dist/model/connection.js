"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// DICA: para lembrar o nome de cada propriedade objeto olhar as conexões do Workbench.
exports.default = (0, promise_1.createPool)({
    host: process.env.HOST,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    user: 'root',
    database: process.env.DATABASE,
});
