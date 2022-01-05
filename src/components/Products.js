import React, { Component } from 'react';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
import { ReactDOM } from 'react';

//import chaussures from '../images/chaussures_cuire.jpg';
//import produit_entretient from '../images/produits_entretien.jpg';
//import cle_securite from '../images/cle_securite.jpg';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {

        images[item.replace('./', '')] = r(item);
        console.log(item);
    });
    console.log(images);

    return images;
}


function Products({ products }) {
    //const { products } = Infos;
    let list_products = products;
    //console.log("****************" + window.location.origin)
    let images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

    //console.log(list_products.forEach(el => (console.log(el.img_prod_src))));
    let rows_products = list_products.map((product) => (
        <div className='row justify-content-center' key={product.code_prod}>
            <div className='col-lg-6'>
                <Container className='border border-primary rounded mt-2' fluid>
                    <Row className='mt-2'>
                        <Image className='mt-2' src={images[product.img_prod_src].default} alt="" fluid rounded/>
                    </Row>
                    <Row className='mt-2'>
                        <Col >
                            <h4>{product.name_prod}</h4>
                            <p>{product.description}</p>
                        </Col>
                        <Col>
                            <Container className='d-flex justify-content-center'>
                                <Button className='d-flex justify-content-center' bg="light" variant="danger">commander</Button>
                            </Container>
                        </Col>

                    </Row>

                    <Row className='mt-2'>
                        <Col>
                            <h3 className="d-flex justify-content-center" >{product.price} euros</h3>
                        </Col>
                        <Col>
                            <span class="badge bg-warning rounded-pill">{product.isSpecialOffer && "SOLDES"}</span>
                        </Col>
                    </Row>
                </Container>


            </div>
        </div>
    
    ));

    return (
        <Container className="justify-content-center" rounded >
            <h1 className="d-flex justify-content-center" > Nos produits </h1>
            {rows_products}
        </Container>


    );

}

export default Products;