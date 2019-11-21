import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ExternalForm = ({ inputs, select, submit, externalDate, handleDateChange,}) => {
    return (
        <Form onSubmit={submit}>
            <Form.Label>Date: </Form.Label>
            <DatePicker
            onChange={handleDateChange}
            selected={externalDate}
            dateFormat="dd/MM/yyyy"
            type='datetime-local'
            id='extTime'
            name='ExtDate'
            value={ externalDate }
            />
            {inputs.map(i => <div key={i.name}>{i.name}: <input type={i.type} value={i.value} onChange={i.onChange} ></input></div>)}
            <Form.Group controlId="formExternalType">
                <Form.Label>Type: </Form.Label>
                <Form.Control as="select" value={select.value} onChange={select.onChange}>
                    {select.values.map(v => <option key={v.id} value={v.value}>{v.value}</option>)}
                </Form.Control>
            </Form.Group>
            <p></p>
            <div><Button variant="info" type="submit">Add</Button></div>
        </Form>
    )
}

export default ExternalForm