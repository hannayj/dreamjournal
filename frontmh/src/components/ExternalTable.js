import React from 'react';

const ExternalTable = ({externals}) => (
    <table>
      <thead>
        <tr>
          <th>Date and time</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {externals.length > 0 ? (
          externals.map(external => (
            <tr key={external.id}>
              <td>{external.dateTime}</td>
              <td>{external.externalType}</td>
              <td>{external.quantity}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No externals</td>
          </tr>
        )}
      </tbody>
    </table>
  )
  
  export default ExternalTable