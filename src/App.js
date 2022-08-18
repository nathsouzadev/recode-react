import './App.css';
import React from 'react';
import ComponentePrincipal from './components/ComponentePrincipal'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <ComponentePrincipal />
      <Footer valor='1'>
        Recode 2022
      </Footer>
    </>
  );
}

export default App;
