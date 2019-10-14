import React from 'react';
import External from './External';
import ExternalForm from './ExternalForm';

const Externals = ({
    externals,
    addExternal,
    externalTypeValue,
    handleExternalTypeChange,
    externalDateValue,
    handleDateChange,
    externalQuantityValue,
    handleQuantityChange
}) => {
    const formInputs = [
        {
            name: 'ExtDate',
            type: 'datetime-local',
            value: externalDateValue,
            onChange: handleDateChange,
        },
        {
            name: 'Quantity',
            type: 'text',
            value: externalQuantityValue,
            onChange: handleQuantityChange
        }
    ]
    const selectionInputs = {
        value: externalTypeValue,
        onChange: handleExternalTypeChange,
        values: [
            {
                id: 1,
                value: 'COFFEE'
            },
            {
                id: 2,
                value: 'ALCOHOL'
            },
            {
                id: 3,
                value: 'MEDICINE'
            },
            {
                id: 4,
                value: 'OTHER'
            }
        ]
    }
    return (
        <div>
            <h1>Externals</h1>
            <h2>Add a new external</h2>
            <ExternalForm inputs={formInputs} select={selectionInputs} submit={addExternal} />
            {externals.map(e => <External key={e.id} ext={e} />)}
        </div>
    )
}

export default Externals;