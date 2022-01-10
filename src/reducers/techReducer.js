// Import action types
import * as types from "../actions/techs/types";

const initialState = {
    techs: null,
    loading: false,
    errors: null
}

const techReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TECHS:
            return (
                {
                    ...state,
                    techs: action.payload,
                    loading: false
                }
            )
        case types.SET_LOADING:
            return (
                {
                    ...state,
                    loading: true
                }
            )
        case types.TECHS_ERROR:
            // Print on console
            console.error(action.payload);
            return (
                {
                    ...state,
                    errors: action.payload
                }
            )
        default:
            return (
                {
                    ...state
                }
            )
    }
}

export default techReducer;