import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({ startDate, handleDateChange, sleepPeriods }) => {

    /**
     * should return all the availabe sleepDates for the time periods so that
     * props.sleepPeriods.startTime >= sleepDate 12:00:00.00 (PM)
     */
    const availableDates = () => {
        if(sleepPeriods.length > 0) {
            const sleepDates = sleepPeriods.map(s => {
                const date = new Date(s.startTime)
                if(date.getHours() < 12) {
                    return new Date(date.getTime() - 86400000)
                }
                return date
            })
            return sleepDates
        }
    }
    
    return(
        <>
            <h1>Select the start date of the time period</h1>
            <DatePicker selected={startDate} onChange={handleDateChange} includeDates={availableDates()} />
        </>
    )
}

export default DateSelect;