import axios from "axios";

const initialState = {
    user_id: null,
    first_name: "",
    last_name: "",
    isadmin: false,
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
                user_id: payload.data.user_id,
                first_name: payload.data.first_name,
                last_name: payload.data.last_name,
                isadmin: payload.data.isadmin
            };
        case `${LOGIN_USER}_FULFILLED`:
            return {
                user_id: payload.data.user_id,
                first_name: payload.data.first_name,
                last_name: payload.data.last_name,
                isadmin: payload.data.isadmin,
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
