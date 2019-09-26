import React from 'react';

const Footer = ({ hideFooter }) => {
  const buttonStyle = {
    "cursor": "pointer"
  }
  return (
    <footer id='footer'>
      <ul>
        <li>
          <button style={ buttonStyle } onClick={ hideFooter }>
            Close
          </button>
        </li>
      </ul>
    </footer>
  )
}

export default Footer