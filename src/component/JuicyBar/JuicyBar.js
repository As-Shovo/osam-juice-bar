import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, FormControl, Row } from 'react-bootstrap';
import Juicy from '../Juicy/Juicy';

import './JuicyBar.css';

const JuicyBar = () => {

    const [juicyData, setJuicyData] = useState([]);
    const [searchText, setSearchText] = useState('')

    const handleSearchInput = (e) => {
        const searchTextvalue = e.target.value;
        setSearchText(searchTextvalue);
    }

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJuicyData(data.drinks))
    }, [url])



    return (
        <div className="juicy-bar">
            <Container >
                <Row className="py-4">
                    <Col md={12}>
                        <FormControl
                            placeholder="Search Your Favorite Drinks"
                            onChange={handleSearchInput}
                        />
                    </Col>
                </Row>

                <Row className="g-2">

                    {
                        juicyData?.map(juicy => <Juicy key={juicy.idDrink} juicy={juicy}></Juicy>)
                    }

                </Row>

            </Container>
        </div>
    );
};

export default JuicyBar;