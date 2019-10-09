import React, { useState, useEffect } from 'react';
import commentService from './services/comment'
import Comment from './components/Comment'
import CommentForm from './components/CommentForm'

const App = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [commentDate, setCommentDate] = useState('')
  const [sleepQuality, setSleepQuality] = useState('MEDIUM')

  useEffect(() => {
    commentService
      .getAll()
      .then(allComments => {
        console.log(allComments)
        setComments(allComments)
      })
  }, [])

  const handleCommentChange = (event) => setComment(event.target.value)
  const handleDateChange = (event) => setCommentDate(event.target.value)
  const handleQualityChange = (event) => setSleepQuality(event.target.value)

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

  const formInputs = [
    {
      name: 'Comment',
      type: 'text',
      value: comment,
      onChange: handleCommentChange,
    },
    {
      name: 'Date',
      type: 'datetime-local',
      value: commentDate,
      onChange: handleDateChange
    }
  ]

  const selectionInputs = {
    value: sleepQuality,
    onChange: handleQualityChange,
    values: [
      {
        id: 1,
        value: 'HIGHEST'
      },
      {
        id: 2,
        value: 'HIGH'
      },
      {
        id: 3,
        value: 'MEDIUM'
      },
      {
        id: 4,
        value: 'LOW'
      },
      {
        id: 5,
        value: 'LOWEST'
      }
    ]
  }

  return (
    <div>
      <h1>Add</h1>
      <CommentForm inputs={formInputs} select={selectionInputs} submit={addComment} />
      <h1>Comments</h1>
      {comments.map(c => <Comment key={c.id} comment={c} />)}
    </div>
  );
}

export default App;
