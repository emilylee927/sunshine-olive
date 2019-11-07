import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="contact">
                    <h5>Contact</h5>
                </div>
                <div className="location">
                    <h5>Location</h5>
                </div>
                <div className="subscribe">
                    <h5>Subscribe to our newletter</h5>
                </div>
                <div className="address">
                    <h5>3000 Main St. Dallas, TX-75202</h5>
                </div>
                <div className="email">
                    <h5>Email: _____</h5>
                </div>
            </footer>
        );
    }
}

export default Footer;
