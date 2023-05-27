import { Router } from 'express';
import userController from '../controller/userController.js';

const route = Router();

route.get('/', userController.findUsers);
route.post('/', userController.createUsers);

export default route;
