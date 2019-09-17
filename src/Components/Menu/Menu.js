import React from 'react';
import { Image, Container, Col, Row } from 'react-bootstrap';

const menu = (props) => {

    return(
        <div >
            <Container>
                <Row>
                    <Col> <Image src={props.image} thumbnail/> </Col>
                    <Col> <h5>{props.text}</h5></Col>
                </Row>
            </Container>
        </div>
    )
}

export default menu;