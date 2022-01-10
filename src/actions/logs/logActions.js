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
      payload: error.response.statusText,
    });
  }
};

// Set loading to true, NOT ASYNC, don't require side effect (i.e. requesting API)
// then simple return is fine
export const setLoading = () => {
  // Return object
  return {
    type: types.SET_LOADING,
  };
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
      payload: error.response.statusText,
    });
  }
};

// Delete log, an ASYNC operation
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    // DELETE request with format /api/id (following JSON Fake API)
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    // DISPATCHING ACTION TO REDUCER (IF NO ERROR)
    dispatch({
      type: types.DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    // Return error if found
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Update log, an ASYNC operation
export const updateLog = (log) => async (dispatch) => {
  try {
    // PUT request to update the specific log
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    // DISPATCHING ACTION TO REDUCER (IF NO ERROR)
    dispatch({
      type: types.UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    // Return error if found
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Search logs
export const searchLogs = (input) => async (dispatch) => {
  try {
    setLoading();

    // JSON FAKE API endpoint allows us to query directly
    // Depending on your server API endpoint, this could be different
    const res = await fetch(`/logs?q=${input}`);
    const data = await res.json();

    // DISPATCHING ACTION TO REDUCER (IF NO ERROR)
    dispatch({
      type: types.SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    // Return error if found
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Set Current Active Log on the Edit Form before we can actually start editing
export const setCurrentLog = (log) => {
  return {
    type: types.SET_CURRENT_LOG,
    payload: log
  }
}

// Clear Current Log for the next use
export const clearCurrentLog = () => {
  return {
    type: types.CLEAR_CURRENT_LOG,
  }
}
