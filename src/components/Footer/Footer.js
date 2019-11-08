import React, { Component } from "react";
import "./Footer.scss";

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
                    <h5>500 S Ervay St #101, Dallas, TX-75202</h5>
                    <p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5547893742314!2d-96.79796968498472!3d32.777545980971794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992200285d3b%3A0xd33e5192aa05ee73!2sDevMountain%20%7C%20Dallas!5e0!3m2!1sen!2sus!4v1573143756266!5m2!1sen!2sus"
                            width="300"
                            height="250"
                            frameborder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                        ></iframe>
                    </p>
                </div>
                <div className="email">
                    <input
                        className="signUp"
                        placeholder="Email address"
                    ></input>
                    <button>Sign up</button>
                </div>
            </footer>
        );
    }
}

export default Footer;
