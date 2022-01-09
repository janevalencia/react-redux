// Import action types
import * as types from "./types";

// Define actions, return Object

// Get All Logs, an ASYNC operation
export const getLogs = () => async (dispatch, getState) => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    // DISPATCHING ACTION TO REDUCER (IF NO ERROR)
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
export const setLoading = () => (dispatch) => {
  // Return object
  dispatch({
    type: types.SET_LOADING,
  });
};

// Create new log, an ASYNC operation
export const createLog = (log) => async (dispatch) => {
  try {
    // POST request
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log), // body request
      headers: {
        "Content-Type": "application/json",
      },
    });

    // On success (200), this will return the newly created log object
    const data = await res.json();

    // DISPATCHING ACTION TO REDUCER (IF NO ERROR)
    dispatch({
      type: types.CREATE_LOG,
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
