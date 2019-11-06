import React, { Component } from "react";
import "./Home.css";
import Pot1 from "../../img/pot1.png";
import Side1 from "../../img/side 1.png";
class Home extends Component {
    render() {
        return (
            <div className="homeDiv">
                <main>
                    <img className="side1" src={Side1}></img>

                    <title>
                        <h1 className="title">Sunshine </h1>
                        <h1 className="title">Olive</h1>
                    </title>
                    <img className="pot1" src={Pot1}></img>
                </main>
            </div>
        );
    }
}

export default Home;
