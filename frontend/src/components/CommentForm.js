import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CommentForm = ({ inputs, select, submit }) => {
    return (
        <Form onSubmit={submit}>
            <Form.Group controlId="formComment">
            {inputs.map(i => <div key={i.name}>
                <Form.Label column sm={2}>{i.name}: </Form.Label>
                <input type={i.type} value={i.value} onChange={i.onChange} ></input></div>)}
            </Form.Group>
            <Form.Group controlId="formQuality"> 
                <Form.Label>Quality: </Form.Label>
                    <Form.Control as="select" value={select.value} onChange={select.onChange}>
                        {select.values.map(v => <option key={v.id} value={v.value}>{v.value}</option>)}
                    </Form.Control>
            </Form.Group>
            <p></p>
            <div><Button variant="info" type="submit">Add a new comment</Button></div>
        </Form>
    )
}

export default CommentForm