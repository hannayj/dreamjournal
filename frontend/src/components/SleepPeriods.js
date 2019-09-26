import React from 'react';
import SleepPeriod from './SleepPeriod'
import AddSleepPeriodForm from './AddSleepPeriodForm'

const SleepPeriods = ({
    sleepPeriods,
    addSleepPeriod,
    startTime,
    endTime,
    handleInputChange,
    updateSleepPeriod
  }) => {
  return (
    <div id='products'>
      <AddSleepPeriodForm
        addSleepPeriod={ addSleepPeriod }
        startTime={ startTime }
        endTime={ endTime }
        handleInputChange={ handleInputChange }
      />
      { sleepPeriods.map((sleepPeriod) => 
        <SleepPeriod
          key={ sleepPeriod.id }
          sleepPeriod={ sleepPeriod }
          handleInputChange={ handleInputChange }
          updateSleepPeriod={ updateSleepPeriod }
        />
      ) }
    </div>
  )
}

export default SleepPeriods