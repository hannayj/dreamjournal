import React, { useState, useEffect } from 'react'
import sleepPeriodService from './services/sleepPeriods'
import commentService from './services/comments'
import externalService from './services/externals'
import settingsService from './services/settings'

import SleepPeriods from './components/SleepPeriods'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Comments from './components/Comments'
import Externals from './components/Externals'
import Settings from './components/Settings'

const App = () => {
  const [sleepPeriods, setSleepPeriods] = useState([])
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [filterStartDate, setFilterStartDate] = useState('')
  const [filterEndDate, setFilterEndDate] = useState('')
  const [showFooter, setShowFooter] = useState(true)
  const [view, setView] = useState('sleepperiods')
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [commentDate, setCommentDate] = useState('')
  const [sleepQuality, setSleepQuality] = useState('MEDIUM')
  const [exts, setExts] = useState([])
  const [externalDate, setExternalDate] = useState('')
  const [externalType, setExternalType] = useState('COFFEE')
  const [quantity, setQuantity] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  useEffect(() => {
    document.title = 'Sleep Diary'
    fetchSleepPeriods()
    fetchComments()
    fetchExternals()
  }, [])

  const fetchSleepPeriods = () => {
    sleepPeriodService
      .getAll()
      .then(sleepPeriods => setSleepPeriods(sleepPeriods))
  }

  const fetchComments = () => {
    commentService
      .getAll()
      .then(allComments => setComments(allComments))
  }

  const fetchExternals = () => {
    externalService
      .getAll()
      .then(externals => setExts(externals))
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

  const addComment = (event) => {
    event.preventDefault()
    const newComment = { comment, commentDate, sleepQuality }
    console.log(newComment)
    commentService
      .create(newComment)
      .then(returnedComment => {
        setComments(comments.concat(returnedComment))
        setComment('')
        setCommentDate('')
        setSleepQuality('MEDIUM')
      })
  }

  const handleCommentChange = (event) => setComment(event.target.value)
  const handleCommentDateChange = (event) => setCommentDate(event.target.value)
  const handleQualityChange = (event) => setSleepQuality(event.target.value)

  const addExt = (event) => {
    event.preventDefault()
    const newExt = { externalDate, externalType, quantity }
    console.log(newExt)
    externalService
      .create(newExt)
      .then(returnedExt => {
        setExts(exts.concat(returnedExt))
        setExternalDate('')
        setExternalType('')
        setQuantity('')
      })
  }

  const deleteExternal = id => {
    console.log(`delete id ${id}`)
    externalService
      .deleteExt(id)
      .then(() => {
        setExts(exts.filter(e => e.id !== id))
      })
  }

  const handleExtDateChange = (event) => setExternalDate(event.target.value)
  const handleExtTypeChange = (event) => setExternalType(event.target.value)
  const handleQuantityChange = (event) => setQuantity(event.target.value)

  //add service
  const handleNameChange = (event) => setName(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)
  const handlePasswordAgainChange = (event) => setPasswordAgain(event.target.value)

  return (
    <div id='container'>
      <Header
        changeView={changeView}
      />
      <Nav
        changeView={changeView}
      />
      <div id="main">
        {view === 'settings' &&
          // TODO: add settings view
          <>
          <Settings 
            name={name}
            handleNameChange={handleNameChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
            passwordAgain={passwordAgain}
            handlePasswordAgainChange={handlePasswordAgainChange}
          />
          </>
        }
        {view === 'sleepperiods' &&
          <>
            <SleepPeriods
              sleepPeriods={filteredSleepPeriods}
              addSleepPeriod={addSleepPeriod}
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
              filterStartDate={filterStartDate}
              setFilterStartDate={setFilterStartDate}
              filterEndDate={filterEndDate}
              setFilterEndDate={setFilterEndDate}
              updateSleepPeriod={updateSleepPeriod}
            />
            <Comments
              comments={comments}
              comment={comment}
              handleCommentChange={handleCommentChange}
              commentDate={commentDate}
              handleDateChange={handleCommentDateChange}
              sleepQuality={sleepQuality}
              handleQualityChange={handleQualityChange}
              addComment={addComment}
            />
            <Externals 
              externals={exts}
              addExternal={addExt}
              externalType={externalType}
              handleExternalTypeChange={handleExtTypeChange}
              externalDate={externalDate}
              handleDateChange={handleExtDateChange}
              externalQuantityValue={quantity}
              handleQuantityChange={handleQuantityChange}
              deleteExternal={deleteExternal}
            />
          </>
        }
      </div>
      {showFooter &&
        <Footer
          hideFooter={hideFooter}
        />
      }
    </div>
  )
}

export default App
