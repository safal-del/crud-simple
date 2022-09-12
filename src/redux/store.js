import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootreducer.js";
import logger from "redux-logger";

const middleware = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware,logger));

export default store;

