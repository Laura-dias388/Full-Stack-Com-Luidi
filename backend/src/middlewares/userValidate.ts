import { Request, Response, NextFunction } from 'express';
import schema from '../schemas/validationsJoi';

const userValidate = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name } = req.body;
  const { error } = schema.validate({ name });
  if (error) return res.status(400).json(error.details[0].message);
  return next();
};

export default userValidate;
