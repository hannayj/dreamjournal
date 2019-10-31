import React from 'react';
import Table from 'react-bootstrap/Table'

const Comment = ({ comment, deleteComment }) => {
    return (
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
                    <td colSpan="3"><button onClick={() => deleteComment(comment.id)}>Delete</button></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Comment;