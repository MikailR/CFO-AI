import React, { Component } from 'react';
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div className="nav flex-center-row">
                <a href="#" className="logo-link">LOGO</a>
                <a href="#" className="home-link">Home</a>
                <a href="#" className="contact-link">Contact</a>
            </div>
        );
    }
}

export default Navbar;