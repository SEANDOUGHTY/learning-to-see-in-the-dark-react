import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
