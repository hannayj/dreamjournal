import React from 'react';
import SleepPeriod from './SleepPeriod'
import AddSleepPeriodForm from './AddSleepPeriodForm'
import Filter from './Filter'

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
      <Filter
        filterStartDate={filterStartDate}
        setFilterStartDate={setFilterStartDate}
        filterEndDate={filterEndDate}
        setFilterEndDate={setFilterEndDate}
      />
      <h1>
        Sleep periods
      </h1>
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