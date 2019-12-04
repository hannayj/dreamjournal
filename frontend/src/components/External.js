import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const External = ({ 
    ext, 
    deleteExternal, 
    updateExternal 
}) => {
    const [editMode, setEditMode] = useState(false)
    const [editableExternal, setExternal] = useState(ext)

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
            { editMode === false &&
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th>External ID {ext.id}</th>
                            <th>External date {ext.externalDate}</th>
                            <th>External type {ext.externalType}</th>
                            <th>Quantity {ext.quantity}</th>
                            <td><Button onClick={() => deleteExternal(ext.id)} variant="danger" size="sm">Delete</Button></td>
                            <td><Button onClick={() => setEditMode(true)} variant="warning" size="sm">Edit</Button></td>
                        </tr>
                    </tbody>
                </Table>
            } 
            { editMode === true &&
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th>External ID {ext.id}</th>
                            <th> Date: <input
                                    onChange = {
                                        event => setExternal({...editableExternal,
                                        externalDate: event.target.value
                                        })
                                    }
                                    type='datetime-local'
                                    id='externalDate'
                                    name='externalDate'
                                    value={ editableExternal.externalDate }
                                    /></th>
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
                                    onChange = {
                                        event => setExternal({...editableExternal,
                                        quantity: event.target.value
                                        })
                                    }
                                    type='text'
                                    id='quantity'
                                    name='quantity'
                                    value={ editableExternal.quantity }
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