// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Button, Navbar, Nav, NavDropdown, Container, Row, Col, Offcanvas } from 'react-bootstrap';
// import Infos from './Infos';
// import { useState } from 'react';
// import { render } from '@testing-library/react';


// function Panier({ show, setShow, handleClose, shoppingList, setShoppingList }) {
//     const { products } = Infos;
//     //const [show, setShow] = useState(false);
//     console.log("je suis dans le panier ");
//     shoppingList.map((element)=>console.log(element.name_prod));
//     // const handleClose = () => setShow(false);
//     // const handleShow = () => setShow(true);
//     // if (valueHandleShow) {
//     //     setShow(valueHandleShow)
//     // }
//     //handleShow();

//     return (
//         <Container className="lg-col-6" style={{ backgroundColor: 'azure' }} fluid rounded>
//             {/* {products.map((product) => (
//                 <Row key={product.id_product}>
//                     <Col>{product.name_prod}</Col>
//                     <Col>{product.price} $</Col>
//                     <Col></Col>
//                 </Row>
//             ))} */}

//             {/* <Button variant="primary" onClick={handleShow}>
//                 Launch
//             </Button> */}


//             {/* <Offcanvas show={show} onHide={setShow(false)}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     Some text as placeholder. In real life you can have the elements you
//                     have chosen. Like, text, images, lists, etc.
//                 </Offcanvas.Body>
//             </Offcanvas> */}

//         </Container>
    
//     );
// }
// //render(Panier);
// export default Panier;