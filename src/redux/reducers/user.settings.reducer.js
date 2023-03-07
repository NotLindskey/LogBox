const userSettings = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return console.log('Inside settings reducer!', action.type);
  }
};

export default userSettings;
