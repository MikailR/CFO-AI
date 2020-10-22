import React, { Component } from "react";
import "./App.css";

import logo from "./assets/logos/logo-light.png";

import Navbar from "./components/Navbar/Navbar.js";

import Home from "./pages/Home/Home.js";
import Contact from "./pages/Contact/Contact.js";
import CFOAI from "./pages/CFOAI/CFOAI.js";
import BankruptcyProtection from "./pages/BankruptcyProtection/BankruptcyProtection.js";
import WasteManagement from "./pages/WasteManagement/WasteManagement.js";
import SAMOptimization from "./pages/SAMOptimization/SAMOptimization.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar logo={logo}></Navbar>

      <Switch>
        {/* TODO: Add routes to explore pages */}

        <Route path="/cfo-ai" component={CFOAI} />
        <Route path="/bankruptcy-protection" component={BankruptcyProtection} />
        <Route path="/waste-management" component={WasteManagement} />
        <Route
          path="/staff-and-menu-optimization"
          component={SAMOptimization}
        />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
