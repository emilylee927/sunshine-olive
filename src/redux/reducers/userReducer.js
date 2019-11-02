import axios from "axios";

const initialState = {
    userId: null,
    firstName: "",
    lastName: "",
    isAdmin: false,
    loginError: false
};

const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

export function registerUser(userInfo) {
    return {
        type: REGISTER_USER,
        payload: axios.post("/auth/register", userInfo)
    };
}

export function loginUser(userInfo) {
    return {
        type: LOGIN_USER,
        payload: axios.post("/auth/login", userInfo)
    };
}

export default function reducer(state = initialState, action) {
    const { type, payload, error } = action;
    switch (type) {
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                firstName: payload.data.firstName,
                lastName: payload.data.lastName,
                isAdmin: payload.data.isAdmin
            };
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                firstName: payload.data.firstName,
                lastName: payload.data.lastName,
                isAdmin: payload.data.isAdmin,
                loginError: false
            };
        case `${LOGIN_USER}_REJECTED`:
            return {
                ...state,
                loginError: error
            };
        default:
            return state;
    }
}
