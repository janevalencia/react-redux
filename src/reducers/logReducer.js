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
        case types.CREATE_LOG:
            return (
                {
                    ...state,
                    logs: [...state.logs, action.payload]
                }
            )
        case types.DELETE_LOG:
            return (
                {
                    ...state,
                    logs: state.logs.filter( log => log.id !== action.payload),
                    loading: false
                }
            )
        case types.UPDATE_LOG:
            return (
                {
                    ...state,
                    logs: state.logs.map(log => {
                        if (log.id === action.payload.id) {
                            return action.payload
                        } else {
                            return log
                        }
                        // return log.id === action.payload.id ? action.payload : log
                    })
                }
            )
        case types.SET_CURRENT_LOG:
            return (
                {
                    ...state,
                    current: action.payload
                }
            )
        case types.CLEAR_CURRENT_LOG:
            return (
                {
                    ...state,
                    current: null
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