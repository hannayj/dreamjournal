import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({ startDate, handleDateChange, sleepPeriods, length, setLength }) => {

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
            <h2>Select the length of the time period</h2>
            <select onChange={event => setLength(event.target.value)} value={length}>
                <option value={1}>1 day</option>
                <option value={7}>7 days</option>
                <option value={14}>14 days</option>
            </select>
        </>
    )
}

export default DateSelect;