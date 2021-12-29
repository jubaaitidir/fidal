import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { ReactDOM } from 'react';
import Infos from './Infos';
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
  
  
function Products() {
    let list_products = Infos.products;
    console.log("****************"+window.location.origin)
    let images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

    console.log(list_products.forEach(el=>(console.log(el.img_prod_src))));
    let rows_products = list_products.map((product) => (
        

        <Row className="justify-content-md-center" fluid rounded >

            <Col className="justify-content-md-center" xs lg="6" fluid rounded>
            {/* images[product.img_prod_src]        `../images/${product.img_prod_src}`*/}
                <Image src={`${product.img_prod_src}`} width='200' fluid rounded />
                <h2>{product.name_prod}</h2>
                <h3>{product.description}</h3>
            </Col>


        </Row>));
    return (
        <Container className="justify-content-md-center" fluid rounded>
            {rows_products}
        </Container>);

}

export default Products;