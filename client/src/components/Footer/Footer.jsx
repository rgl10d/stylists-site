import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div id="footer-container" className='container-fluid'>
            <footer id="footer-elements" className='py-1 my-4'>
                <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='footer-item'>
                        <p>Home</p>
                    </li>
                    <li className='footer-item'>
                        <p>About Me</p>
                    </li>
                    <li className='footer-item'>
                        <p>Styles</p>
                    </li>
                    <li className='footer-item'>
                        <p>Book Appointment</p>
                    </li>
                </ul>
                <p id="copyright-text" className='text-center'>Kelly Cuts</p>
            </footer>
        </div>
    );
};

export default Footer;