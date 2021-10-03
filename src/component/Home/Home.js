import React from 'react';
import { Container } from 'react-bootstrap';

import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <Container>
                <div className="home-info">
                    <h1>Welcome</h1>
                    <p>The Best Juicy Bar In Web</p>
                </div>
            </Container>

        </div>
    );
};

export default Home;