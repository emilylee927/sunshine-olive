import React, { Component } from "react";
import "./Instagram.css";

class Instagram extends Component {
    render() {
        return (
            <section className="instagram-container">
                <h2 className="instagram-header">Follow us</h2>
                <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                <iframe
                    src="//lightwidget.com/widgets/4aab775954da567cb7678f0a3d580370.html"
                    scrolling="no"
                    allowtransparency="true"
                    className="lightwidget-widget"
                    style={({ width: 700 }, { height: 500 }, { border: 0 })} //{ overflow: hidden }
                ></iframe>
            </section>
        );
    }
}

export default Instagram;
