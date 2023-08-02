import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home-hero" className="container-fluid">
      <Link id="home-hero-appointment-btn" className="btn btn-primary" to="/about">Book an Appointment</Link>
        <div id="triangle-mask">
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;
