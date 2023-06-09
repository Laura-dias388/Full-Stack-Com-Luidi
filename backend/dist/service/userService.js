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
const userModel_1 = __importDefault(require("../model/userModel"));
const findUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const userList = yield userModel_1.default.findUsers();
    if (!userList.length)
        return { type: 'error', message: 'Users not found' };
    return { type: null, message: userList };
});
const createUsers = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const { affectedRows } = yield userModel_1.default.createUsers(name);
    if (!affectedRows)
        return { type: 'error', message: 'User not created' };
    return { type: null, message: `User ${name} created successfully` };
});
const deleteUsers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { affectedRows } = yield userModel_1.default.deleteUsers(id);
    if (!affectedRows)
        return { type: 'error', message: 'User not deleted' };
    return { type: null, message: 'User deleted successfully' };
});
const updateUsers = (name, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { affectedRows } = yield userModel_1.default.updateUsers(name, id);
    if (!affectedRows)
        return { type: 'error', message: 'User not updated' };
    return { type: null, message: `The user has been updated to ${name}` };
});
exports.default = {
    findUsers,
    createUsers,
    deleteUsers,
    updateUsers,
};
