import React from 'react';
import External from './External';
import ExternalForm from './ExternalForm';

const Externals = ({
    externals,
    addExternal,
    externalType,
    handleExternalTypeChange,
    externalDate,
    handleDateChange,
    externalQuantityValue,
    handleQuantityChange,
    deleteExternal
}) => {
    const formInputs = [
        {
            name: 'ExtDate',
            type: 'datetime-local',
            value: externalDate,
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
        value: externalType,
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
            {externals.map(e => <External key={e.id} ext={e} deleteExternal={deleteExternal}/>)}
        </div>
    )
}

export default Externals;