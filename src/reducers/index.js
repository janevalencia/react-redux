import { combineReducers } from "redux";

// Import individual reducers
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
    logReducer,
    tech: techReducer // you can set a custom name of the reducer i.e. tech
});