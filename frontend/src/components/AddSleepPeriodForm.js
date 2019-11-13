import React from 'react';
import Button from 'react-bootstrap/Button';

const AddSleepPeriodForm = ({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  addSleepPeriod,
}) => {
  return (
    <div id='new'>
      <h2>
        Add new sleep period
      </h2>
      <form onSubmit={ addSleepPeriod() }>
        <label htmlFor='startTime'>Start time</label>
        <br />
        <input
          onChange={event => setStartTime(event.target.value)}
          type='datetime-local'
          id='startTime'
          name='startTime'
          value={ startTime }
        />
        <br />
        <label htmlFor='endTime'>End time</label>
        <br />
        <input
          onChange={event => setEndTime(event.target.value)}
          type='datetime-local'
          id='endTime'
          name='endTime'
          value={ endTime }
        />
        <br />
        <p></p>
        <Button variant='info' type='submit'>Add new sleep period</Button>
      </form>
    </div>
  )
}

export default AddSleepPeriodForm