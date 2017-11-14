import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

export default () => (
  <Navbar inverse collapseOnSelect style={{
    background: '#000',
    paddingTop: 20,
    borderRadius: 0,
    border: 0,
    margin: 0,
  }}>
    <Navbar.Header style={{
      width: 165,
      height: 80,
      border: 0,
      overflow: 'hidden',
    }}>
      <Navbar.Brand>
        <a href="/" style={{
          backgroundImage: `url(${require('../imgs/logo/logo.png')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto',
          width: '80%',
          margin: 0,
          paddingTop: 200,
          display: 'block',
        }}>Miart Tattoo Studio</a>
      </Navbar.Brand>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <NavItem href="/#contato">Contato</NavItem>
        <NavItem href="/#trabalhos">Trabalhos</NavItem>
        <NavItem href="/#artista">Artista</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
