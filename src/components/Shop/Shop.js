import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllProducts } from "../../redux/reducers/productReducer";

class Shop extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        return (
            <div>
                <h2>Shop</h2>
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
