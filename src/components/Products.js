import React, { Component, useState } from 'react';
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
    //console.log(images);

    return images;
}



function Products({ products, shoppingList, setShoppingList, total, setTotal, quantite, setQuantite, qteTotal, setQteTotal }) {
    //const [shoppingList, setShoppingList] = useState([]);
    //const { products } = Infos;
    let list_products = products;
    //console.log("****************" + window.location.origin)
    let images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));



    //console.log(list_products.forEach(el => (console.log(el.img_prod_src))));
    let rows_products = list_products.map((product) => (
        <div className='row justify-content-center' >
            <div className='fluid col-12 col-sm-12 col-md-8 col-lg-6'>
                <Container className='fluid border border-danger rounded m-0 mt-1' >
                    <Row className='fluid '>
                        <img className='img-fluid m-2 rounded' src={images[product.img_prod_src].default} alt="" />
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

                    <Row className='d-flex justify-content-center m-2 bg-warning rounded'>
                        <Col>
                            
                            <h3 className=" text-white bold" >Prix: {product.price} €</h3>
                        </Col>
                        {product.isSpecialOffer && <Col>
                            <span class="text-white fond-weight-bold"> SOLDES </span>
                        </Col>}
                        

                    </Row>
                </Container>



            </div>
        </div >

    ));

    return (
        <Container className="justify-content-center " rounded >
            <h1 className="d-flex justify-content-center" > Nos produits </h1>
            {rows_products}
        </Container>


    );

}

export default Products;