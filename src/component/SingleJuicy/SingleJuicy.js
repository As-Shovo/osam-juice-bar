import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const SingleJuicy = () => {

    const [infoJuicy, setInfoJuicy] = useState([]);
    const { id } = useParams();
    // console.log(id);

    const history = useHistory();

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setInfoJuicy(data.drinks[0]))
    }, [id])


    const handleDetailsBtn = () =>{
        history.push('/juicyBar')
    }

    console.log(infoJuicy);
    return (
        <div >
            <Card style={{ width: '20rem' }} className="mx-auto my-5">
                <Card.Img className="p-1" variant="top" src={infoJuicy?.strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{infoJuicy?.strDrink}</Card.Title>
                    <Card.Text>
                        {infoJuicy?.strInstructions}
                    </Card.Text>
                    <Button className="w-100" onClick={handleDetailsBtn} variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleJuicy;