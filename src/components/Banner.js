
import React, { Suspense } from 'react';
import Infos from "./Infos";
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import vitrine from '../images/vitrine.jpg';



// function Header() {
//     return (<h1 className="d-flex justify-content-center" style={{ color: 'red' }}>{Infos.title.toUpperCase()}</h1>);
// }

// function Description() {
//     return (<h3 className="d-flex justify-content-center">{Infos.description}, {Infos.adress}</h3>);
// }

function Vitrine() {
    let count = 0;
    for (let i = 1; i < 2000; i++) {

        count += Math.log10(i);
        console.log(count);
    }

    return (
        // style={{ width: '100%', color: 'red'}}
        <Container className='md-flex justify-content-center' fluid>
            <Row>
                <Col className='text-center col-12 col-sm-12 col-md-4 col-lg-6'>
                   


                        {/* <div style={{ display: 'Block', justifyContent: 'space-between', textAlign: 'center' }} > */}
                            <h1 style={{ color: 'red', fontFamily: 'cursive' }}>{Infos.title.toUpperCase()}</h1>
                            <h3 className="text-muted" style={{ fontStyle: 'italic', fontFamily: 'cursive' }}>{Infos.description.toUpperCase()}</h3>
                            <p>
                                {Infos.adress}
                            </p>

                        {/* </div> */}
                   
                    {/* <Card className='text-center' fluid rounded>


                        <Card.Body style={{ display: 'Block', justifyContent: 'space-between', textAlign: 'center' }} >
                            <Card.Title style={{ color: 'red', fontSize: '3em', fontFamily: 'cursive' }}>{Infos.title.toUpperCase()}</Card.Title>
                            <Card.Subtitle className="text-muted" style={{ fontSize: '2em', fontStyle: 'italic', fontFamily: 'cursive' }}>{Infos.description.toUpperCase()}</Card.Subtitle>
                            <Card.Text>
                                {Infos.adress}{count}
                            </Card.Text>

                        </Card.Body>
                    </Card> */}
                </Col>
       
                <Col className='col-12 col-sm-12 col-md-8 col-lg-6'>
                    <Image src={vitrine} fluid rounded />
                </Col>
            </Row>

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