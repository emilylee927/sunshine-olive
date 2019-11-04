import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducers/userReducer";
import "./Header.css";

class Header extends Component {
    handleLogout = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        let loginInfo;
        if (this.props.user_id) {
            loginInfo = (
                <div>
                    <p>Logged in as {this.props.first_name}</p>
                    <a href="#" onClick={this.handleLogout}>
                        Logout
                    </a>
                </div>
            );
        } else {
            loginInfo = <Link to="/login">Login</Link>;
        }

        return (
            <div className="nav">
                <nav>
                    <Link>Cart</Link>
                    <Link to="/checkout">CheckOut</Link>
                    {loginInfo}
                </nav>
                <input placeholder="Search"></input>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/plantcare">Plant Care</Link>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        first_name: reduxState.userReducer.first_name,
        last_name: reduxState.userReducer.last_name
    };
};

const mapDispatchToProps = {
    logoutUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
