import React, { Component, Suspense, lazy, useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//import Loader from "react-loader-spinner";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Switch

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
import Loader from './Loader';


function App({ icons }) {
  const [shoppingList, setShoppingList] = useState([]);
  const [quantite, setQuantite] = useState(1);
  const [total, setTotal] = useState(0);
  const [qteTotal, setQteTotal] = useState(0);
  //console.log(icons.Basket);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [])

  return loader ? (<Loader />) : (


    <div className="App">
      <Router>

        <header className="App-header" id="header">
          <Menu products={Infos.products}
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
            total={total}
            setTotal={setTotal}
            quantite={quantite}
            setQuantite={setQuantite}
            qteTotal={qteTotal}
            setQteTotal={setQteTotal}
            icons={icons}

          />
        </header >




        <div className="align-items-center text-center App-body" id="main" style={{ 'padding-top': '85px' }}>

          <Routes className="content">
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path="/Team" element={<Team />} />

            <Route path="/Products" element={

              <Products
                products={Infos.products}
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
                total={total}
                setTotal={setTotal}
                quantite={quantite}
                setQuantite={setQuantite}
                qteTotal={qteTotal}
                setQteTotal={setQteTotal}
              />}

            />

          </Routes>
        </div>
      </Router >


      {/* <Home products={Infos.products} /> */}




      < footer id="footer" className="App-header my-0 col-12 justify-content-center text-center bg-warning p-3" >
        <Footer />
      </footer >

    </div >

  );
}

export default App;
