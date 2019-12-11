import React from 'react';
import SleepPeriod from './SleepPeriod'
import AddSleepPeriodForm from './AddSleepPeriodForm'

const SleepPeriods = ({
    sleepPeriods,
    addSleepPeriod,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    filterStartDate,
    setFilterStartDate,
    filterEndDate,
    setFilterEndDate,
    updateSleepPeriod,
    removeSleepPeriod
  }) => {
  return (
    <div id='products'>
      <AddSleepPeriodForm
        addSleepPeriod={ addSleepPeriod }
        startTime={ startTime }
        setStartTime={ setStartTime }
        endTime={ endTime }
        setEndTime={ setEndTime }
      />
      <h2>
        Sleep periods
      </h2>
      { sleepPeriods.map((sleepPeriod) => 
        <SleepPeriod
          key={ sleepPeriod.id }
          sleepPeriod={ sleepPeriod }
          updateSleepPeriod={ updateSleepPeriod }
          removeSleepPeriod={ removeSleepPeriod }
        />
      ) }
    </div>
  )
}

export default SleepPeriods