import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import ItemListContainer from './components/ItemListContainer';
import {MiComponente} from './components/MiComponente'

const App = () => {

  const numero = 1;

  return ( 
    <>
      <NavBar />
      <ItemListContainer saludo='Bienvenidos'/>
      <MiComponente miNumero={numero}/>
    </>
  );
  }
  
export default App
