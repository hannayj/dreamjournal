import React from 'react';
import Product from './SleepPeriod'
import AddSleepPeriodForm from './AddSleepPeriodForm'

const SleepPeriods = ({
    sleepPeriods,
    addSleepPeriod,
    startTime,
    endTime,
    handleInputChange,
    saveSleepPeriod
  }) => {
  console.log(sleepPeriods)
  return (
    <div id='products'>
      <AddSleepPeriodForm
        addSleepPeriod={ addSleepPeriod }
        startTime={ startTime }
        endTime={ endTime }
        handleInputChange={ handleInputChange }
      />
      { sleepPeriods.map((sleepPeriod) => 
        <Product
          key={ sleepPeriod.id }
          sleepPeriod={ sleepPeriod }
          handleInputChange={ handleInputChange }
          saveSleepPeriod={ saveSleepPeriod }
        />
      ) }
    </div>
  )
}

export default SleepPeriods