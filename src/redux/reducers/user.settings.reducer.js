const userSettings = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userSettings;
