import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import CancelLogButton from '../CancelLogButton/CancelLogButton';

// const entry = useSelector(store => store.entry)

function createNewLog() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [entry, setEntry] = useState('');

  const createLog = (event) => {
    console.table('this is the form on click!');
    dispatch({
      type: 'POST_LOG',
      payload: title,
      startTime,
      endTime,
      date,
      entry,
    });
  };

  return (
    <div>
      <form onSubmit={createLog}>
        <h1>Log New Entry</h1>
        {/* title input */}
        <div>
          <label htmlFor="Title">
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
        </div>
        {/* start time input */}
        <div>
          <label htmlFor="Start Time">
            Start Time:
            <input
              type="time"
              name="start time"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
            />
          </label>
        </div>
        {/* end time input */}
        <div>
          <label htmlFor="End Time">
            End Time:
            <input
              type="time"
              name="end time"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
            />
          </label>
        </div>
        {/* date input */}
        <div>
          <label htmlFor="Date">
            Date:
            <input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
        </div>
        {/* entry input */}
        <div>
          <label htmlFor="Entry">
            Entry:
            <input
              type="text"
              name="entry"
              value={entry}
              onChange={(event) => setEntry(event.target.value)}
            />
          </label>
        </div>
        {/* Log Entry Button */}
        <div>
          <button>Create Entry</button>
        </div>
      </form>
      <div>
        <div>
          <CancelLogButton />
        </div>
      </div>
    </div>
  );
}

export default createNewLog;
