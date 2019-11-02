import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import promise from "redux-promise-middleware";
import userReducer from './reducers/userReducer';



const rootReducer = combineReducers({
    userReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promise)));

export default store;