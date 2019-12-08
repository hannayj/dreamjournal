import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ExternalForm = ({ inputs, select, submit, externalDate, handleDateChange }) => {
    return (
        <Form onSubmit={submit}>
            <Form.Label column sm={2}>Date: </Form.Label>
                <DatePicker
                    onChange={handleDateChange}
                    showTimeSelect
                    timeIntervals={15}
                    selected={externalDate}
                    dateFormat="dd/MM/yyyy h:mm aa"
                    type='datetime-local'
                    id='extTime'
                    name='ExtDate'
                    value={ externalDate }
                />
            {inputs.map(i => <div key={i.name}>
                <Form.Label column sm={2}>{i.name}: </Form.Label>
                <input type={i.type} value={i.value} onChange={i.onChange} ></input></div>)}
            <Form.Group controlId="formExternalType">
                <Form.Label column sm={2}>Type: </Form.Label>
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