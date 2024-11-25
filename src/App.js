import './App.css';
import React from 'react';
import Saludo from './components/Saludo';
import Despedida from './components/Despedida';

function App() {

  const usuario = true;
  const nombre = "Jose Miguel";

  return (
   <div>
    {usuario ? <Saludo nombre={nombre} /> : <Despedida nombre={nombre} />}
   </div>
  );
}

export default App;