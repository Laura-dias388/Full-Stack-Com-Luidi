import IUser from '../interface/userInterface';
import userModel from '../model/userModel';

const findUsers = async (): Promise<IUser> => {
  const userList = await userModel.findUsers();
  if (!userList.length) return { type: 'error', message: 'Users not found' };
  return { type: null, message: userList };
};

const createUsers = async (name: string): Promise<IUser> => {
  const { affectedRows } = await userModel.createUsers(name);
  if (!affectedRows) return { type: 'error', message: 'User not created' };
  return { type: null, message: `User ${name} created successfully` };
};

const deleteUsers = async (id: number): Promise<IUser> => {
  const { affectedRows } = await userModel.deleteUsers(id);
  if (!affectedRows) return { type: 'error', message: 'User not deleted' };
  return { type: null, message: 'User deleted successfully' };
};

const updateUsers = async (name: string, id: number): Promise<IUser> => {
  const { affectedRows } = await userModel.updateUsers(name, id);
  if (!affectedRows) return { type: 'error', message: 'User not updated' };
  return { type: null, message: `The user has been updated to ${name}` };
};

export default {
  findUsers,
  createUsers,
  deleteUsers,
  updateUsers,
};