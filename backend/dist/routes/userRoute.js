"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const userValidate_1 = __importDefault(require("../middlewares/userValidate"));
const route = (0, express_1.Router)();
route.get('/', userController_1.default.findUsers);
route.post('/', userValidate_1.default, userController_1.default.createUsers);
route.delete('/:id', userController_1.default.deleteUsers);
route.put('/:id', userValidate_1.default, userController_1.default.updateUsers);
exports.default = route;
