import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";

import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    userReducer,
    productReducer,
    cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(promise))
);

export default store;
