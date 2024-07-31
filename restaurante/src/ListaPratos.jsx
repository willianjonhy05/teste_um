import { useEffect, useState } from 'react';
import './ListaPratos.css';

function ListaPratos() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    fetch('https://api-restaurante-4aeb.onrender.com/listar-pratos')
      .then(response => response.json())
      .then(data => setPratos(data))
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  return (
    <div className="container">
      <h1>Lista de Pratos</h1>
      <ul>
        {pratos.map(prato => (
          <li key={prato.id}>
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <p>Ingredientes: {prato.ingredientes}</p>
            <p>Valor: R${prato.valor.toFixed(2)}</p>
            <p>Tempo de Preparo: {prato.tempoPreparo} minutos</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPratos;
