const userSettings = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userSettings;

// notes to self, mar 14
// button
// on delete annynnn function
// into deleteLogButton function that takes in the log from the store
// delete log button = log => {
// if
// }
