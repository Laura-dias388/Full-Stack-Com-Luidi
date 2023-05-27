import userModel from '../model/userModel.js';

const findUsers = async () => {
  const userList = await userModel.findUsers();
  if (!userList.length) {
    return { type: 'error', message: 'Users not found' };
  }
  return { type: null, message: userList.map(({ name }) => name) };
};

const createUsers = async ({ name }) => {
  const affectedRows = await userModel.createUsers(name);
  if (!affectedRows) {
    return { type: 'error', message: 'User not created' };
  }
  return { type: null, message: `User ${name} created sucessfully` };
};

export default {
  findUsers,
  createUsers,
};
