import { useEffect, useState } from 'react';

export default function FetchUsers() {
  // Tudo que está acima do return é javascript
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3001/users');
      const result = await response.json();
      setUsuarios(result);
    };
    fetchUsers();
  }, []);

  return (
  // Tudo que está dentro do return é html,
  //  ao abrir um objeto dentro de uma tag é possivel usar javascript
    <section>
      <ul>{usuarios.map((person, index) => (
        <li key={index}>{person}</li>
      ))}</ul>
    </section>
  );
}
