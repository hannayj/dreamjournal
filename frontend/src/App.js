import React, { useState, useEffect } from 'react'
import sleepPeriodService from './services/sleepPeriods'
import commentService from './services/comments'
import externalService from './services/externals'
import userService from './services/users'

import SleepPeriods from './components/SleepPeriods'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Comments from './components/Comments'
import Externals from './components/Externals'
import User from './components/User'

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
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    document.title = 'Sleep Diary'
    fetchSleepPeriods()
    fetchComments()
    fetchExternals()
    fetchUsers()
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

  const fetchUsers = () => {
    userService
    .getAll()
    .then(users => setUser(users[0]))
  }

  const hideFooter = () => {
    setShowFooter(false)
  }

  const changeView = (view) => () => {
    setView(view)
  }

  const addSleepPeriod = () => (event) => {
    event.preventDefault()
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

  const updateSleepPeriod = (sleepPeriod) => {
    sleepPeriodService
      .update(sleepPeriod)
      .then(updatedSleepPeriod => {
        const filteredSleepPeriods = sleepPeriods.filter(sp => sp.id !== sleepPeriod.id)
        setSleepPeriods(filteredSleepPeriods.concat(updatedSleepPeriod))
      })
      .catch(error => console.log(error))
  }

  const removeSleepPeriod = (sleepPeriod) => {
    sleepPeriodService
      .remove(sleepPeriod)
      .then(setSleepPeriods(sleepPeriods.filter(sp => sp.id !== sleepPeriod.id)))
      .catch(error => console.log(error))
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
    if (externalDate && externalType && quantity) {
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
      .catch(error => {
        console.log(error)
      })
    } else {
      console.log("empty values")
    }
  }

  const deleteExternal = id => {
    console.log(`delete id ${id}`)
    externalService
      .deleteExt(id)
      .then(() => {
        setExts(exts.filter(e => e.id !== id))
      })
  }

  const updateExternal = ext => {
    externalService
      .update(ext)
      .then(returnedExternal => {
        setExts(exts.filter(e => e.id !== ext.id).concat(returnedExternal))
      })
      .catch(error => {
        console.log(error)
        setExts(exts.filter(e => e.id !== ext.id))
      })
  }

  const handleExtDateChange = (event) => setExternalDate(event.target.value)
  const handleExtTypeChange = (event) => setExternalType(event.target.value)
  const handleQuantityChange = (event) => setQuantity(event.target.value)

  const updateUser = (user) => {
    userService
      .update(user)
      .then(updatedUser => {
        setUser(updatedUser)
      })
      .catch(error => console.log(error))
  }

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
          <User 
            user={user}
            name={name}
            setName={setName}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            updateUser={updateUser}
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
              removeSleepPeriod={ removeSleepPeriod }
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
              updateExternal={updateExternal}
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
