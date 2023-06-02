import userModel from '../model/userModel.js';

const findUsers = async () => {
  const userList = await userModel.findUsers();
  if (!userList.length) {
    return { type: 'error', message: 'Users not found' };
  }
  return { type: null, message: userList };
};

const createUsers = async ({ name }) => {
  const affectedRows = await userModel.createUsers(name);
  if (!affectedRows) {
    return { type: 'error', message: 'User not created' };
  }
  return { type: null, message: `User ${name} created sucessfully` };
};

const deleteUsers = async ({ id }) => {
  const affectedRows = await userModel.deleteUsers(id);
  if (!affectedRows) {
    return { type: 'error', message: 'User not deleted' };
  }
  return { type: null, message: 'User deleted sucessfully' };
};

const updateUser = async (name, id) => {
  const { affectedRows } = await userModel.updateUser(name, id);
  if (!affectedRows) {
    return { type: 'error', message: 'User not updated' };
  }
  return { type: null, message: `The user has been updated to ${name}` };
};

export default {
  findUsers,
  createUsers,
  deleteUsers,
  updateUser,
};
