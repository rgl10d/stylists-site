import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
