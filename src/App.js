import './App.css';
import React from 'react';
import Saludo from './componentes/Saludo';
import Despedida from './componentes/Despedida';

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