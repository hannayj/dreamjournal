import React from 'react';

const CommentForm = ({ inputs, select, submit }) => {
    return (
        <form onSubmit={submit}>
            {inputs.map(i => <div key={i.name}>{i.name}: <input type={i.type} value={i.value} onChange={i.onChange} ></input></div>)}
            Quality: 
            <select value={select.value} onChange={select.onChange}>
                {select.values.map(v => <option key={v.id} value={v.value}>{v.value}</option>)}
            </select>
            <div><button type="submit">Add a new comment</button></div>
        </form>
    )
}

export default CommentForm