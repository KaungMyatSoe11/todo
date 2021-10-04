import gettodos from "../utils/api/gettodos";

// const initstate = gettodos());
// console.log(initstate);

export const todoreducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_TASK":
      console.log(action);
      return action.payload;
    case "ADD_TASK":
      console.log(action);
      return [...state, action.payload];
    case "UPDATE_TASK":
      //   console.log({ update: action.payload });

      // eslint-disable-next-line array-callback-return
      state.map((item) => {
        if (item.text === action.payload.task) {
          item.status = !item.status;
        }
      });
      return [...state];
    default:
      return state;
  }
};
