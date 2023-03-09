import { combineReducers } from 'redux';

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

function deleteReducer(state = null, action) {
  switch (action.type) {
    case 'DELETE_LOG':
      return null;
    default:
      return state;
  }
}

// user will be on the redux state at:
// state.user
export default combineReducers({
  logReducer,
  // deleteReducer,
});
