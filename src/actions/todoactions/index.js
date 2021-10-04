import axios from "axios";

export const addTask = (state) => {
  return (dispatch) => {
    console.log(state);
    dispatch({
      type: "ADD_TASK",
      payload: state,
    });
  };
};

export const updateTask = (state) => {
  console.log(state);
  return (dispatch) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: state,
    });
  };
};
export const loadTask = () => {
  return async (dispatch) => {
    const res = await axios.get(".netlify/functions/gettodo");

    dispatch({
      type: "LOAD_TASK",
      payload: res.data,
    });
  };
};
