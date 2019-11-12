import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";

import CheckoutForm from "./CheckoutForm";

const { REACT_APP_STRIPE_API_KEY } = process.env;

class Checkout extends Component {
    render() {
        return (
            <StripeProvider apiKey={REACT_APP_STRIPE_API_KEY}>
                <Elements>
                    <CheckoutForm />
                </Elements>
            </StripeProvider>
        );
    }
}

export default Checkout;
