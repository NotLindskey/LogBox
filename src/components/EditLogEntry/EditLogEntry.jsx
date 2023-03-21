import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './EditLogEntry.css';

function EditLogEntry() {
  // ----- not most optimal - however, pulls request for all posts,
  // stored within the store.log variable parsed to the page
  // current_id is pulled from useParams() as this is parsed to page
  // post/log data is retrieved from a where object equals manner.
  // this is where we use parsed_data.find by item id where the ID matches the URL

  // const parsed_data = useSelector((store) => store.log);
  // const current_id = useParams();
  // var data_display = parsed_data.find((item) => item.id == current_id.id);

  // const current_title = data_display.title;
  // const current_entry = data_display.entry;
  // const current_date = data_display.date;
  // const current_date_formatted = new Date(current_date);
  // console.log(current_date_formatted);
  // ----- need to work on displaying inputs of selected id

  const [title, setNewTitle] = useState('');
  const [entry, setNewEntry] = useState('');
  const [date, setNewDate] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();

  const updateEntry = (event) => {
    event.preventDefault();
    console.log('update entry clicked!');
    dispatch({
      type: 'EDIT_LOG',
      payload: {
        id: id,
        title: title,
        entry: entry,
        date: date,
      },
    });
    history.push('/home');
  };

  const cancelEditButton = () => {
    history.push('/home');
  };

  return (
    <section className="edit-section">
      <div>
        <h1>Edit Entry</h1>
      </div>

      <div>
        <form onSubmit={updateEntry}>
          {/* update title input */}
          <div>
            <label htmlFor="title">
              Title:
              <input
                type="text"
                name="title"
                value={title}
                // required
                onChange={(event) => setNewTitle(event.target.value)}
              />
            </label>
          </div>

          {/* update entry input */}
          <div>
            <label htmlFor="entry">
              Entry:
              <input
                type="text"
                name="entry"
                value={entry}
                // required
                onChange={(event) => setNewEntry(event.target.value)}
              />
            </label>
          </div>

          {/* update date input */}
          <div>
            <label htmlFor="date">
              Date:
              <input
                type="date"
                name="date"
                value={date}
                // required
                onChange={(event) => setNewDate(event.target.value)}
              />
            </label>
          </div>

          {/* Update Entry Button */}
          <div>
            <button type="submit">Update Entry</button>
          </div>
          <div>
            <button type="button" onClick={cancelEditButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditLogEntry;
