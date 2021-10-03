export const todoreducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log(action);
      return [...state, action.payload];
    case "UPDATE_TASK":
      //   console.log({ update: action.payload });

      // eslint-disable-next-line array-callback-return
      state.map((item) => {
        if (item.text === action.payload.text) {
          item.status = !item.status;
        }
      });
      return [...state];
    default:
      return state;
  }
};
