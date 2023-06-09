import { Router } from 'express';
import userController  from '../controller/userController';
import userValidate  from '../middlewares/userValidate';

const route = Router();

route.get('/', userController.findUsers);
route.post('/', userValidate, userController.createUsers);
route.delete('/:id', userController.deleteUsers);
route.put('/:id', userValidate, userController.updateUsers);

export default route;
