import axios from "axios";

import { LOGOUT_USER } from "./userReducer";

const initialState = {
    cart: [],
    totalPrice: 0,
    successMessage: ""
};

const GET_CART = "GET_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS";
const ADD_TO_CART = "ADD_TO_CART";
const CHARGE_STRIPE = "CHARGE_STRIPE";
const RESET_SUCCESS_MESSAGE = "RESET_SUCCESS_MESSAGE";

export function getCart(user_id) {
    return {
        type: GET_CART,
        payload: axios.get(`/api/cart/${user_id}`)
    };
}

export function removeFromCart(cart_item_id, user_id) {
    return {
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/api/cart/${user_id}/${cart_item_id}`)
    };
}

export function removeAllItems(user_id) {
    return {
        type: REMOVE_ALL_ITEMS,
        payload: axios.delete(`/api/cart/${user_id}`)
    };
}

export function addToCart(product_id, user_id) {
    return {
        type: ADD_TO_CART,
        payload: axios.post(`/api/cart/${user_id}`, { product_id })
    };
}

export function chargeStripe(tokenId, totalCharge, chargeDesc) {
    return {
        type: CHARGE_STRIPE,
        payload: axios.post("/api/charge", { tokenId, totalCharge, chargeDesc })
    };
}

export function resetSuccessMessage() {
    return {
        type: RESET_SUCCESS_MESSAGE,
        payload: {}
    };
}

function calcTotalPrice(cart) {
    const totalPrice = cart.reduce((prev, current) => {
        return prev + current.price;
    }, 0);
    return totalPrice;
}

export default function reducer(state = initialState, action) {
    const { type, payload, error } = action;
    switch (type) {
        case `${GET_CART}_FULFILLED`:
            return {
                ...state,
                cart: payload.data,
                totalPrice: calcTotalPrice(payload.data)
            };
        case `${REMOVE_FROM_CART}_FULFILLED`:
            return {
                ...state,
                cart: payload.data,
                totalPrice: calcTotalPrice(payload.data)
            };
        case `${REMOVE_ALL_ITEMS}_FULFILLED`:
            return {
                ...state,
                cart: initialState.cart,
                totalPrice: initialState.totalPrice
            };
        case `${ADD_TO_CART}_FULFILLED`:
            return {
                ...state,
                cart: payload.data,
                totalPrice: calcTotalPrice(payload.data)
            };
        case `${CHARGE_STRIPE}_FULFILLED`:
            return {
                ...state,
                successMessage: "Purchase successful."
            };
        case RESET_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: initialState.successMessage
            };
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...initialState
            };
        default:
            return state;
    }
}
