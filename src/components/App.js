import React, { Component } from 'react';
//import './App.css';
import Banner from './Banner';
import Menu from './Menu';

function App() {
  return (
    <div ClassName="App">
      
      <header ClassName="App-header">
        <Menu />
      </header>

      <div ClassName="App-body" id="main">
        <Banner />
      </div>

    </div>
  );
}

export default App;
