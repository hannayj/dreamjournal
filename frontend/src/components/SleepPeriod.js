import React from 'react';

const SleepPeriod = ({
  sleepPeriod,
  handleInputChange,
  saveSleepPeriod
}) => {
  return (
    <div className='product clearfix'>
      <form onSubmit={ saveSleepPeriod(sleepPeriod) }>
        <a href={ '/sleepPeriods/' + sleepPeriod.id }>
          Sleep period { sleepPeriod.id }
        </a>
        <p>Start time: { sleepPeriod.startTime }</p>
        <p>End time: { sleepPeriod.endTime }</p>
        <p>Duration: { sleepPeriod.duration }h</p>
        <br />
      </form>
    </div>
  )
}

export default SleepPeriod