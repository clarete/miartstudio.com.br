import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

const clickHandler = (id) => {
  const rect = document.getElementById(id).getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop
                  ? document.documentElement.scrollTop
                  : document.body.scrollTop;
  const bodyMargin = parseInt(window
    .getComputedStyle(document.body)
    .marginTop.replace('px', ''));
  const top = rect.top + scrollTop - bodyMargin;
  document.scrollingElement.scroll({ top })
};

export default () => (
  <Navbar inverse collapseOnSelect className="navbar-fixed-top" style={{
    background: '#000',
    padding: '10px 0 15px 0',
    borderRadius: 0,
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
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <NavItem href="/#contato" onClick={(e) => clickHandler('contato') }>
          Contato
        </NavItem>
        <NavItem href="/#trabalhos" onClick={(e) => clickHandler('trabalhos') }>
          Trabalhos
        </NavItem>
        <NavItem href="/#artista" onClick={(e) => clickHandler('artista') }>
          Artista
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
