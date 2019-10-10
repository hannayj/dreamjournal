import React, { useState, useEffect } from 'react'
import sleepPeriodService from './services/sleepPeriods'
import SleepPeriods from './components/SleepPeriods'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  const [sleepPeriods, setSleepPeriods] = useState([])
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [filterStartDate, setFilterStartDate] = useState('')
  const [filterEndDate, setFilterEndDate] = useState('')
  const [showFooter, setShowFooter] = useState(true)
  const [view, setView] = useState('sleepperiods')

  useEffect(() => {
    document.title = 'Sleep Diary'
    fetchSleepPeriods()
  }, [])

  const fetchSleepPeriods = () => {
    sleepPeriodService
      .getAll()
      .then(sleepPeriods => setSleepPeriods(sleepPeriods))
  }

  const hideFooter = () => {
    setShowFooter(false)
  }

  const changeView = (view) => () => {
    setView(view)
  }

  const addSleepPeriod = () => (event) => {
    event.preventDefault()
    const startTime = event.target.startTime.value
    const endTime = event.target.endTime.value
    if (startTime && endTime) {
      const sleepPeriod = {
        startTime: startTime,
        endTime: endTime,
      }
      sleepPeriodService
        .create(sleepPeriod)
        .then(createdSleepPeriod => {
          setSleepPeriods(sleepPeriods.concat(createdSleepPeriod))
          const date = new Date()
          setStartTime(date)
          setEndTime(date)
        })
        .catch(error => console.log(error))
    }
  }

  const updateSleepPeriod = (sleepPeriod) => (event) => {
    event.preventDefault()
    console.log("Saved!")
    // TODO: update modified sleep period
  }

  const filteredSleepPeriods = sleepPeriods.filter(sleepPeriod => {
    if (filterStartDate && filterEndDate) {
      const startTimeDate = new Date(sleepPeriod.startTime)
      const endTimeDate = new Date(sleepPeriod.endTime)
      if ((startTimeDate <= filterEndDate && startTimeDate >= filterStartDate) ||
          (endTimeDate >= filterStartDate && endTimeDate <= filterEndDate) ||
          (startTimeDate <= filterStartDate && endTimeDate >= filterEndDate)) {
        return true
      }
      return false
    }
    return true
  })

  return (
    <div id='container'>
      <Header
        changeView={ changeView }
      />
      <Nav
        changeView={ changeView }
      />
      <div id="main">
        { view === 'settings' &&
          // TODO: add settings view
          <></>
        }
        { view === 'sleepperiods' &&
          <SleepPeriods
            sleepPeriods={ filteredSleepPeriods }
            addSleepPeriod= { addSleepPeriod }
            startTime={ startTime }
            setStartTime={ setStartTime }
            endTime={ endTime }
            setEndTime={ setEndTime }
            filterStartDate={filterStartDate}
            setFilterStartDate={setFilterStartDate}
            filterEndDate={filterEndDate} 
            setFilterEndDate={setFilterEndDate}
            updateSleepPeriod={ updateSleepPeriod }
          />
        }
      </div>
      { showFooter &&
        <Footer
          hideFooter={ hideFooter }
        />
      }
    </div>
  )
}

export default App
