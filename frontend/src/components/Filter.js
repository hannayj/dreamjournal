import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({
  filterStartDate,
  setFilterStartDate,
  filterEndDate,
  setFilterEndDate,
  handleInputChange
}) => {
  return (
    <div>
      <h2>
        Filter sleep periods by date
      </h2>
      <label htmlFor='filterStartDate'>Start date</label>
      <br />
      <DatePicker
        selected={filterStartDate}
        onChange={value => setFilterStartDate(value)}
        id='filterStartDate'
        name='filterStartDate'
      />
      <br />
      <label htmlFor='filterEndDate'>End date</label>
      <br />
      <DatePicker
        selected={filterEndDate}
        onChange={value => setFilterEndDate(value)}
        id='filterEndDate'
        name='filterEndDate'
      />
    </div>
  )
}

export default Filter