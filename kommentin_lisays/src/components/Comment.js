import React from 'react';

const Comment = ({ comment }) => {
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
            </tbody>
        </table>
    );
}

export default Comment;