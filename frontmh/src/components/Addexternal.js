import React from 'react';
import Button from './components/Button';

const Addexternal = (event) => {
    event.preventDefault()
    console.log('Addexternal')
    return (
        <div>
            <h1>Add others</h1>
            <Button text='Now' />
        </div>
    )
}