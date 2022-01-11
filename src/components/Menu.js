import React, { Component, useState } from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavDropdown, Container, Offcanvas, Spinner } from 'react-bootstrap';
import logo from '../images/logo.png';
//import chaussures from './chaussures.jpg'
//import Products from './Products';

import Team from './Team';
import History from './History';
import Home from './Home';
import Panier from './Panier';





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


function Menu({ products }) {

    // const { products } = Infos;
    const [show, setShow] = useState(false);
    const [shoppingList, setShoppingList] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [quantite, setQuantite] = useState(1);
    const [total, setTotal] = useState(0);
    const [qteTotal, setQteTotal] = useState(0);
    let qteSoldes = 0;





    // alert(`selected ${eventKey}`)
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
                                <div>
                                    <Spinner  animation="border" variant="danger" >
                                        {/* <span className="sr-only">Loading...</span> */}
                                    </Spinner>
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

    return (

        <Navbar fixed="top" bg="primary" expand='lg' variant="blue" activeKey="1" onSelect={handleSelect} >
            <Container fluid>
                <Navbar.Brand href="#home" style={{ color: 'red' }}>
                    <img
                        alt="ma chaussure"
                        src={logo}
                        width="50px"
                        height="50px"
                        className="App-logo"
                    />{' '}
                    FIDAL CORDONNERIE
                </Navbar.Brand>
            </Container>

            <Nav.Item className='md-6'>
                <Nav.Link eventKey="1" title="home" style={{ color: 'white', backgroundColor: 'Highlight' }}>
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='md-6'>
                <Nav.Link eventKey="2" title="histoire" style={{ color: 'white' }}>
                    Histoire
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='md-6'>
                <Nav.Link eventKey="3" title="produits" style={{ color: 'white' }}>
                    Produits
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='md-6'>
                <Nav.Link eventKey="4" title="Equipe" style={{ color: 'white' }} >
                    Equipe
                </Nav.Link>
            </Nav.Item>

            <hr style={{ color: 'red' }} />
            <Nav.Item className='md-6' rounded>
                <Nav.Link eventKey="5" title="panier" style={{ color: 'white', borderRadius: '5px' }} >
                    <Button variant="warning" onClick={handleShow}>
                        Panier {qteTotal}
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


                                {(shoppingList.length == 0) ? "Votre panier est vide"
                                    : (



                                        get_list_quantite(shoppingList).map((el) => (
                                            //qteTotal += el.qte,

                                            <div className='row bg-primary mt-2 text-weight-bold rounded' rounded>
                                                <div className='col-3 text-center'>{el.prod.name_prod}</div>
                                                <div className='col-3 text-center bg-warning'>{el.prod.price} €</div>
                                                <div className='col-3 text-center'>{el.qte}</div>
                                                {(el.prod.isSpecialOffer === true) && (qteSoldes++, <div className='col-3 badge bg-warning text-center'>Soldes</div>)}
                                            </div>)))


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

                            </div>





                        </Offcanvas.Body>
                    </Offcanvas>
                </Nav.Link>
            </Nav.Item>

            {/* <NavDropdown title="Dropdown" id="NavDropdown" fluid>
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            {'   '}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 sm-col-0 md-col-6 lg-col-8 my-lg-0">
                    <input class="form-control md-col-4 " type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success md-col-4 my-sm-0" type="submit">Search</button>
                </form></div>
        </Navbar>
    );
}


export default Menu;