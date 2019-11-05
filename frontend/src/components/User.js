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
    updateUser
  }) => {
    const [editMode, setEditMode] = useState(false)
    const [editableUser, setUser] = useState(user)
    const [error, setError] = useState("")

    function useInput(initialValue){
      const [value, setValue] = useState(initialValue);
      function handleChange(e){        
        setValue(e.target.value);    
      }
      return [value,handleChange];
   }

   function handleSubmit(e) {
     e.preventDefault();
     console.log("hello from handleSubmit")
     //password checking logic
     let password1 = document.getElementById('newPassword').value;
     console.log(password1)
     let password2 = document.getElementById('passwordAgain').value;
     console.log(password1)
     if (password1 === "" || password2 === "") {
      setError("Please enter new password values to both fields")
     } else if (password1 === password2) {
      setUser({...editableUser,
        password: password1})
        updateUser(editableUser)
        console.log("Password updated")
     } else {
      setError("Passwords do not match")
     }
   }

    const [newPassword, setNewPassword] = useInput("")
    const [passwordAgain, setPasswordAgain] = useInput("")

    //console.log(user)
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
            <form onSubmit={handleSubmit}>
              <p> New password:</p>
              <input id="newPassword"type="password"
              value={newPassword} onChange={setNewPassword}/>  
              <br></br>
              <p> Password again:</p>      
              <input id="passwordAgain" type="password"
              value={passwordAgain} onChange={setPasswordAgain}/> 
              <br></br>   
              <p>{error}</p>      
              <button>Submit</button>
           </form>
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