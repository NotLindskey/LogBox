const editLogReducer = (state = [], action) => {
  switch (
    action.type // .payload || .type: title // date // entry
  ) {
    case 'EDIT_LOG':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default editLogReducer;
