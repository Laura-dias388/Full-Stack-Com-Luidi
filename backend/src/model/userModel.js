import connection from './connection.js';

const findUsers = async () => {
  const query = 'SELECT * FROM Usuarios;';
  const [data] = await connection.execute(query);
  return data;
};

const createUsers = async (name) => {
  const query = 'INSERT INTO Usuarios(name) VALUES(?);';
  const [{ affectedRows }] = await connection.execute(query, [name]);
  return affectedRows;
};

const deleteUsers = async (id) => {
  const query = 'DELETE FROM Usuarios WHERE id = ?;';
  const [{ affectedRows }] = await connection.execute(query, [id]);
  return affectedRows;
};

const updateUser = async (name, id) => {
  const query = 'UPDATE Usuarios SET name = ? WHERE id = ?;';
  const [data] = await connection.execute(query, [name, id]);
  return data;
};

export default {
  findUsers,
  createUsers,
  deleteUsers,
  updateUser,
};
