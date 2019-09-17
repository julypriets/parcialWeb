import React from 'react';
import { Card, Image } from 'react-bootstrap';

const toFollow = (props) => {

    return(
        <div >
              <Card bg="light" style={{ width: '100%' }}>
                <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Image src={props.avatar} rounded />
                    <Card.Title>{props.first_name} {props.last_name}</Card.Title>
                    <Card.Text>
                        <p className="text-muted">{props.nick}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default toFollow;