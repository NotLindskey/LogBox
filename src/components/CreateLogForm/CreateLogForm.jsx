import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './CreateLogForm.css';

function createNewLog() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [entry, setEntry] = useState('');

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

  return (
    <section>
      <div>
        <h1>Log New Entry</h1>
      </div>

      <div>
        <form onSubmit={createLog}>
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

          {/* Log Entry Button */}
          <div>
            <button type="submit">Create Entry</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default createNewLog;
