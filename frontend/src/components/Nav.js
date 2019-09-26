import React from 'react';

const Nav = ({ changeView }) => {
  return (
    <nav id='nav'>
      <ul>
        <li onClick={ changeView('sleepperiods') }>
          Home
        </li>
        <li onClick={ changeView('settings') }>
          Settings
        </li>
      </ul>
    </nav>
  )
}

export default Nav