import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
    <Container className="flex-center" bg="dark" variant="dark">
        <Row>
            <Col className='md-col-4'>
                Liens
            </Col>
            <Col className='md-col-4'>
                Conditions Générales
            </Col>
            <Col className='md-col-4'>
               aminum@2021
            </Col>
            <Col className='md-col-4'   >
                Reseaux sociaux
            </Col>

        </Row>


    </Container>)
}
export default Footer;