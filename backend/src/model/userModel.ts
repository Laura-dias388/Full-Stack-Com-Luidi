import connection from './connection';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

const findUsers = async (): Promise<RowDataPacket[]> => {
  const query = 'SELECT * FROM Usuarios;';
  const [data] = await connection.execute<RowDataPacket[]>(query);// RowDataPacket usa quando a rota é get
  return data;// quando pede informação ao banco usa o RowDataPacket
};

const createUsers = async (name: string): Promise<ResultSetHeader> => {// ResultSetHeader quando não pede informação ao banco
  const query = 'INSERT INTO Usuarios (name) VALUES (?);';
  const [data] = await connection.execute<ResultSetHeader>(query, [name]);
  return data;
};

const deleteUsers = async (id: number): Promise<ResultSetHeader> => {
  const query = 'DELETE FROM Usuarios WHERE id = ?;';
  const [data] = await connection.execute<ResultSetHeader>(query, [id]);
  return data;
};

const updateUsers = async (name: string, id: number): Promise<ResultSetHeader> => {
  const query = 'UPDATE Usuarios SET name = ? WHERE id = ?;';
  const [data] = await connection.execute<ResultSetHeader>(query, [name, id]);
  return data;
};

export default {
  findUsers,
  createUsers,
  deleteUsers,
  updateUsers,
};