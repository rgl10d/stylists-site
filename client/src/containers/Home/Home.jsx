import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Image */}
      <div id="home-hero" className="container-fluid">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 text-center">
            <div id="opaque-box" className="p-4">
              <h2>Ready For A New You?</h2>
              <p>Check out the style catalog!</p>
              <Link className="btn btn-primary mr-2">Book an Appointment</Link>
              <button className="btn btn-secondary">Style Catalog</button>
            </div>
          </div>
        </div>
        <div id="hero-gradient" />
      </div>
      {/* About Me Section */}
      <section className="container">
        <div id="home-about-section" className="row">
          <div className="col-sm-6">
            <h3>I'm Kelly, nice to meet you!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              blanditiis saepe quos laudantium sunt at quam cum facere, ut hic.
              Velit in consequuntur veritatis necessitatibus quidem. Similique
              harum voluptatem ipsam odit atque magni nihil commodi,
              consequuntur vitae saepe reiciendis velit ipsum dignissimos dicta
              aliquid possimus accusantium sint itaque, modi labore est cum?
              Repellat quis ad eum ea magni facilis eaque sint voluptates quidem
              in enim, libero voluptatibus impedit. Quae fuga nisi blanditiis
              voluptate quidem quibusdam doloremque eligendi corporis quos
              perferendis quia nam vel, nostrum sint illum sed hic ex
              exercitationem, dolore dicta ullam iusto rem? Ab perferendis alias
              et fugit?
            </p>
            <button className="btn btn-danger">About Me!</button>
          </div>
          <div className="col-sm-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src="https://placehold.co/400"
              alt="placeholder"
            />
          </div>
        </div>
      </section>
      {/* Instagram Section */}
      <div id="home-instagram-section" className="container-fluid mt-5">
        <div id="home-instagram-row" className="row">
          {/* <div id="home-instagram-title" className="row"> */}
          <div className="col-sm-11">
            <h1>My Instagram</h1>
          </div>
          <div className="col-sm-1 d-flex justify-content-end align-items-center">
            <button className="btn btn-primary">See All</button>
          </div>
          {/* </div> */}
          <div className="col-md-3 mt-3">
            <img
              src="https://placehold.co/300"
              className="home-instagram-images img-fluid"
              alt="placeholder"
            />
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://placehold.co/300"
              className="home-instagram-images img-fluid"
              alt="placeholder"
            />
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://placehold.co/300"
              className="home-instagram-images img-fluid"
              alt="placeholder"
            />
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://placehold.co/300"
              className="home-instagram-images img-fluid"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div id="testimonials-section" className="container-fluid mt-5">
        <div className="row">
          <h1>Testimonials</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
