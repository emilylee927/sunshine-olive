import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCart, removeFromCart } from "../../redux/reducers/cartReducer";

class Cart extends Component {
    componentDidMount() {
        this.props.getCart(this.props.user_id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.user_id !== prevProps.user_id) {
            this.props.getCart(this.props.user_id);
        }
    }

    handleRemove(cart_item_id) {
        return e => {
            this.props.removeFromCart(cart_item_id, this.props.user_id);
        };
    }

    render() {
        const items = this.props.cart.map(
            ({ cart_item_id, name, description, price, image_url }) => {
                return (
                    <div key={cart_item_id}>
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
                            className="remove-button"
                            onClick={this.handleRemove(cart_item_id)}
                        >
                            Remove from cart
                        </button>
                    </div>
                );
            }
        );

        return (
            <article>
                <h2>Cart</h2>
                <p>Total price: ${this.props.totalPrice}</p>
                <Link to="/checkout">
                    <button>Check out</button>
                </Link>
                {items}
            </article>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        cart: reduxState.cartReducer.cart,
        totalPrice: reduxState.cartReducer.totalPrice,
        user_id: reduxState.userReducer.user_id
    };
};

const mapDispatchToProps = {
    getCart,
    removeFromCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
