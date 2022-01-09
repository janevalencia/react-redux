// Import action types
import * as types from '../actions/logs/types';


// Setup initial state
const initialState = {
    logs: null,
    current: null,
    loading: false,
    errors: null
}

// Define logReducer
const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LOGS:
            return (
                {
                    ...state,
                    logs: action.payload,
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
        case types.LOGS_ERROR:
            console.error(action.payload);
            
            return (
                {
                    ...state,
                    error: action.payload
                }
            )
        default:
            return state;
    }
}

export default logReducer;