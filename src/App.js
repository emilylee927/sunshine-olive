import React from "react";
import routes from "./routes";
import "./App.css";
import Header from "./components/Header/Header";
import Instagram from "./components/Instagram/Instagram";
import Footer from "./components/Footer/Footer";
// import SOlogo from "./img/SOlogo.png";

function App() {
    return (
        <div className="app-container">
            {/* <img className="logo" src={SOlogo}></img> */}
            <Header />
            {routes}
            <Instagram />
            <Footer />
        </div>
    );
}

export default App;
