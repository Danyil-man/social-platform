import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profilereducer";
import messageReducer from "./messagereducer";
import sidebarReducer from "./sidebarreducer";
import usersReducer from "./usersreducer";
import authReducer from "./authreducer";

let reducerPack = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});


let store = createStore(reducerPack, applyMiddleware;

window.store = store;

export default store;