import User from '../database/models/userModel';
import { IUser, IResult } from '../interface/userInterface';

const findUsers = async (page: number) => {
  const limit = 10;
  const offset = limit * page || 0;
  const data = await User.findAll({ limit, offset });
  const userList = data.map(({ dataValues }: IResult) => dataValues);
  if (!userList.length) return { type: 'error', message: 'Users not found' };
  return { type: null, message: userList };
};

const createUsers = async (name: string): Promise<IUser> => {
  const { dataValues } = await User.create({ name });
  console.log(dataValues, 'created data');
  if (!Object.keys(dataValues).length) return { type: 'error', message: 'User not created' };
  return { type: null, message: `User ${name} created successfully` };
};

const deleteUsers = async (id: number): Promise<IUser> => {
  const affectedRows = await User.destroy({ where: { id } });
  if (!affectedRows) return { type: 'error', message: 'User not deleted' };
  return { type: null, message: 'User deleted successfully' };
};

const updateUsers = async (name: string, id: number): Promise<IUser> => {
  const [affectedRows] = await User.update({ name }, { where: { id }});
  if (!affectedRows) return { type: 'error', message: 'User not updated' };
  return { type: null, message: `The user has been updated to ${name}` };
};

export default {
  findUsers,
  createUsers,
  deleteUsers,
  updateUsers,
};