import React, { Component, Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
//import './App.css';
import Banner from './Banner';
import Menu from './Menu';
import Footer from './Footer';
import Infos from './Infos';
import Home from './Home';

function App() {

  return (

    <div className="App">



      <header className="App-header" id="header">

        <Menu products={Infos.products} />

      </header>


      <div className="align-items-center text-center App-body" id="main" style={{ 'padding-top': '150px' }}>
   
        <Home products={Infos.products} />

      </div>



      <footer id="footer" className="App-header my-0 col-12 justify-content-center text-center bg-warning p-3" >
        <Footer />
      </footer>

    </div>
  );
}

export default App;
