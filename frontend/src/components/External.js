import React, { useState } from 'react';

const External = ({ 
    ext, 
    deleteExternal, 
    updateExternal 
}) => {
    const [editMode, setEditMode] = useState(false)
  const [editableExternal, setExternal] = useState(ext)
  const typeChange = event => setExternal({...editableExternal,
    externalType: event.target.value
    })

  const selectionInputs = {
    value: ext.externalType,
    onChange: typeChange,
    values: [
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
}

  
    return (
        <div className='product clearfix'>
            { editMode === false &&
                <table border="1">
                    <tbody>
                        <tr>
                            <th>External ID {ext.id}</th>
                            <th>External date {ext.externalDate}</th>
                            <th>External type {ext.externalType}</th>
                            <th>Quantity {ext.quantity}</th>
                            <td><button onClick={() => deleteExternal(ext.id)}>Delete</button></td>
                            <td><button onClick={() => setEditMode(true)}>Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            } 
            { editMode === true &&
                <table border="1">
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
                                <select value={selectionInputs.value} onChange={selectionInputs.onChange}>
                                    {selectionInputs.values.map(v => <option key={v.id} value={v.value}>{v.value}</option>)}
                                </select></th>
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
                            <td><button onClick={() => deleteExternal(ext.id)}>Delete</button></td>
                            <td><button onClick={() => {
                                updateExternal(editableExternal.id);
                                setEditMode(false)
                                }}>Update</button></td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
}

export default External;