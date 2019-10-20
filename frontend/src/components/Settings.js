import React from 'react';
import SettingForm from './SettingForm'

const Settings = ({
    name,
    handleNameChange,
    password,
    handlePasswordChange,
    passwordAgain,
    handlePasswordAgainChange,
    updateUser
}) => {  
    const formInputs = [
        {
            name: 'Name',
            type: 'text',
            value: name,
            onChange: handleNameChange,
        },
        {
            name: 'Password',
            type: 'password',
            value: password,
            onChange: handlePasswordChange
        },
        {
            name: 'Password Again',
            type: 'passwordAgain',
            value: passwordAgain,
            onChange: handlePasswordAgainChange
        }
    ]

    return (
      <div>
        <h2>
          User profile
        </h2>
        <SettingForm inputs={formInputs} submit={updateUser} />
      </div>
    )
  }

  export default Settings;