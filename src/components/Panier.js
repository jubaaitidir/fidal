import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import Infos from './Infos';


function Panier() {
    const { products } = Infos;
    return (
        <Container className="lg-col-6" style={{ backgroundColor: 'azure' }} fluid rounded>
            {products.map((product) => (
                <Row key={product.id_product}>
                    <Col>{product.name_prod}</Col>
                    <Col>{product.price} $</Col>
                    <Col></Col>
                </Row>
            ))}

        </Container>
    );
}
export default Panier;