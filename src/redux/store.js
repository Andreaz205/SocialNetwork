import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import homeReducer from "./home-reducer";
import authReducer from "./auth-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from "./app-reducer";
import chatReducer from "./chat-reducer.ts";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

let rootReducer = combineReducers({
    homePage: homeReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
    friends: friendsReducer,
    profile: profileReducer
})


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
window.__store__=store

export default store