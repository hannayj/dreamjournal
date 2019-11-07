import React, { useState, useEffect } from 'react'
import sleepPeriodService from './services/sleepPeriods'
import commentService from './services/comments'
import externalService from './services/externals'

import SleepPeriods from './components/SleepPeriods'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Comments from './components/Comments'
import Externals from './components/Externals'
import FilteredView from './components/FilteredView'
import DateSelect from './components/DateSelect'

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
  const [extDate, setExtDate] = useState('')
  const [extType, setExtType] = useState('COFFEE')
  const [quantity, setQuantity] = useState('')
  const [dateFilter, setDateFilter] = useState(Date.now())

  useEffect(() => {
    document.title = 'Sleep Diary'
    fetchSleepPeriods()
    fetchComments()
    fetchExternals()
    setCurrentPeriodStart()
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
      if(comment && commentDate && sleepQuality){
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
        .catch(error => {
          console.log(error)
        })
      } else {
        if (!comment) console.log('comment null')
        if (!commentDate) console.log('comment date null')
        if (!sleepQuality) console.log('sleep quality null')
      }
  }

  const updateComment = comment => {
    commentService
      .update(comment)
      .then(returnedComment => {
        setComments(comments.filter(c => c.id !== comment.id).concat(returnedComment))
      })
      .catch(error => {
        console.log(error)
        setComments(comments.filter(c => c.id !== comment.id))
      })
  }

  //no confirmation required
  const deleteComment = id => {
    console.log(`delete id ${id}`)
    commentService
      .deletePerson(id)
      .then(() => {
        setComments(comments.filter(c => c.id !== id))
      })
      .catch(error => {
        console.log(error)
        setComments(comments.filter(c => c.id !== id))
      })
  }

  const handleCommentChange = (event) => setComment(event.target.value)
  const handleCommentDateChange = (event) => setCommentDate(event.target.value)
  const handleQualityChange = (event) => setSleepQuality(event.target.value)

  const addExt = (event) => {
    event.preventDefault()
    const newExt = { extDate, extType, quantity }
    console.log(newExt)
    externalService
      .create(newExt)
      .then(returnedExt => {
        setExts(exts.concat(returnedExt))
        setExtDate('')
        setExtType('')
        setQuantity('')
      })
  }

  const handleExtDateChange = (event) => setExtDate(event.target.value)
  const handleExtTypeChange = (event) => setExtType(event.target.value)
  const handleQuantityChange = (event) => setQuantity(event.target.value)

  const handleDatePickerChange = (date) => {
    setDateFilter(date.getTime())
  }

  const setCurrentPeriodStart = () => {
    const now = new Date()
    if(now.getHours() < 12) {
      setDateFilter(new Date(now.getTime() - 86400000))
    }
  }

  return (
    <div className='container'>
      <Header
        changeView={changeView}
      />
      <Nav
        changeView={changeView}
      />
      <div id="main">
        {view === 'settings' &&
          // TODO: add settings view
          <></>
        }
        {view === 'sleepperiods' &&
          <>
            <DateSelect 
              startDate={dateFilter}
              handleDateChange={handleDatePickerChange}
              sleepPeriods={sleepPeriods}
            />
            <FilteredView 
              date={dateFilter}
              sleeps={sleepPeriods}
              comments={comments}
              exts={exts}
              updateSleepPeriod={updateSleepPeriod}
              removeSleepPeriod={removeSleepPeriod}
              deleteComment={deleteComment}
              updateComment={updateComment}
            />
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
              deleteComment={deleteComment}
              updateComment={updateComment}
            />
            <Externals 
              externals={exts}
              addExternal={addExt}
              externalTypeValue={extType}
              handleExternalTypeChange={handleExtTypeChange}
              externalDateValue={extDate}
              handleDateChange={handleExtDateChange}
              externalQuantityValue={quantity}
              handleQuantityChange={handleQuantityChange}
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
