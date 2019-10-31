import React, { useState } from 'react';

const User = ({
    user,
    name, 
    setName, 
    firstName, 
    setFirstName, 
    lastName, 
    setLastName, 
    email, 
    setEmail,
    password, 
    setPassword, 
    passwordAgain, 
    setPasswordAgain,
    updateUser
  }) => {
    const [editMode, setEditMode] = useState(false)
    const [editableUser, setUser] = useState(user)
    console.log(user)
    return (
      <div className='product clearfix'>
        { editMode === false && 
          <div>
           <a href={ '/users/' + user.id }>
              User information for user { user.id }
            </a> 
           <h2>Information</h2> 
            <p>Username: { user.name }</p>
            <p>First name: { user.firstName }</p>
            <p>Last name: { user.lastName }</p>
            <p>Email: { user.email }</p>
            <br />
            <button onClick={ () => setEditMode(true) }>Edit</button>
            <h2>Change password:</h2>
            <p>Password: 
              <input
                onChange = {
                  event => setUser({...editableUser,
                    password: event.target.value
                  })
                }
                type='text'
                id='password'
                name='password'
                value=""
              />
            </p>
            <button onClick={ () => {
              updateUser(editableUser);
            }}>Save</button>
          </div>
        }
        { editMode === true && 
          <div>
            <a href={ '/users/' + user.id }>
              User information for user { user.id }
            </a>
            <p>Username: 
              <input
                onChange = {
                  event => setUser({...editableUser,
                    name: event.target.value
                  })
                }
                type='text'
                id='name'
                name='name'
                value={ editableUser.name }
              />
            </p>
            <p>First name: 
              <input
                onChange = {
                  event => setUser({...editableUser,
                    firstName: event.target.value
                  })
                }
                type='text'
                id='firstName'
                name='firstName'
                value={ editableUser.firstName }
              />
            </p>
            <p>Last name: 
              <input
                onChange = {
                  event => setUser({...editableUser,
                    lastName: event.target.value
                  })
                }
                type='text'
                id='lastName'
                name='lastName'
                value={ editableUser.lastName }
              />
            </p>
            <p>Email: 
              <input
                onChange = {
                  event => setUser({...editableUser,
                    email: event.target.value
                  })
                }
                type='text'
                id='email'
                name='email'
                value={ editableUser.email }
              />
            </p>
            <br />

            <button onClick={ () => {
              updateUser(editableUser);
              setEditMode(false);
            }}>Save</button>
          </div>
        }
      </div>
    )
  }
  
  export default User