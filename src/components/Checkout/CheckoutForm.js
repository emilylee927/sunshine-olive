import React, { Component } from "react";
import { connect } from "react-redux";
import { CardElement, injectStripe } from "react-stripe-elements";
import "./CheckoutForm.css";

import {
    chargeStripe,
    resetSuccessMessage,
    removeAllItems
} from "../../redux/reducers/cartReducer";

class CheckoutForm extends Component {
    state = {
        formComplete: false
    };

    submit = async ev => {
        if (this.state.formComplete) {
            const { token } = await this.props.stripe.createToken({
                name: `${this.props.first_name} ${this.props.last_name}`
            });
            const tokenId = token.id;
            const chargeDesc = this.props.cart
                .map(cartItem => cartItem.name)
                .join(", ");
            this.props.chargeStripe(tokenId, this.props.totalPrice, chargeDesc);
        } else {
            alert("Cannot submit empty forms, please complete the form!");
        }
    };

    stripeElementChange = element => {
        if (!element.empty && element.complete) {
            this.setState({ formComplete: true });
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.successMessage !== "" && this.props.cart.length > 0) {
            this.props.removeAllItems(this.props.user_id);
        }
    }

    componentWillUnmount() {
        this.props.resetSuccessMessage();
    }

    render() {
        if (this.props.successMessage) {
            return (
                <div className="checkout">
                    <h2 className="checkout-title">
                        {this.props.successMessage}
                    </h2>
                </div>
            );
        }
        return (
            <div className="checkout">
                <h2 className="checkout-title">Check out</h2>
                <CardElement
                    className="checkout-stripe"
                    onChange={element => this.stripeElementChange(element)}
                />
                <button onClick={this.submit} className="checkout-button">
                    Pay ${this.props.totalPrice}
                </button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        totalPrice: reduxState.cartReducer.totalPrice,
        cart: reduxState.cartReducer.cart,
        successMessage: reduxState.cartReducer.successMessage,
        user_id: reduxState.userReducer.user_id,
        first_name: reduxState.userReducer.first_name,
        last_name: reduxState.userReducer.last_name
    };
};

const mapDispatchToProps = {
    chargeStripe,
    resetSuccessMessage,
    removeAllItems
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectStripe(CheckoutForm));
