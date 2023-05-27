import userService from '../service/userService.js';

const findUsers = async (_req, res) => {
  const { type, message } = await userService.findUsers();
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const createUsers = async (req, res) => {
  const { type, message } = await userService.createUsers(req.body);
  if (type) return res.status(400).json({ message });
  return res.status(201).json({ message });
};

export default {
  findUsers,
  createUsers,
};
