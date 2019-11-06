import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllProducts } from "../../redux/reducers/productReducer";

class Shop extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        const items = this.props.allProducts.map(
            ({ product_id, name, description, price, image_url }) => {
                return (
                    <div key={product_id}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>Price: ${price}</p>
                        <img src={image_url} alt={name}></img>
                        <br></br>
                        <button>Add to cart</button>
                    </div>
                );
            }
        );

        return (
            <div>
                <h2>Shop</h2>
                {items}
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        allProducts: reduxState.productReducer.allProducts
    };
};

const mapDispatchToProps = {
    getAllProducts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);
