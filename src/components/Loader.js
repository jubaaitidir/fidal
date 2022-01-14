import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import loaderGif from '../images/cordonnier.gif'
export default function Loader() {


    return (
        <div className='Container'>
            <div className="row align-items-center text-center">
                <div className='col-12'>
                    <img src={loaderGif} />
                </div>
                <div className='col-12'>
                    <Spinner animation="border" variant="danger"
                        style={{
                            flex: 1,
                            marginTop: '5em',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                        } >
                        {/* <span className="sr-only">Loading...</span> */}
                    </Spinner>

                </div>
            </div>
        </div>
    )
}
