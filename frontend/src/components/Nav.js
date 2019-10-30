import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Nav = ({ changeView }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={ changeView('sleepperiods') }>
            Home 
          </Nav.Link>
          <Nav.Link onClick={ changeView('settings') }>
              Settings
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


/*const Nav = ({ changeView }) => {
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
}*/

export default Nav