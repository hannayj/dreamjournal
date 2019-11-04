import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilteredView = ({ date }) => {
    return(
        <>
            <h1>FilteredView</h1>
            <div>{new Date(date).toDateString()}</div>
        </>
    )
}

export default FilteredView;