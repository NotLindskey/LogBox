import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './EditLogEntry.css';

function EditLogEntry() {
  const [title, setNewTitle] = useState('');
  const [date, setNewDate] = useState('');
  const [entry, setNewEntry] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const updateEntry = () => {
    console.log('update entry clicked!');
    dispatch({ type: 'EDIT_LOG', payload: {} });
  };

  const cancelEditButton = () => {
    history.push('/home');
  };

  return (
    <section>
      <div>
        <h1>Edit Entry</h1>
      </div>

      <div>
        <form onSubmit={updateEntry}>
          {/* update entry input */}
          <div>
            <label htmlFor="entry">
              Entry:
              <input
                type="text"
                name="entry"
                value={entry}
                required
                onChange={(event) => setNewEntry(event.target.value)}
              />
            </label>
          </div>

          {/* update title input */}
          <div>
            <label htmlFor="title">
              Title:
              <input
                type="text"
                name="title"
                value={title}
                required
                onChange={(event) => setNewTitle(event.target.value)}
              />
            </label>

            {/* update date input */}
            <div>
              <label htmlFor="date">
                Date:
                <input
                  type="date"
                  name="date"
                  value={date}
                  required
                  onChange={(event) => setNewDate(event.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Update Entry Button */}
          <div>
            <button type="submit">Update Entry</button>
          </div>
          <div>
            <button onClick={cancelEditButton}>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditLogEntry;
