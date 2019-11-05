import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({ startDate, handleDateChange }) => {
    //includeDates={[array of Date objects]}
    return(
        <>
            <h1>Select the date to view</h1>
            <DatePicker selected={startDate} onChange={handleDateChange} />
        </>
    )
}

export default DateSelect;