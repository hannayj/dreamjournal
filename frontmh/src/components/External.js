import React from 'react';

const External = ({ ext }) => {
    return (
        <table border="1">
            <tbody>
                <tr>
                    <th>External ID {ext.id}</th>
                    <th>External date {ext.dateTime}</th>
                    <th>External type {ext.externalType}</th>
                    <th>Quantity {ext.quantity}</th>
                </tr>
            </tbody>
        </table>
    );
}

export default External;