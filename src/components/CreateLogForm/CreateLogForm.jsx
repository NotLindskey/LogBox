import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function createNewLog() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [entry, setEntry] = useState('');

  const logEntry = () => {
    console.table('log entry clicked!');
  };

  const cancelButton = () => {
    history.push('/');
  };

  return (
    <form>
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
          Log Entry:
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
        <button onClick={logEntry}>Create Entry</button>
      </div>
      <div>
        <button onClick={cancelButton}>Cancel</button>
      </div>
    </form>
  );
}

export default createNewLog;
