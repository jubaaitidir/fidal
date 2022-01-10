import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { ReactDOM } from 'react';
import Infos from './Infos';
import fidal_joacquime from '../images/fidal_joacquime.jpg';


function History() {
    let history = Infos.history;



    let rows_history = history.map((hist) => (
    


            <Row className="justify-content-md-center" fluid rounded >

                <Col xs lg="6" className='border border-blue' fluid rounded>

                    <Image src={fidal_joacquime} width='200' fluid roundedCircle />
                    <h1 className='font-weight-bold font-italic'>{hist.title}</h1>
                    <h4>{hist.description}</h4>
                    <i>{hist.author}</i>
                </Col>


            </Row>)
    );
    return (
        <Container className="d-flex justify-content-center" fluid rounded>
            {rows_history}
        </Container>
    );

}






export default History;