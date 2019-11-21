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
    deleteExternal, 
    updateExternal
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
            <h2>Externals</h2>
            <h3>Add a new external</h3>
            <ExternalForm inputs={formInputs} select={selectionInputs} submit={addExternal} />
            <h1>
                External factors 
            </h1>
            {externals.map(e => 
            <External 
                key={e.id} 
                ext={e} 
                deleteExternal={deleteExternal}
                updateExternal={updateExternal}
                select={selectionInputs}
            />)}
        </div>
    )
}

export default Externals;