// Import action types
import * as types from "./types";

// GET techs, an ASYNC operation
export const getTechs = () => async (dispatch) => {
  try {
    // Set loading to true
    setLoading();

    // Fetch technicians data from IT person API
    const res = await fetch("/ITpersons");
    const data = await res.json();

    // DISPATCH TO REDUCER (if success)
    dispatch({
      type: types.GET_TECHS,
      payload: data,
    });
  } catch (error) {
    // if error found
    dispatch({
      type: types.TECHS_ERROR,
      payload: error,
    });
  }
};

// POST tech, an ASYNC operation
export const createTech = (tech) => async (dispatch) => {
  try {
    // POST new technician data to resource
    const res = await fetch("/ITpersons", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    // DISPATCH TO REDUCER (if success)
    dispatch({
      type: types.CREATE_TECH,
      payload: data,
    });
  } catch (error) {
    // if error found
    dispatch({
      type: types.TECHS_ERROR,
      payload: error,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: types.SET_LOADING,
    payload: true,
  };
};
