import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../images/logo.png';
//import chaussures from './chaussures.jpg'
import Products from './Products';
import Team from './Team';
import History from './History';
import Home from './Home';
import Panier from './Panier';



function Menu({products}) {
    // alert(`selected ${eventKey}`)
    const handleSelect = (eventKey) => {
        switch (eventKey) {
            case "1":  {
                ReactDOM.render(
                    <React.StrictMode>
                        <Home products={products}/>

                    </React.StrictMode>,
                    document.getElementById('main')
                )
                 break;}
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
                        
                        <Products products={products} />

                    </React.StrictMode>,
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
                ReactDOM.render(
                    <React.StrictMode>
                        <Panier/>

                    </React.StrictMode>,
                    document.getElementById('main')
                );
                break;
            }

            default: alert('redirect to home page');
        }
    };

    return (
        <Navbar bg="primary" expand='lg' variant="blue" activeKey="1" onSelect={handleSelect} >
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
            
            <hr style={{color:'red'}}/>
            <Nav.Item className='md-6' rounded>
                <Nav.Link eventKey="5" title="panier" style={{ color: 'white' , backgroundColor: 'green', borderRadius:'5px'}} >
                    panier
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
        </Navbar>
    );
}


export default Menu;