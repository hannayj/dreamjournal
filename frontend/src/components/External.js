import React, { useState } from 'react';

const External = ({ 
    ext, 
    select,
    deleteExternal, 
    updateExternal 
}) => {
    const [editMode, setEditMode] = useState(false)
  const [editableExternal, setExternal] = useState(ext)
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
                            <th><input
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
                            <th>External type {ext.externalType}</th>
                            <th>
                                <select value={select.value} onChange={select.onChange}>
                                {select.values.map(v => <option key={v.id} value={v.value}>{v.value}</option>)}
                                 </select>
                            </th>
                            <th>Quantity {ext.quantity}</th>
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