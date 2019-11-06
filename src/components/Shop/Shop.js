import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
    getAllProducts,
    deleteProduct
} from "../../redux/reducers/productReducer";

class Shop extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    componentDidUpdate(prevProps) {
        this.props.getAllProducts();
    }

    handleDelete(product_id) {
        return e => {
            this.props.deleteProduct(product_id);
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
                        <img src={image_url} alt={name}></img>
                        <br></br>
                        <button>Add to cart</button>
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
        isadmin: reduxState.userReducer.isadmin
    };
};

const mapDispatchToProps = {
    getAllProducts,
    deleteProduct
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);
