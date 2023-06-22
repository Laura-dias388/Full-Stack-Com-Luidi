import { useEffect, useState } from 'react';

export default function FetchUsers() {
  // Tudo que está acima do return é javascript
  const INITIAL_PLACE = 'Digite seu nome';

  const [usuarios, setUsuarios] = useState([]);
  const [name, setName] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  const [placeholder, setPlaceholder] = useState(INITIAL_PLACE);
  const [newUser, setNewUser] = useState({ id: '', userUpdated: '' });

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      const { message } = await response.json();
      if (!response.ok) throw new Error(message);
      setUsuarios(message);
    } catch ({ message }) {
      setUsuarios([]);
      setError(message);
    }
    setIsFetching(false);
  };

  useEffect(() => { // é chamado ao entrar na página pela primeira vez
    fetchUsers();
  }, []);

  const postUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const { message } = await response.json();
      console.log(message);
      if (!response.ok) throw new Error(message);
    } catch ({ message }) {
      setPlaceholder(message);
      setTimeout(() => {
        setPlaceholder(INITIAL_PLACE);
      }, 3000);
    }
    setName('');
    fetchUsers();
  };

  const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' });
    const { message } = await response.json();
    console.log(message);
    fetchUsers();
  };

  const handleChange = ({ target }) => {
    setNewUser((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const updateUser = async (event) => {
    event.preventDefault();
    console.log(newUser);
    const { id, userUpdated } = newUser;
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: userUpdated }),
    });
    const { message } = await response.json();
    console.log(message, 'message');
    fetchUsers();
  };

  return ( // alterou estado o return é chamado
    // Tudo que está dentro do return é html,
    //  ao abrir um objeto dentro de uma tag é possivel usar javascript
    <section>
      <form onSubmit={postUser}>
        <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              value={ name }
              placeholder={placeholder}
              onChange={ ({ target: { value } }) => setName(value) }/>
        </label>
        <button type="submit">Enviar</button>
    </form>
    <section>
      {!isFetching ? (
        <section>
          { usuarios.length ? (
            <section>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Remover</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((person, index) => (
                    <tr key={index}>
                      <td>{person.id}</td>
                      <td>{person.name}</td>
                      <td><button
                        type="button"
                        onClick={ () => deleteUser(person.id)}>Deletar</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <form onSubmit={updateUser}>
                <h2>Edite o usuário pelo id</h2>
                <select name="id" id="" onChange={handleChange}>
                  <option value="">Selecione Um Id</option>
                  {usuarios.map(({ id }, index) => (
                    <option key={index} value={ id }>{id}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Usuário á ser atualizado"
                  name="userUpdated"
                  onChange={handleChange}/>
                <button type="submit">Atualizar</button>
              </form>
            </section>
          ) : (
            <span>{error}</span>
          )}
        </section>
      ) : (
        <span>Loading...</span>
      )}
    </section>
    </section>
  );
}
