import React from 'react';

const AddSleepPeriodForm = ({
  startTime,
  endTime,
  addSleepPeriod,
  handleInputChange
}) => {
  return (
    <div id='new'>
      <h1>
        Add new sleep period
      </h1>
      <form onSubmit={ addSleepPeriod() }>
        <label htmlFor='startTime'>Start time</label>
        <br />
        <input onChange={ handleInputChange() } type='datetime-local' id='startTime' name='startTime' value={ startTime } />
        <br />
        <label htmlFor='endTime'>End time</label>
        <br />
        <input onChange={ handleInputChange() } type='datetime-local' id='endTime' name='endTime' value={ endTime } />
        <br />
        <button type='submit'>Add new sleep period</button>
      </form>
    </div>
  )
}

export default AddSleepPeriodForm