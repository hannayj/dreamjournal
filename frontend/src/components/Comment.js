import React from 'react';

const Comment = ({ comment, deleteComment }) => {
    return (
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
                    <td colSpan="3"><button onClick={() => deleteComment(comment.id)}>Delete</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Comment;