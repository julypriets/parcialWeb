import React from 'react';
import { Image, Container, Col, Row } from 'react-bootstrap';

const menu = (props) => {

    return(
        <div >
            <Container>
                <Row>
                    <Col> <p className="text-muted">Términos</p> </Col>
                    <Col> <p className="text-muted">Cookies</p> </Col>
                    <Col> <p className="text-muted">Más información</p> </Col>
                </Row>
            </Container>
        </div>
    )
}

export default menu;