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
    padding: '10px 0 15px 0',
    borderRadius: 0,
    margin: 0,
  }}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/" style={{
          backgroundImage: `url(${require('../imgs/logo/logo.png')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: '30% 0',
          overflow: 'hidden',
        }}>
          <div style={{ paddingTop: 200 }}>
            Miart Tattoo Studio
          </div>
        </a>
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
