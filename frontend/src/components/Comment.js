import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

const Comment = ({ comment, deleteComment, updateComment }) => {
    const [editMode, setEditMode] = useState(false)
    const [editComment, setComment] = useState(comment)

    const qualities = [
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

    return (
        <div>
            {editMode === false &&
                <Table striped bordered hover>
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
                                <Button onClick={() => deleteComment(comment.id)} variant="danger" size="sm">Delete</Button>
                                <Button onClick={() => setEditMode(true)} variant="warning" size="sm">Edit</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            }
            {editMode === true &&
                <Table striped bordered hover>
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
                                    {qualities.map(q => <option key={q.id} value={q.value}>{q.value}</option>)}
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
                                <Button onClick={() => deleteComment(comment.id)} variant="danger" size="sm">Delete</Button>
                                <Button onClick={() => {
                                    updateComment(editComment)
                                    setEditMode(false)
                                }
                                } variant="success" size="sm">Save</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            }
        </div>
    );
}

export default Comment;