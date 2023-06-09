"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const findUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM Usuarios;';
    const [data] = yield connection_1.default.execute(query); // RowDataPacket usa quando a rota é get
    return data; // quando pede informação ao banco usa o RowDataPacket
});
const createUsers = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'INSERT INTO Usuarios (name) VALUES (?);';
    const [data] = yield connection_1.default.execute(query, [name]);
    return data;
});
const deleteUsers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'DELETE FROM Usuarios WHERE id = ?;';
    const [data] = yield connection_1.default.execute(query, [id]);
    return data;
});
const updateUsers = (name, id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'UPDATE Usuarios SET name = ? WHERE id = ?;';
    const [data] = yield connection_1.default.execute(query, [name, id]);
    return data;
});
exports.default = {
    findUsers,
    createUsers,
    deleteUsers,
    updateUsers,
};
