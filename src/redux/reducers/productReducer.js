import axios from "axios";

const initialState = {
    allProducts: []
};

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export function getAllProducts() {
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get("/api/product")
    };
}

export default function reducer(state = initialState, action) {
    const { type, payload, error } = action;
    switch (type) {
        case `${GET_ALL_PRODUCTS}_FULFILLED`:
            return {
                allProducts: payload.data
            };
        default:
            return state;
    }
}
