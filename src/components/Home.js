import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { ReactDOM } from 'react';
import Products from './Products';
import Banner from './Banner';


function Home({products}) {



    return (
        <div className='row justify-content-center mt-3'>
        <div className='col md-flex '>

            <Banner />
            {/* <Products products={products}/> */}

        </div>
        </div>
    );
}

export default Home;