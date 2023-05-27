import connection from './connection.js';

const findUsers = async () => {
  const query = 'SELECT name FROM Usuarios;';
  const [data] = await connection.execute(query);
  return data;
};

const createUsers = async (name) => {
  const query = 'INSERT INTO Usuarios(name) VALUES(?);';
  const [{ affectedRows }] = await connection.execute(query, [name]);
  return affectedRows;
};

export default {
  findUsers,
  createUsers,
};
