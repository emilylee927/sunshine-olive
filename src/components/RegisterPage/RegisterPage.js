import React, { Component } from "react";
import { registerUser, resetAuthError } from "../../redux/reducers/userReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
            <main className="registerContainer">
                <h1>Register</h1>
                <div className="registerInputs">
                    <div>
                        <label>Email</label>
                        <input name="email" onChange={this.handleInput} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" onChange={this.handleInput} />
                    </div>
                    <div>
                        <label>First Name</label>
                        <input name="first_name" onChange={this.handleInput} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input name="last_name" onChange={this.handleInput} />
                    </div>
                    <div>
                        <label>Admin?</label>
                        <input type="checkbox" onChange={this.toggleIsAdmin} />
                    </div>
                </div>
                <div className="registerButton">
                    <button name="register" onClick={this.handleSubmit}>
                        Sign Up
                    </button>
                </div>
                {registrationError}
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
