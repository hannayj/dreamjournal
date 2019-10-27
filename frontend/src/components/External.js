import React from 'react';
import Table from 'react-bootstrap/Table'

const External = ({ ext }) => {
    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <th>External ID {ext.id}</th>
                    <th>External date {ext.dateTime}</th>
                    <th>External type {ext.externalType}</th>
                    <th>Quantity {ext.quantity}</th>
                </tr>
            </tbody>
        </Table>
    );
}

export default External;