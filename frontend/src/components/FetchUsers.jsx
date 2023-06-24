import { useEffect, useState } from 'react';
import styles from '../styles/crudUsers.module.css';

export default function FetchUsers() {
  // Tudo que está acima do return é javascript
  const INITIAL_PLACE = 'Digite seu nome';
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  const [ usuarios, setUsuarios ] = useState([]);
  const [ name, setName ] = useState('');
  const [ isFetching, setIsFetching ] = useState(true);
  const [ error, setError ] = useState('');
  const [ placeholder, setPlaceholder ] = useState(INITIAL_PLACE);
  const [ newUser, setNewUser ] = useState({ id: '', userUpdated: '' });
  const [ page, setPage ] = useState(0);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users?page=${page}`);
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
  }, [ page ]);// atualiza a pagina em que esta

  const postUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/users`, {
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
    const response = await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
    const { message } = await response.json();
    console.log(message);
    fetchUsers();
  };

  const handleChange = ({ target }) => {
    setNewUser((prevState) => ({ ...prevState, [ target.name ]: target.value }));
  };

  const updateUser = async (event) => {
    event.preventDefault();
    console.log(newUser);
    const { id, userUpdated } = newUser;
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: userUpdated }),
    });
    const { message } = await response.json();
    console.log(message, 'message');
    fetchUsers();
  };

  const pageIncremente = () => {
    if (usuarios.length) {
    setPage((prevState) => prevState + 1);
    }
  }

  const pageDecremente = () => {
    if (page > 0) {
      setPage((prevState) => prevState - 1);
    }
  }

  return ( // alterou estado o return é chamado
    // Tudo que está dentro do return é html,
    //  ao abrir um objeto dentro de uma tag é possivel usar javascript
    <section className={ styles.sectionContainer }>
      <section className={ styles.formContainer }>
        <form className={ styles.form } onSubmit={ postUser }>
          <h1>Novo Usuário</h1>
          <input
            type="text"
            id="name"
            value={ name }
            className={ styles.input }
            placeholder={ placeholder }
            onChange={ ({ target: { value } }) => setName(value) } />
          <button className={ styles.button } type="submit">Enviar</button>
        </form>
        <form className={ styles.form } onSubmit={ updateUser }>
          <h2>Edite o usuário pelo id</h2>
          <select className={ styles.styleSelect } name="id" id="" onChange={ handleChange }>
            <option value="">Selecione Um Id</option>
            { usuarios.map(({ id }, index) => (
              <option key={ index } value={ id }>{ id }</option>
            )) }
          </select>
          <input
            type="text"
            placeholder="Usuário á ser atualizado"
            name="userUpdated"
            className={ styles.input }
            onChange={ handleChange } />
          <button className={ styles.button } type="submit">Atualizar</button>
        </form>
      </section>
      <section className={ styles.mainContainer }>
        { !isFetching ? (
          <section className={ styles.errorContainer }>
            { usuarios.length ? (
              <section className={ styles.tableContainer }>
                <table className={ styles.table }>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Username</th>
                      <th>Remover</th>
                    </tr>
                  </thead>
                  <tbody>
                    { usuarios.map((person, index) => (
                      <tr key={ index }>
                        <td>{ person.id }</td>
                        <td>{ person.name }</td>
                        <td><button
                          type="button"
                          className={ styles.tableDeletBtn }
                          onClick={ () => deleteUser(person.id) }>Deletar</button></td>
                      </tr>
                    )) }
                  </tbody>
                </table>
              </section>
            ) : (
              <span className={ styles.errorSpan }>{ error }</span>
            ) }
            <section className={ styles.pageContainer }>
              <button className={ styles.pageBtn } onClick={ pageDecremente }>Prev</button>
              <button className={ styles.pageBtn } onClick={ pageIncremente }>Next</button>
            </section>
          </section>
        ) : (
          <span>Loading...</span>
        ) }
      </section>
    </section>
  );
}
