import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CreateLogForm.css';

function CreateLogForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [entry, setEntry] = useState('');

  const createLog = (event) => {
    event.preventDefault();
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
        <h1>Create your entry:</h1>
      </div>
      <br />

      <div>
        <form onSubmit={createLog}>
          <div className="label-input">
            <label htmlFor="title">Title:</label>
            <input
              className="title-input"
              type="text"
              name="title"
              value={title}
              required
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="label-input">
            <label htmlFor="entry">Entry:</label>
            <input
              className="entry-input"
              type="text"
              name="entry"
              value={entry}
              required
              onChange={(event) => setEntry(event.target.value)}
            />
          </div>

          <div className="label-input">
            <label htmlFor="date">Date:</label>
            <input
              className="date-input"
              type="date"
              name="date"
              value={date}
              required
              onChange={(event) => setDate(event.target.value)}
            />
          </div>

          <div>
            <button type="submit">Create Entry!</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateLogForm;
