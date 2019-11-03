import React, { Component } from "react";
import { registerUser, resetAuthError } from "../../redux/reducers/userReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "../LoginPage/LoginPage.css";

class RegisterPage extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        isadmin: false
    };

    componentDidMount() {
        this.props.resetAuthError();
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.registerUser(this.state);
    };

    toggleIsAdmin = e => {
        this.setState({ isadmin: !this.state.isadmin });
    };

    render() {
        if (this.props.user_id && !this.props.isadmin) {
            return <Redirect to="/" />;
        } else if (this.props.user_id && this.props.isadmin) {
            return <Redirect to="/admin" />;
        }

        let registrationError = <p></p>;
        if (this.props.authError) {
            registrationError = <p>Registration error! Please try again :)</p>;
        }

        return (
            <main className="container">
                <h1 className="header">Register</h1>
                <form className="form">
                    <div className="inputs">
                        <input
                            name="email"
                            onChange={this.handleInput}
                            placeholder="email@server.com"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleInput}
                            placeholder="••••••••••"
                        />
                        <input
                            name="first_name"
                            onChange={this.handleInput}
                            placeholder="First name"
                        />
                        <input
                            name="last_name"
                            onChange={this.handleInput}
                            placeholder="Last name"
                        />
                        {/* <div className="checkbox">
                            <input
                                type="checkbox"
                                onChange={this.toggleIsAdmin}
                            />
                            <label>Admin account?</label>
                        </div> */}
                    </div>
                    <input
                        className="button"
                        type="submit"
                        onClick={this.handleSubmit}
                        value="Register"
                    ></input>
                </form>
                {registrationError}
                <div className="register-or-login">
                    <p>Already have an account? </p>
                    <Link to="/login">
                        <a>Login</a>
                    </Link>
                </div>
            </main>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        authError: reduxState.userReducer.authError,
        isadmin: reduxState.userReducer.isadmin
    };
};

const mapDispatchToProps = {
    registerUser,
    resetAuthError
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterPage);
