import React, { Component, useState } from 'react';
import { Container, Image, Row, Col, Button, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
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
    //console.log(images);

    return images;
}



function Products({ products, shoppingList, setShoppingList, total, setTotal, quantite, setQuantite, qteTotal, setQteTotal }) {

    let list_products = products;

    let images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

    let count = 0;
    for (let i = 1; i < 3000; i++) {

        count += Math.log10(i);
        console.log(count);
    }


    let rows_products = list_products.map((product) => (
        <div className='row justify-content-center mt-2 fluid' >
            <div className='fluid col-12 col-sm-12 col-md-8 col-lg-6 mt-2 m0'>
                <Card className='justify-content-center shadow' style={{ width: '' }} >
                    <Card.Img variant="top" src={images[product.img_prod_src].default} />
                    <Card.Body>
                        <Card.Title>{product.name_prod}</Card.Title>
                        <Card.Text>
                            <p>{product.description}</p>
                        </Card.Text>
                 
                        <Button className='text-danger justify-content-center border border-danger bg-white rounded'
                            onClick={() => {

                                console.log(shoppingList);

                                shoppingList.push({ 'prod': product, 'qte': 1 });
                                setShoppingList(shoppingList);
                                total += product.price;
                                setTotal(total);
                                qteTotal += 1;
                                setQteTotal(qteTotal);
                                alert(`1 produit est ajouté dans le panier , vous avez ${qteTotal} produits en attente`);


                            }}>
                            Ajouter au panier
                        </Button>
                        <Container>
                            <Row className='d-flex justify-content-center m-2 bg-warning fluid rounded'>
                                <Col>

                                    <h3 className=" text-white bold" >Prix: {product.price} €</h3>
                                </Col>
                                {product.isSpecialOffer && <Col className='fluid'>
                                    <span class="text-white fond-weight-bold"> SOLDES </span>
                                </Col>}


                            </Row>
                        </Container>

                    </Card.Body>
                </Card>

                {/* <Container className='fluid m-0 shadow rounded' >
                    <Row className='fluid '>
                        <Image className='fluid m-0 rounded' src={images[product.img_prod_src].default} alt="" />
                    </Row>
                    <Row className='fluid mt-2'>
                        <Col >
                            <h4>{product.name_prod}</h4>
                            <p>{product.description}</p>
                        </Col>
                        <Col>
                            <Container className='d-flex justify-content-center'>
                                <Button className='d-flex text-danger justify-content-center border border-danger bg-white rounded'
                                    onClick={() => {

                                        console.log(shoppingList);

                                        shoppingList.push({ 'prod': product, 'qte': 1 });
                                        setShoppingList(shoppingList);
                                        total += product.price;
                                        setTotal(total);
                                        qteTotal+=1;
                                        setQteTotal(qteTotal);


                                    }}>
                                    Ajouter au panier
                                </Button>
                            </Container>
                        </Col>

                    </Row>

                    <Row className='d-flex justify-content-center m-2 bg-warning fluid rounded'>
                        <Col>
                            
                            <h3 className=" text-white bold" >Prix: {product.price} €</h3>
                        </Col>
                        {product.isSpecialOffer && <Col className='fluid'>
                            <span class="text-white fond-weight-bold"> SOLDES </span>
                        </Col>}
                        

                    </Row>
                </Container> */}



            </div>
        </div >

    ));

    return (
        <Container className="justify-content-center  md-8 sm-10 lg-8" rounded >
            <h1 className="d-flex justify-content-center shadow mt-3 p-3 text-white bg-warning rounded" > Nos produits </h1>
            {rows_products}
        </Container>


    );

}

export default Products;