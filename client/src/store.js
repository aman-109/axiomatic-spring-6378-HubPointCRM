import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { authReducer } from "./redux/auth/auth.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth:authReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)))