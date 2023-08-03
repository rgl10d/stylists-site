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
        <div id="triangle-mask">
          <p id="hero-btn-description">Ready for a new you?</p>
          <Link
            id="home-hero-appointment-btn"
            className="btn btn-primary"
            to="/about"
          >
            Book an Appointment
          </Link>
        </div>
        <div id="hero-gradient" />
      </div>
      {/* About Me Section */}
      <section id="home-about-section" className="container-fluid">
        <div className="row">
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
          <div className="col-sm-6">
            <img src="https://placehold.co/400" alt="placeholder" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
