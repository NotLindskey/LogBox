const logReducer = (state = [], action) => {
  console.table('in logReducer', action.payload);
  switch (action.type) {
    case 'SET_LOGS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default logReducer;
