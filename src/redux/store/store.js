
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/reducers";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ thunk ]

const appliedMiddlewares = applyMiddleware(...middlewares);

export default createStore(reducers, composer(appliedMiddlewares));