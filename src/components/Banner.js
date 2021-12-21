
import React from 'react';
import Infos from "./Infos";
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import vitrine from '../images/vitrine.jpg';


function Header() {
    return (<h1 className="d-flex justify-content-center" style={{ color: 'red' }}>{Infos.title.toUpperCase()}</h1>);
}

function Description() {
    return (<h3 className="d-flex justify-content-center">{Infos.description}, {Infos.adress}</h3>);
}

function Vitrine() {
    return (
        // style={{ width: '100%', color: 'red'}}
        <Container className='md-6' lg={6} fluid>
            <Row>
                <Col >
                    <Card className='text-center' fluid rounded>


                        <Card.Body style={{ display: 'Block', justifyContent: 'space-between', textAlign: 'center' }} >
                            <Card.Title style={{ color: 'red' }}>{Infos.title.toUpperCase()}</Card.Title>
                            <Card.Subtitle className="text-muted">{Infos.description.toUpperCase()}</Card.Subtitle>
                            <Card.Text>
                                {Infos.adress}
                            </Card.Text>
                       
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row fluid rounded>
                <Col >
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