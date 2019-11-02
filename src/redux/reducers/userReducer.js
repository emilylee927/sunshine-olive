import axios from "axios";

const initialState = {
    user_id: null,
    first_name: "",
    last_name: "",
    isadmin: false,
    authError: false
};

const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const RESET_AUTH_ERROR = "RESET_AUTH_ERROR";

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

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: axios.post("/auth/logout")
    };
}

export function resetAuthError() {
    return {
        type: RESET_AUTH_ERROR
    };
}

export default function reducer(state = initialState, action) {
    const { type, payload, error } = action;
    switch (type) {
        case `${REGISTER_USER}_FULFILLED`:
            return {
                user_id: payload.data.user_id,
                first_name: payload.data.first_name,
                last_name: payload.data.last_name,
                isadmin: payload.data.isadmin,
                authError: false
            };
        case `${REGISTER_USER}_REJECTED`:
            return {
                ...state,
                authError: error
            };
        case `${LOGIN_USER}_FULFILLED`:
            return {
                user_id: payload.data.user_id,
                first_name: payload.data.first_name,
                last_name: payload.data.last_name,
                isadmin: payload.data.isadmin,
                authError: false
            };
        case `${LOGIN_USER}_REJECTED`:
            return {
                ...state,
                authError: error
            };
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...initialState
            };
        case RESET_AUTH_ERROR:
            return {
                ...state,
                authError: false
            };
        default:
            return state;
    }
}
