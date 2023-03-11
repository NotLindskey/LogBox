const logReducer = (state = [], action) => {
  switch (
    action.type // .payload || .type: title // date // entry
  ) {
    case 'SET_LOGS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default logReducer;
