import React from 'react';

const Nav = ({ changeView }) => {
  return (
    <nav id='nav'>
      <ul>
        <li onClick={ changeView('browse') }>
          Browse
        </li>
        <li onClick={ changeView('about') }>
          About
        </li>
      </ul>
    </nav>
  )
}

export default Nav