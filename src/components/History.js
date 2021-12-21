import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { ReactDOM } from 'react';
import Infos from './Infos';
import fidal_joacquime from '../images/fidal_joacquime.jpg';


function History() {
    let history = Infos.history;



    let rows_history = history.map((hist) => (
    


            <Row className="justify-content-md-center" fluid fluid >

                <Col xs lg="6" className='border border-blue' fluid rounded>

                    <Image src={fidal_joacquime} width='200' fluid roundedCircle />
                    <h1>{hist.title}</h1>
                    <h3>{hist.description}</h3>
                    <i>{hist.author}</i>
                </Col>


            </Row>)
    );
    return (
        <Container fluid rounded>
            {rows_history}
        </Container>
    );

}






export default History;