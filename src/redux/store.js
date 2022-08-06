import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import homeReducer from "./home-reducer";
import authReducer from "./auth-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    homePage: homeReducer,
    auth: authReducer,
    app: appReducer
})


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
window.__store__=store

export default store