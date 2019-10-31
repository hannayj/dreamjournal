import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm'

const Comments = ({
    comments,
    comment,
    handleCommentChange,
    commentDate,
    handleDateChange,
    sleepQuality,
    handleQualityChange,
    addComment,
    deleteComment
}) => {
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
            <h2>Comments</h2>
            <h3>Add a new Comment</h3>
            <CommentForm inputs={formInputs} select={selectionInputs} submit={addComment} />
            {comments.map(c => <Comment key={c.id} comment={c} deleteComment={deleteComment} />)}
        </div>
    )
}

export default Comments;