import React from "react";
import routes from "./routes";
import "./App.css";
import Header from "./components/Header/Header";
// import SOlogo from "./img/SOlogo.png";

function App() {
    return (
        <div className="app-container">
            {/* <img className="logo" src={SOlogo}></img> */}
            <Header />
            {routes}
            <footer>
                <div>
                    <h5>Contact</h5>
                </div>
                <div>
                    <h5>Location</h5>
                </div>
                <div>
                    <h5>Subscribe</h5>
                </div>
            </footer>
        </div>
    );
}

export default App;
