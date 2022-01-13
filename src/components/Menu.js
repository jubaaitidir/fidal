import React, { Component, useState } from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavDropdown, Container, Offcanvas, Spinner, FormControl, Form } from 'react-bootstrap';
import {
    BrowserRouter,
    Route,
    useParams,
    Routes
  } from "react-router-dom";

import logo from '../images/logo.png';
//import chaussures from './chaussures.jpg'
//import Products from './Products';

import Team from './Team';
import History from './History';
import Home from './Home';
import Panier from './Panier';
import Products from './Products';





function get_list_quantite(shoppingList) {
    let q = 0;
    let list_quantite = [];
    let product_compte = false;
    shoppingList.map((el) => {
        product_compte = false;
        shoppingList.map((occ) => {
            if (occ.prod.id_product == el.prod.id_product) {
                q++;

            }

        })
        list_quantite.map((exist) => {
            if (exist.prod.id_product == el.prod.id_product) {
                product_compte = true;

            }

        })
        if (!product_compte) {
            list_quantite.push({ 'prod': el.prod, 'qte': q });
            console.log(list_quantite);

        }

        q = 0;

    })


    return list_quantite;

}


function Menu({ products, icons }) {

    // const { products } = Infos;
    const [show, setShow] = useState(false);
    const [shoppingList, setShoppingList] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [quantite, setQuantite] = useState(1);
    const [total, setTotal] = useState(0);
    const [qteTotal, setQteTotal] = useState(0);
    let qteSoldes = 0;

    const clearBasket = () => {
        setQteTotal(0);
        setTotal(0);
        setQuantite(0);
        console.log(`shopping list before clean panier ${shoppingList}`);
        shoppingList.map((el) => {
            console.log(el.prod + ' ' + el.qte)
        })
        shoppingList.length = 0;
        setShoppingList(shoppingList);
        console.log(`shopping list after clean panier ${shoppingList}`);
        console.log(`shopping list after clean panier`);
        shoppingList.map((el) => {
            console.log(el.prod + ' ' + el.qte)
        })
        console.log(`nombre de produits dans le panier ${qteTotal}`);
       
    };



 
    const handleSelect = (eventKey) => {
        const Products = lazy(() => import("./Products"));

        switch (eventKey) {
            case "1": {
                ReactDOM.render(
                    <React.StrictMode>
                        <Home products={products} />

                    </React.StrictMode>,
                    document.getElementById('main')
                )
                break;
            }
            case "2": {
                ReactDOM.render(
                    <React.StrictMode>
                        <History />
                        {/* <BrowserRouter>

                            <Routes>

                                <Route path='/History' element={<History/>} />

                            </Routes>

                        </BrowserRouter> */}

                    </React.StrictMode>,
                    document.getElementById('main')
                );
                break;
            }
            case "3": {
                ReactDOM.render(
                    <React.StrictMode>
                        <Suspense

                            fallback={
                                <div >
                                    <Spinner animation="border" variant="danger"
                                        style={{
                                            flex: 1,
                                            marginTop: '15em',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }
                                        } >
                                        {/* <span className="sr-only">Loading...</span> */}
                                    </Spinner>
                                    <br />
                                    <h4 className="sr-only">Loading ...</h4>
                                </div >}>
                            <Products products={products} shoppingList={shoppingList} setShoppingList={setShoppingList} total={total} setTotal={setTotal} quantite={quantite} setQuantite={setQuantite} qteTotal={qteTotal} setQteTotal={setQteTotal} />
                        </Suspense>
                    </React.StrictMode >,
                    document.getElementById('main')
                );
                break;
            }
            case "4": {
                ReactDOM.render(
                    <React.StrictMode>
                        <Team />

                    </React.StrictMode>,
                    document.getElementById('main')
                );
                break;
            }
            case "5": {
                // ReactDOM.render(
                //     <React.StrictMode>
                //       <Products products={products} shoppingList={shoppingList} setShoppingList={setShoppingList} total={total} setTotal={setTotal} />


                //     </React.StrictMode>,
                //     document.getElementById('main')
                // );

                break;
            }

            default: alert('redirect to home page');
        }
    };

    return (<>

        <Navbar className='d-flex justify-content-center' collapseOnSelect fixed='top' expand="md" style={{ backgroundColor: "#D32F2F" }} variant="dark" onSelect={handleSelect}>
            <Navbar.Brand href="/Home">
                <logo
                    alt=""
                    width="30"
                    height="30"
                    className="d-inline-block align-top"

                />
                <img
                    alt="ma chaussure"
                    src={logo}
                    width="50px"
                    height="50px"
                    className="App-logo"

                />
                FIDAL
            </Navbar.Brand>

            <Nav.Link eventKey="5" title="équipe"  >
                <Button className='border border-warning text-warning bg-white border-none' onClick={handleShow}>
                    Panier {((qteTotal == 0) ? <icons.BsBasket3 /> : <icons.BsBasket3Fill />)} <span className='badge bg-warning text-danger text-weight-bolder'>{qteTotal}</span>
                </Button>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header className='col-12 text-white justify-content-center text-center bg-danger' closeButton>
                        <Offcanvas.Title>Panier  </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>



                        <div className='container-fluid justify-content-center text-white text-weight-bold'>

                            <div className='row bg-primary mt-2 rounded bg-warning'>
                                <div className='col-3 text-center'>Produit</div>
                                <div className='col-3 text-center'>prix</div>
                                <div className='col-3 text-center'>Quantité</div>

                                <div className='col-3 text-center'>Vente</div>
                            </div>


                            {(shoppingList.length == 0)
                                ? (<div className='row bg-primary mt-2 text-weight-bold align-items-center rounded' rounded>
                                    <div className='col-12 text-center'>Votre panier est vide</div>
                                </div>)
                                : (



                                    get_list_quantite(shoppingList).map((el) => (
                                        //qteTotal += el.qte,

                                        <div className='row bg-primary mt-2 text-weight-bold rounded' rounded>
                                            <div className='col-3 text-center'>{el.prod.name_prod}</div>
                                            <div className='col-3 text-center bg-warning'>{el.prod.price} €</div>
                                            <div className='col-3 text-center'>{el.qte}</div>
                                            {(el.prod.isSpecialOffer === true) && (qteSoldes++, <div className='col-3 badge bg-warning text-center'>Soldes</div>)}
                                        </div>)
                                    )
                                )


                            }


                            <div className='row bg-warning mt-2 rounded ' rounded>
                                <div className='col-3 text-center h4'>{("total").toUpperCase()} </div>
                                <div className='col-3 text-center h4'>{total} €</div>
                                <div className='col-3 text-center h4'>{qteTotal}</div>
                                {get_list_quantite(shoppingList).map((el) => {
                                    if (el.prod.isSpecialOffer) {
                                        qteSoldes += el.qte;
                                    }

                                }) ? <div className='col-3 text-center h5'>{qteSoldes} Soldes</div> : <div className='col-3 text-center'>O SOLDES</div>}

                            </div>
                            <div className='row mt-2 rounded ' rounded>
                                <div className='col-12 text-center h4'>
                                    <Button className='bg-danger border border-danger' onClick={clearBasket} >Vider le panier</Button>
                                </div>
                            </div>

                        </div>






                    </Offcanvas.Body>
                </Offcanvas>
            </Nav.Link>
            {/* 
            </Nav> */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className=" mr-auto justify-content-end">
                    <Nav.Link eventKey="1"  className='text-center text-weight-bold'>Home</Nav.Link>
                    <Nav.Link eventKey="2"  className='text-center'>History</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}


                    <Nav.Link className='text-center' eventKey="3"  title="produits">
                        Produits
                    </Nav.Link>
                    <Nav.Link className='text-center' eventKey="4"  title="équipe">
                        Team
                    </Nav.Link>


                </Nav>

            </Navbar.Collapse>
        </Navbar>

    </>
    );
}


export default Menu;


{/* <NavDropdown title="Dropdown" id="NavDropdown" fluid>
    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
</NavDropdown> */}
{/* {'   '}
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="form-inline my-2 sm-col-0 md-col-6 lg-col-8 my-lg-0">
        <input class="form-control md-col-4 " type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success md-col-4 my-sm-0" type="submit">Search</button>
    </form></div> */}
