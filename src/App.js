import React from 'react';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="jumbotron mt-5 lead">
          <ItemListContainer greeting="¡Bienvenido/a a mi tienda!" />
        </div>
      </div>
    </>
  );
}

export default App;
