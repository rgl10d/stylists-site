import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Link to="/">Go Home</Link>
            <h1>This is the about me page.</h1>
        </div>
    );
};

export default About;