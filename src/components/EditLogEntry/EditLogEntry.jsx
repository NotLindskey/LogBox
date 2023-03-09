import React, { useState } from 'react';

// don't forget to pass event
function editLogEntry() {
  const [title, setNewTitle] = useState('');
  const [date, setNewDate] = useState('');
  const [entry, setNewEntry] = useState('');

  const updateEntry = () => {
    console.log('updateEntry clicked!');
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
        </form>
      </div>
    </section>
  );
}

export default editLogEntry;
