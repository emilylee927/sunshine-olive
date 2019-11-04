import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

toast.configure();
function CheckOut() {
    const [product] = React.useState({
        name: "Fig Plant",
        price: 20.99
    });

    async function handleToken(token, address) {
        console.log({ token, address });
        axios.post("../../../server/index.js", {
            token,
            product
        });
        // const { status } = response.data;
        // if (status === "success") {
        //     toast("Success! Check email for details", {
        //         type: "success"
        //     });
        // } else {
        //     toast("Something went wrong", {
        //         type: "error"
        //     });
        // }
    }

    return (
        <div>
            <h2>CheckOut</h2>
            <StripeCheckout
                stripeKey="pk_test_JSlhzoBAx4yNgyFgOdybMzNN00Gmf2TaTH"
                token={handleToken}
            />
        </div>
    );
}

export default CheckOut;
