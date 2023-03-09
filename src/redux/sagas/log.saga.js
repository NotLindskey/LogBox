import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchLog() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/logs', config);
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in

    // .payload || .type: title // date // entry
    yield put({ type: 'SET_LOGS', payload: response.data });
  } catch (error) {
    console.log('Log get request failed', error);
  }
}

// workerSaga: will be fired on 'postLog' actions
function* postLog(action) {
  console.table(action.payload);
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    yield axios.post('/api/logs', action.payload, config);
    // now that the session has given us a user object
    // with an id and log set the client-side user object to let
    // the client-side code know the user is logged in

    // .payload || .type: title // date // entry
    yield put({ type: 'FETCH_LOG' });
  } catch (error) {
    console.log('Log post request failed', error);
  }
}

// worker saga will be fired on 'deleteLog' actions
function* deleteLog(action) {
  console.log('delete route hit', action.payload);
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    yield axios.delete(('/api/logs', action.payload, config));
    // now that the session has given us a user object
    // with an id and log set the client-side user object to let
    // the client-side code know the user is logged in

    // .payload || .type: title // date // entry
    yield put({ type: 'FETCH_LOG' });
  } catch (error) {
    console.log('log delete request failed', error);
  }
}

function* logSaga() {
  yield takeLatest('FETCH_LOG', fetchLog);
  yield takeLatest('POST_LOG', postLog);
  yield takeLatest('DELETE_LOG', deleteLog);
}

export default logSaga;
