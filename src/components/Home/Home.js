import React, { Component } from "react";
import "./Home.css";
import routes from "../../routes";
import { Link } from "react-router-dom";
import Pot1 from "../../img/pot1.png";
import Side1 from "../../img/side 1.png";
class Home extends Component {
    render() {
        return (
            <div className="homeDiv">
                <main>
                    <img className="side1" src={Side1}></img>
                    <div className="title">
                        <h1>Sunshine </h1>
                        <h1>Olive</h1>
                    </div>
                    <div className="subtitle">
                        <p>
                            Forgot how often you should water your plant? check
                            out "Plant Care" !
                        </p>
                    </div>
                    <div className="shop-button">
                        <button>
                            <Link to="/shop">Shop</Link>
                        </button>
                    </div>
                    <img className="pot1" src={Pot1}></img>
                </main>
            </div>
        );
    }
}

export default Home;
