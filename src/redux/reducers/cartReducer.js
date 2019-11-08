import axios from "axios";

const initialState = {
    cart: []
};

const GET_CART = "GET_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";

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

export function addToCart(product_id, user_id) {
    return {
        type: ADD_TO_CART,
        payload: axios.post(`/api/cart/${user_id}`, { product_id })
    };
}

export default function reducer(state = initialState, action) {
    const { type, payload, error } = action;
    switch (type) {
        case `${GET_CART}_FULFILLED`:
            return {
                ...state,
                cart: payload.data
            };
        case `${REMOVE_FROM_CART}_FULFILLED`:
            return {
                ...state,
                cart: payload.data
            };
        case `${ADD_TO_CART}_FULFILLED`:
            return {
                ...state,
                cart: payload.data
            };
        default:
            return state;
    }
}
