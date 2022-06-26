import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
      saludo='Bienvenidos'
      />
       
    </>
  );
}


export default App;
