import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const External = ({
    ext,
    deleteExternal,
    updateExternal,
    externalDate
}) => {
    const [editMode, setEditMode] = useState(false)
    const [editableExternal, setExternal] = useState(ext)

    const handleDateChange = (date) => {
        setExternal({
            ...editableExternal,
            externalDate: new Date(date).toISOString()
        })
    }

    const convertToTimeZone = (date) => {
        const timeDiff = new Date(date).getTimezoneOffset()
        const oldMinutes = new Date(date).getMinutes()
        const newDate = new Date(date).setMinutes(oldMinutes + (-1 * timeDiff))
        return new Date(newDate).toLocaleString()
    }

    const factors = [

        {
            id: 1,
            value: 'COFFEE'
        },
        {
            id: 2,
            value: 'ALCOHOL'
        },
        {
            id: 3,
            value: 'MEDICINE'
        },
        {
            id: 4,
            value: 'OTHER'
        }
    ]
    return (
        <div className='product clearfix'>
            {editMode === false &&
                <Table bordered hover responsive>
                    <tbody>
                        <tr>
                            <th>External ID {ext.id}</th>
                            <th>External date {convertToTimeZone(ext.externalDate)}</th>
                            <th>External type {ext.externalType}</th>
                            <th>Quantity {ext.quantity}</th>
                            <td><Button onClick={() => deleteExternal(ext.id)} variant="danger" size="sm">Delete</Button></td>
                            <td><Button onClick={() => setEditMode(true)} variant="warning" size="sm">Edit</Button></td>
                        </tr>
                    </tbody>
                </Table>
            }
            {editMode === true &&
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th>External ID {ext.id}</th>
                            <th>
                                <DatePicker
                                    onChange={handleDateChange}
                                    showTimeSelect
                                    timeIntervals={15}
                                    selected={externalDate}
                                    dateFormat="dd/MM/yyyy h:mm aa"
                                    type='datetime-local'
                                    id='externalDate'
                                    name='externalDate'
                                    value={editableExternal.externalDate}
                                />
                            </th>

                            <th>External type:
                                <select
                                    value={editableExternal.externalType}
                                    onChange={
                                        event => setExternal({
                                            ...editableExternal,
                                            externalType: event.target.value
                                        })
                                    }>
                                    {factors.map(f => <option key={f.id} value={f.value}>{f.value}</option>)}
                                </select>
                            </th>
                            <th> Quantity: <input
                                onChange={
                                    event => setExternal({
                                        ...editableExternal,
                                        quantity: event.target.value
                                    })
                                }
                                type='text'
                                id='quantity'
                                name='quantity'
                                value={editableExternal.quantity}
                            /></th>
                            <td><Button onClick={() => deleteExternal(ext.id)} variant="danger" size="sm">Delete</Button></td>
                            <td><Button onClick={() => {
                                updateExternal(editableExternal);
                                setEditMode(false)
                            }} variant="success" size="sm">Save</Button></td>
                        </tr>
                    </tbody>
                </Table>
            }
        </div>
    );
}

export default External;