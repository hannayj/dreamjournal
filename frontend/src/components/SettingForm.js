import React from 'react';

const SettingForm = ({ inputs, submit }) => {
    return (
        <form onSubmit={submit}>
            {inputs.map(i => <div key={i.name}>{i.name}: <br></br> <input type={i.type} value={i.value} onChange={i.onChange} ></input></div>)}
            <div><button type="submit">Save settings</button></div>
        </form>
    )
}

export default SettingForm