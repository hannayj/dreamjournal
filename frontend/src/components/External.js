import React from 'react';

const External = ({ ext, deleteExternal }) => {
    return (
        <table border="1">
            <tbody>
                <tr>
                    <th>External ID {ext.id}</th>
                    <th>External date {ext.externalDate}</th>
                    <th>External type {ext.externalType}</th>
                    <th>Quantity {ext.quantity}</th>
                    <td><button onClick={() => deleteExternal(ext.id)}>Delete</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default External;