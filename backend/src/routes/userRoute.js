import { Router } from 'express';
import userController from '../controller/userController.js';
import userValidate from '../middlewares/userValidate.js';

const route = Router();

route.get('/', userController.findUsers);
route.post('/', userValidate, userController.createUsers);
route.delete('/:id', userController.deleteUsers);
route.put('/:id', userValidate, userController.updateUser);

export default route;
