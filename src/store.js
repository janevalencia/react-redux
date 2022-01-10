import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Import RootReducer: which stores multiple reducers in single storage
import rootReducer from "./reducers"; // this is the index.js inside reducers folder

const initialState = {};

const middleware = [thunk];

// Create the redux store which takes 3 params: the reducer, initiate state, and any middlewares
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
