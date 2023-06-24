import { Request, Response } from 'express';
import userService from '../service/userService';

const SERVER_ERROR = 'Internal server error';
const HTTP_ERROR = 500;

const findUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { type, message } = await userService.findUsers(Number(req.query.page));
    if (type) return res.status(404).json({ message });
    return res.status(200).json({ message });
  } catch {
    return res.status(HTTP_ERROR).json({ message: SERVER_ERROR })
  }
};

const createUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
  const { type, message } = await userService.createUsers(req.body.name);
  if (type) return res.status(400).json({ message });
  return res.status(201).json({ message });
  } catch {
    return res.status(HTTP_ERROR).json({ message: SERVER_ERROR })
  }
};

const deleteUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
  const { type, message } = await userService.deleteUsers(Number(req.params.id));
  if (type) return res.status(400).json({ message });
  return res.status(200).json({ message });
  } catch {
    return res.status(HTTP_ERROR).json({ message: SERVER_ERROR })
  }
};

const updateUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
  const { body: { name }, params: { id } } = req;
  const { type, message } = await userService.updateUsers(name, Number(id));
  if (type) return res.status(400).json({ message });
  return res.status(200).json({ message });
  } catch {
    return res.status(HTTP_ERROR).json({ message: SERVER_ERROR })
  }
};

export default {
  findUsers,
  createUsers,
  deleteUsers,
  updateUsers,
};
