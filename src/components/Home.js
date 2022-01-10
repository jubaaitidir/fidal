import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { ReactDOM } from 'react';
import Products from './Products';
import Banner from './Banner';


function Home({products}) {



    return (
        <div className='col md-flex justify-content-center'>

            <Banner />
            {/* <Products products={products}/> */}

        </div>
    );
}

export default Home;