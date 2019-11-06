import axios from "axios";

const initialState = {
    allProducts: [],
    productFocus: {
        product_id: "",
        name: "",
        description: "",
        price: 0,
        category: "",
        image_id: "",
        image_url: ""
    }
};

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const UPLOAD_PRODUCT_IMAGE = "UPLOAD_PRODUCT_IMAGE";

export function getAllProducts() {
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get("/api/product")
    };
}

export function getProduct(product_id) {
    return {
        type: GET_PRODUCT,
        payload: axios.get(`/api/product/${product_id}`)
    };
}

export function addProduct(productInfo) {
    return {
        type: ADD_PRODUCT,
        payload: axios.post("/api/product", productInfo)
    };
}

export function deleteProduct(product_id) {
    return {
        type: DELETE_PRODUCT,
        payload: axios.delete(`/api/product/${product_id}`)
    };
}

export function uploadProductImage(product_id, file) {
    let formData = new FormData();
    formData.append("image", file);
    return {
        type: UPLOAD_PRODUCT_IMAGE,
        payload: axios.post(`/api/product/image/${product_id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    };
}

export default function reducer(state = initialState, action) {
    const { type, payload, error } = action;
    switch (type) {
        case `${GET_ALL_PRODUCTS}_FULFILLED`:
            return {
                ...state,
                allProducts: payload.data
            };
        case `${GET_PRODUCT}_FULFILLED`:
            return {
                ...state,
                productFocus: {
                    product_id: payload.data.product_id,
                    name: payload.data.name,
                    description: payload.data.description,
                    price: payload.data.price,
                    category: payload.data.category,
                    image_id: payload.data.image_id,
                    image_url: payload.data.image_url
                }
            };
        case `${ADD_PRODUCT}_FULFILLED`:
            return {
                ...state,
                allProducts: payload.data
            };
        case `${DELETE_PRODUCT}_FULFILLED`:
            return {
                ...state,
                allProducts: payload.data
            };
        default:
            return state;
    }
}
