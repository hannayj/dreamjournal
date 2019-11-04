import React, { useState } from 'react';

const Comment = ({ comment, deleteComment, updateComment, qualitySelect }) => {
    const [editMode, setEditMode] = useState(false)
    const [editComment, setComment] = useState(comment)
    return (
        <div>
            {editMode === false &&
                <table border="1">
                    <tbody>
                        <tr>
                            <th>Comment ID {comment.id}</th>
                            <th>Comment date {comment.commentDate}</th>
                            <th>Sleep quality {comment.sleepQuality}</th>
                        </tr>
                        <tr>
                            <td colSpan="3">"{comment.comment}"</td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <button onClick={() => deleteComment(comment.id)}>Delete</button>
                                <button onClick={() => setEditMode(true)}>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
            {editMode === true &&
                <table border="1">
                    <tbody>
                        <tr>
                            <th>Comment ID {comment.id}</th>
                            <th>
                                Comment date
                                <input onChange={
                                    event => setComment({
                                        ...editComment,
                                        commentDate: event.target.value
                                    })
                                }
                                    type='datetime-local'
                                    value={editComment.commentDate}>
                                </input>
                            </th>
                            <th>
                                Sleep quality
                                <select
                                    value={editComment.sleepQuality}
                                    onChange={
                                        event => setComment({
                                            ...editComment,
                                            sleepQuality: event.target.value
                                        })
                                    }>
                                    {qualitySelect.map(q => <option key={q.id} value={q.value}>{q.value}</option>)}
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <input onChange={
                                    event => setComment({ ...editComment, comment: event.target.value })
                                }
                                    type='text'
                                    value={editComment.comment}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <button onClick={() => deleteComment(comment.id)}>Delete</button>
                                <button onClick={() => {
                                    updateComment(editComment)
                                    setEditMode(false)
                                }
                                }>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Comment;