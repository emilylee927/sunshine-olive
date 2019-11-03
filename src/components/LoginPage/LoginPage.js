import React, { Component } from "react";
import { loginUser, resetAuthError } from "../../redux/reducers/userReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginPage.css";

class LoginPage extends Component {
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
        this.props.loginUser({
            email: this.state.email,
            password: this.state.password
        });
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

        let loginErrorPtag = <p></p>;
        if (this.props.authError) {
            loginErrorPtag = (
                <p>Username or password is incorrect! Please try again :)</p>
            );
        }

        return (
            <main className="container">
                <h1 className="header">Login</h1>
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
                    </div>
                    <input
                        className="button"
                        type="submit"
                        onClick={this.handleSubmit}
                        value="Log in"
                    ></input>
                </form>
                {loginErrorPtag}
                <div className="register-or-login">
                    <p>No account yet? </p>
                    <Link to="/register">
                        <a>Register an account</a>
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
    resetAuthError,
    loginUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
