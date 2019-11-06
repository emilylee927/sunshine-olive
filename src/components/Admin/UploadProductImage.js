import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
    getProduct,
    uploadProductImage
} from "../../redux/reducers/productReducer";

class UploadProductImage extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    componentWillMount() {
        this.props.getProduct(this.props.match.params.product_id);
    }

    componentDidUpdate(prevProps) {
        this.props.getProduct(this.props.match.params.product_id);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.uploadProductImage(
            this.props.match.params.product_id,
            this.fileInput.current.files[0]
        );
        this.props.history.push("/shop");
    };

    render() {
        if (!this.props.isadmin) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <h2>Upload Product Image</h2>
                <div>
                    <h3>{this.props.productFocus.name}</h3>
                    <p>{this.props.productFocus.description}</p>
                    <p>Price: ${this.props.productFocus.price}</p>
                    <img
                        src={this.props.productFocus.image_url}
                        alt={this.props.productFocus.name}
                    ></img>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Upload file:
                        <input type="file" ref={this.fileInput} />
                        <input type="submit" value="Upload" />
                    </label>
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        isadmin: reduxState.userReducer.isadmin,
        productFocus: reduxState.productReducer.productFocus
    };
};

const mapDispatchToProps = { getProduct, uploadProductImage };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadProductImage);
