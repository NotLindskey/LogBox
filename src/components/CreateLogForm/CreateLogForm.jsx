import React, { useState } from 'react';

function createNewLog() {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [entry, setEntry] = useState('');

  const logEntry = () => {
    console.table('log entry clicked!');
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
            required
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
            required
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
            required
            onChange={(event) => setEndTime(event.target.value)}
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
            required
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
            required
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
            required
            onChange={(event) => setEntry(event.target.value)}
          />
        </label>
      </div>
      {/* Log Entry Button */}
      <div>
        <button onClick={logEntry}>Create Entry</button>
      </div>
    </form>
  );
}

export default createNewLog;
