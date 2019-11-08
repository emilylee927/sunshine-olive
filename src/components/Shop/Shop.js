import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Shop.scss";

import {
    getAllProducts,
    deleteProduct
} from "../../redux/reducers/productReducer";

import { addToCart } from "../../redux/reducers/cartReducer";

class Shop extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    componentDidUpdate(prevProps) {
        if (this.props.user_id !== prevProps.user_id) {
            this.props.getAllProducts();
        }
    }

    handleDelete(product_id) {
        return e => {
            this.props.deleteProduct(product_id);
        };
    }

    handleAddToCart(product_id) {
        return e => {
            this.props.addToCart(product_id, this.props.user_id);
        };
    }

    render() {
        const addProductButton = this.props.isadmin ? (
            <Link to="/admin/addProduct">
                <button>Add Product</button>
            </Link>
        ) : null;

        const items = this.props.allProducts.map(
            ({ product_id, name, description, price, image_url }) => {
                const adminButtons = this.props.isadmin ? (
                    <div>
                        <button onClick={this.handleDelete(product_id)}>
                            Delete Product
                        </button>
                        <Link to={`/admin/uploadProductImage/${product_id}`}>
                            <button>Add/Edit Image</button>
                        </Link>
                    </div>
                ) : null;

                return (
                    <div key={product_id}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>Price: ${price}</p>
                        <img
                            src={image_url}
                            alt={name}
                            className="shop-image"
                        ></img>
                        <br></br>
                        <button
                            className="Add"
                            onClick={this.handleAddToCart(product_id)}
                        >
                            Add to cart
                        </button>
                        {adminButtons}
                    </div>
                );
            }
        );

        return (
            <div>
                <h2>Shop</h2>
                {addProductButton}
                {items}
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        allProducts: reduxState.productReducer.allProducts,
        isadmin: reduxState.userReducer.isadmin,
        user_id: reduxState.userReducer.user_id
    };
};

const mapDispatchToProps = {
    getAllProducts,
    deleteProduct,
    addToCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);
