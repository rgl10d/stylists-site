import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/about">About Me</Link>
            <h1>This is the home page.</h1>
        </div>
    );
};

export default Home;