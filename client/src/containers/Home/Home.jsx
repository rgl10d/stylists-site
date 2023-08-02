import React from "react";
// import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home-hero" className="container-fluid">
        <h1>This is the home page.</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
