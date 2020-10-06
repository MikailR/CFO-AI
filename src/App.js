import React, { Component } from "react";
import "./App.css";

import logo from "./assets/logos/logo-light.png";

import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

import Home from "./pages/Home/Home.js";
import Contact from "./pages/Contact/Contact.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar logo={logo}></Navbar>

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
