import React, { useState } from "react";
import "./App.css";

import logo from "./assets/logos/logo-light.png";

import Navbar from "./components/Navbar/Navbar.js";

import Home from "./pages/Home/Home.js";
import Contact from "./pages/Contact/Contact.js";
import CFOAI from "./pages/CFOAI/CFOAI.js";
import BankruptcyProtection from "./pages/BankruptcyProtection/BankruptcyProtection.js";
import WasteManagement from "./pages/WasteManagement/WasteManagement.js";
import SAMOptimization from "./pages/SAMOptimization/SAMOptimization.js";

import Footer from "./components/Footer/Footer.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";

const routes = [
  {
    path: "/cfo-ai",
    component: CFOAI,
  },
  {
    path: "/bankruptcy-protection",
    component: BankruptcyProtection,
  },
  {
    path: "/waste-management",
    component: WasteManagement,
  },
  {
    path: "/staff-and-menu-optimization",
    component: SAMOptimization,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/",
    component: Home,
  },
];

function App() {
  const [lang, setLang] = useState("en"); // ma

  function handleLangChange(value) {
    setLang((currLang) => {
      if (currLang !== value) {
        return value;
      } else {
        return currLang;
      }
    });
  }

  const textGenerator = (english, mandarin) => {
    if (lang === "en") {
      return english;
    } else if (lang === "ma") {
      return mandarin;
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar handleLangChange={handleLangChange} lang={lang} logo={logo} textGenerator={textGenerator} ></Navbar>

      <Switch>
        {/* TODO: Add routes to explore pages */}

        {routes.map(({ path, component: C }) => (
          <Route path={path} render={(props) => <C {...props} lang={lang} textGenerator={textGenerator} />} />
        ))}
      </Switch>
      <Footer lang={lang}/>
    </Router>
  );
}

export default App;
