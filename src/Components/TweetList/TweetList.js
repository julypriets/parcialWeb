import React from 'react';
import { Card, Image, Container, Row, Col } from 'react-bootstrap';

const tweetList = (props) => {

    return(
        <div >
            <Card>
             <Card.Body>
                 <Container>
                     <Row>
                         <Col lg={1}><Image src={props.avatar} rounded /></Col>
                         <Col lg={11}><Card.Title>{props.first_name} {props.last_name} <p className="text-muted">{props.nick}</p> <p className="text-muted">{props.date}</p></Card.Title>
                <Card.Text>
                    <p>{props.content}</p>
                </Card.Text>
                <Card.Link href="#">Retweets: {props.retweets}</Card.Link>
                <Card.Link href="#">Favs: {props.favs}</Card.Link></Col>
                     </Row>
                 </Container>
                
                
             </Card.Body>
            </Card>
        </div>
    )
}

export default tweetList;