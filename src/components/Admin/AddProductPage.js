import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { addProduct } from "../../redux/reducers/productReducer";

class AddProductPage extends Component {
    state = {
        name: "",
        description: "",
        price: 0,
        category: ""
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addProduct({
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category: this.state.category
        });
    };

    render() {
        if (!this.props.isadmin) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <h2>Add New Product</h2>
                <form>
                    <input
                        name="name"
                        onChange={this.handleInput}
                        placeholder="Name"
                    ></input>
                    <input
                        name="description"
                        onChange={this.handleInput}
                        placeholder="Description"
                    ></input>
                    <input
                        name="price"
                        type="number"
                        onChange={this.handleInput}
                        placeholder="Price"
                    ></input>
                    <input
                        name="category"
                        onChange={this.handleInput}
                        placeholder="Category"
                    ></input>
                    <input
                        type="submit"
                        onClick={this.handleSubmit}
                        value="Add"
                    ></input>
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        isadmin: reduxState.userReducer.isadmin
    };
};

const mapDispatchToProps = { addProduct };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductPage);
