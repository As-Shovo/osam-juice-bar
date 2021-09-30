import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Juicy = (props) => {
    // console.log(props.juicy);
    const {idDrink, strDrink, strDrinkThumb } = props.juicy;

    const history = useHistory();


    const handleClick = () =>{
        history.push(`/juicyBar/${idDrink}`)
    }


    return (
        <Col md={3} xs={12} >
            <Card >
                <Card.Img className="p-1" variant="top" src={strDrinkThumb} />
                <Card.Body>
                    <Card.Title className="text-center">{strDrink}</Card.Title>
                    
                    <Button className="w-100" onClick={handleClick} variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Juicy;