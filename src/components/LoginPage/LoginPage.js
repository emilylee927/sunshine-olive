import React, { Component } from "react";
import { registerUser, loginUser } from "../../redux/reducers/userReducer";
import { connect } from "react-redux";

class LoginPage extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    };
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        if (e.target.name === "register") {
            this.props.registerUser(this.state);
        } else {
            this.props.loginUser({
                email: this.state.email,
                password: this.state.password
            });
        }
    };

    render() {
        let loginError = <p></p>;
        if (this.props.loginError) {
            loginError = (
                <p>Username or password is incorrect! Please try again :)</p>
            );
        }

        return (
            <div>
                <h1>Login or Register</h1>
                <label>Email</label>
                <input name="email" onChange={this.handleInput} />
                <br />
                <br />
                <label>Password</label>
                <input name="password" onChange={this.handleInput} />
                <br />
                <br />
                <label>First Name</label>
                <input name="first_name" onChange={this.handleInput} />
                <br />
                <br />
                <label>Last Name</label>
                <input name="last_name" onChange={this.handleInput} />
                <br />
                <br />
                <button name="register" onClick={this.handleSubmit}>
                    Sign Up
                </button>
                <button name="login" onClick={this.handleSubmit}>
                    Log In
                </button>
                {loginError}
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId,
        loginError: reduxState.userReducer.loginError
    };
};

const mapDispatchToProps = {
    registerUser,
    loginUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
