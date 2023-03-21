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
    <section className="entry-container">
      <div>
        <form onSubmit={createLog}>
          <h1>Create entry:</h1>
          <br />

          <label className="label-input" htmlFor="title">
            Title:
          </label>
          <input
            className="title-input"
            type="text"
            name="title"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />

          <label className="label-input" htmlFor="entry">
            Entry:
          </label>
          <input
            className="entry-input"
            type="text"
            name="entry"
            value={entry}
            required
            onChange={(event) => setEntry(event.target.value)}
          />

          <label className="label-input" htmlFor="date">
            Date:
          </label>
          <input
            className="date-input"
            type="date"
            name="date"
            value={date}
            required
            onChange={(event) => setDate(event.target.value)}
          />

          <div>
            <button type="submit">Create Entry!</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateLogForm;
