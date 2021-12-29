import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { ReactDOM } from 'react';
import Infos from './Infos';
//import chaussures from '../images/chaussures.jpg';
import fidal_joacquime from '../images/fidal_joacquime.jpg';


function Team() {
    let team = Infos.team;



    let rows_team = team.map((emp) => (


        <Row className="justify-content-md-center" fluid rounded >

            <Col xs lg="6" fluid rounded>

                <Image src={fidal_joacquime} width='200' fluid roundedCircle />
                <h2>{emp.first_name}</h2>
                <h3>{emp.last_name}</h3>
                <i>{emp.role}</i>
            </Col>


        </Row>)
    );
    return (
        <Container fluid rounded>
            {rows_team}
        </Container>
    );

}






export default Team;