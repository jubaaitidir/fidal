import React, { Component, Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";


//import './App.css';
import Banner from './Banner';
import Menu from './Menu';
import Footer from './Footer';
import Infos from './Infos';
import Home from './Home';
import History from './History';
import Products from './Products';
import Team from './Team';

function App({ icons }) {
  //console.log(icons.Basket);
  return (


    <div className="App">
          {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="Home" element={<Home />} />
            </Route>
            <Route path="History" element={<History />} />
            <Route path="Products" element={<Products />} />
            <Route path="Team" element={<Team />} />
            

          </Routes>
        </BrowserRouter> */}

      <header className="App-header" id="header">

        <Menu products={Infos.products} icons={icons} />

      </header>


      <div className="align-items-center text-center App-body" id="main" style={{ 'padding-top': '85px' }}>
    

        <Home products={Infos.products} />

      </div>



      <footer id="footer" className="App-header my-0 col-12 justify-content-center text-center bg-warning p-3" >
        <Footer />
      </footer>

    </div >
  );
}

export default App;
