// Import action types
import * as types from "./types";

// Define actions, return Object

// Get All Logs
export const getLogs = async (dispatch, getState) => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    // getLogs return an array of Log objects (if no error) 
    dispatch({
      type: types.GET_LOGS,
      payload: data,
    });
  } catch (error) {
    // Return error if found
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  // Return object
  return {
    type: types.SET_LOADING,
  };
};
