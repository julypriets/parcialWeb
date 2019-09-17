import React from 'react';
import { Card} from 'react-bootstrap';

const trendList = (props) => {

    return(
        <div >
            <Card bg="light">
             <Card.Body>
                <Card.Title>#{props.hashtag}</Card.Title>
                <Card.Text ><p className="text-muted">{props.teweets} Tweets</p></Card.Text>
             </Card.Body>
            </Card>
        </div>
    )
}

export default trendList;