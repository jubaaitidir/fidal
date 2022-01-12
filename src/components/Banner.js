
import React, { Suspense } from 'react';
import Infos from "./Infos";
import { Card, Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import vitrine from '../images/vitrine.jpg';
import { Button } from 'bootstrap';
import { Player } from 'video-react';

//import {products} from './Products';



// function Header() {
//     return (<h1 className="d-flex justify-content-center" style={{ color: 'red' }}>{Infos.title.toUpperCase()}</h1>);
// }

// function Description() {
//     return (<h3 className="d-flex justify-content-center">{Infos.description}, {Infos.adress}</h3>);
// }
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {

        images[item.replace('./', '')] = r(item);
        console.log(item);
    });
    //console.log(images);

    return images;
}

function Vitrine() {

    let products = Infos.products;
    let images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

    return (<Container>

        <div class="jumbotron jumbotron-fluid bg-danger">
            <div class="container">
                <h1 class="display-3">Fidal</h1>

                <hr class="my-2" />
                <h2 class="display-4">Cordonnerie de la ville de Garches</h2>

                <h1 class="btn  btn-md display-4 text-white" role="button"><i class="fa fa-address-book" aria-hidden="true">adresse : </i>{Infos.adress}</h1>


            </div>
        </div>
        <Container className='fluid' fluid>
            <Row>
                <Col className='col-6'>
                    {/* <Player className='' style={{'height':'200px', 'width':'400px'}}>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player> */}
                </Col>
            </Row>
        </Container>

        <Container className='fluid justify-content-center mt-2 py2' style={{ 'marginBottom': '2em' }} fluid>
            <Row className='justify-content-center mt-2' >
                {/* <Col className='text-center col-12 col-sm-12 col-md-4 col-lg-6 mt-2 shadow text-white bg-warning'>

                    <h1 style={{ color: 'red', fontFamily: 'cursive' }}>{Infos.title.toUpperCase()}</h1>
                    <span className="text-muted" style={{ fontStyle: 'italic', fontFamily: 'cursive', fontSize: '1.0rem' }}>{Infos.description.toUpperCase()}</span>
                    <p>
                        {Infos.adress}
                    </p>


                </Col> */}

                <Col className='col-12 col-sm-12 col-md-8 col-lg-8 mt-2 shadow '>
                    {/* <Image src={vitrine} fluid rounded /> */}

                    <Carousel >
                        {/* <Carousel.Item>
                            <img
                                className="d-block w-100 fluid"
                                src={vitrine}
                                style={{'max-height':'400px'}}
                                alt="Vitrine présentation Fidal"
                                fluid
                            />
                            <Carousel.Caption>
                                <h2 style={{color: 'red', fontFamily: 'cursive'}}>{Infos.title}</h2>
                                <h4 style={{color: 'green', fontFamily: 'cursive'}}>{Infos.adress}</h4>
                                <p>{Infos.description}</p>

                            </Carousel.Caption>
                        </Carousel.Item> */}
                        {products.map((prod) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ 'max-height': '45vh' }}
                                    src={images[prod.img_prod_src].default}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 style={{ color: 'red', fontFamily: 'cursive' }}>{prod.name_prod}</h3>
                                    <h4>{prod.description}</h4>


                                </Carousel.Caption>
                            </Carousel.Item>))}
                        {/* <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>

                </Col>
            </Row>

        </Container>
    </Container>
    );
}

function Banner() {
    return (<>

        <Vitrine />


    </>
    );
}

export default Banner;