import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from '@material-ui/pickers';
import DateTimePicker from '@material-ui/pickers';
import Button from 'react-bootstrap/Button';

const AddSleepPeriodForm = ({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  addSleepPeriod
}) => {
  return (
    <div id='new'>
      <h2>
        Add new sleep period
      </h2>
      <form onSubmit={ addSleepPeriod() }>
        <label htmlFor='startTime'>Start time</label>
        <br />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          //onChange={event => setStartTime(event.target.value)}
          onChange={setStartTime}
          type='datetime-local'
          id='startTime'
          name='startTime'
          value={ startTime }
        />
        </MuiPickersUtilsProvider>
        <br />
        <label htmlFor='endTime'>End time</label>
        <br />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <DateTimePicker
          //onChange={event => setEndTime(event.target.value)}
          onChange={setEndTime}
          type='datetime-local'
          id='endTime'
          name='endTime'
          value={ endTime }
        />
        </MuiPickersUtilsProvider>
        <br />
        <p></p>
        <Button variant='info' type='submit'>Add new sleep period</Button>
      </form>
    </div>
  )
}

export default AddSleepPeriodForm