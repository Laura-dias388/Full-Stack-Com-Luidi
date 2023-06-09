import { Request, Response } from 'express';
import userService from '../service/userService';

const findUsers = async (_req: Request, res: Response): Promise<Response> => {
  const { type, message } = await userService.findUsers();
  if (type) return res.status(404).json({ message });
  return res.status(200).json({ message });
};

const createUsers = async (req: Request, res: Response): Promise<Response> => {
  const { type, message } = await userService.createUsers(req.body.name);
  if (type) return res.status(400).json({ message });
  return res.status(201).json({ message });
};

const deleteUsers = async (req: Request, res: Response): Promise<Response> => {
  const { type, message } = await userService.deleteUsers(Number(req.params.id));
  if (type) return res.status(400).json({ message });
  return res.status(200).json({ message });
};

const updateUsers = async (req: Request, res: Response): Promise<Response> => {
  const { body: { name }, params: { id } } = req;
  const { type, message } = await userService.updateUsers(name, Number(id));
  if (type) return res.status(400).json({ message });
  return res.status(200).json({ message });
};

export default {
  findUsers,
  createUsers,
  deleteUsers,
  updateUsers,
};
