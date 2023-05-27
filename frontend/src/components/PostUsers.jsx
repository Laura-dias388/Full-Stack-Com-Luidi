import { useState } from 'react';

export default function PostUsers() {
  const [name, setName] = useState('');

  const postUser = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <form onSubmit={postUser}>
        <label htmlFor="name">
            Name
            <input type="text" id="name" onChange={ ({ target: { value } }) => setName(value) }/>
        </label>
        <button type="submit">Enviar</button>
    </form>
  );
}
