import React, { Component, Suspense, lazy } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
//import './App.css';
import Banner from './Banner';
import Menu from './Menu';
import Footer from './Footer';
import Infos from './Infos';
import Home from './Home';
// const Banner = lazy(() => import("./Banner"));
function App() {

  return (

    <div className="App">



      <header className="App-header" id="header">
        <Menu products={Infos.products} />
      </header>

      
        <div className="align-items-center text-center App-body" id="main">
          <Home products={Infos.products}/>
        </div>
     
      <footer className="App-header" id="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
