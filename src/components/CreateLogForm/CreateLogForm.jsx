import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './CreateLogForm.css';

// create new log component
function createNewLog() {
  const dispatch = useDispatch();
  const history = useHistory();

  // store: log contains:
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [entry, setEntry] = useState('');

  // upon user creation
  const createLog = (event) => {
    alert('Log created!');
    event.preventDefault();
    console.table('this is form data', createNewLog);
    dispatch({
      type: 'POST_LOG',
      payload: {
        title: title,
        date: date,
        entry: entry,
      },
    });
    history.push('/home');
  };

  // render to DOM
  return (
    <section>
      <div>
        <h1>Create your entry:</h1>
      </div>
      <br />

      <div>
        {/* start of form */}
        <form onSubmit={createLog}>
          {/* entry input */}
          <div>
            <label htmlFor="entry">
              Entry:
              <input
                type="text"
                name="entry"
                value={entry}
                required
                onChange={(event) => setEntry(event.target.value)}
              />
            </label>
          </div>

          {/* title input */}
          <div>
            <label htmlFor="title">
              Title:
              <input
                type="text"
                name="title"
                value={title}
                required
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
          </div>

          {/* date input */}
          <div>
            <label htmlFor="date">
              Date:
              <input
                type="date"
                name="date"
                value={date}
                required
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>

          {/* Log Entry Button */}
          <div>
            <button type="submit">Create Entry!</button>
          </div>
        </form>
        {/* end of form */}
      </div>
    </section>
  );
}

export default createNewLog;
