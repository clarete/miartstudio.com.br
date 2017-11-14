import React from 'react';

import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Button,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

const MainNavBar = () => (
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
          backgroundImage: `url(${require('./imgs/logo/logo.png')})`,
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
        <NavItem href="/#trabalhos">Trabalhos</NavItem>
        <NavItem href="/#profissional">Profissional</NavItem>
        <NavItem href="#">Contato</NavItem>
        <NavItem href="#">Endereço</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const pics = () => [
  'thumb.0034.jpg',
  'thumb.0035.jpg',
  'thumb.0036.jpg',
  'thumb.0037.jpg',
  'thumb.0038.jpg',
  'thumb.0039.jpg',
  'thumb.0040.jpg',
  'thumb.0042.jpg',
  'thumb.0043.jpg',
  'thumb.0044.jpg',
  'thumb.0045.jpg',
  'thumb.0047.jpg',
  'thumb.0049.jpg',
  'thumb.0050.jpg',
  'thumb.0051.jpg',
  'thumb.0052.jpg',
  /* 'thumb.0053.jpg',*/
].map((p) => ({
  src: require(`./imgs/photos/thumbs/${p}`),
}));

class Content extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <h1>Trabalhos</h1>
            <a id="trabalhos"></a>
          </Row>
          <Row>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {pics().map((o, i) =>
                <li style={{ float: 'left', paddingRight: 20, paddingBottom: 20, }}
                    key={i}><img src={o.src} /></li>)}
            </ul>
          </Row>
        </Grid>
        <div style={{
          background: '#000',
          backgroundImage: `url(${require('./imgs/bgs/black_texture___ray_by_ethenyl.jpg')})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-300px -100px',
          marginTop: 60,
          paddingTop: 40,
          paddingBottom: 60,
        }}>
          <Grid>
            <Row>
              <h2 style={{ color: '#fff' }}>Profissional</h2>
              <a id="profissional"></a>
              <img
                src={require(`./imgs/photos/0056.jpg`)}
                alt="Pablo Fernandes"
                style={{ float: 'left', width: 200 }}/>
              <div style={{
                marginLeft: 220,
                padding: '1px 20px 20px 20px',
                height: 200,
                background: '#222',
                color: '#ffffff',
                fontSize: 16,
              }}>
                <h3>Pablo Fernandes</h3>
                <p>
                  Pablo é o proprietário e tatuador chefe do Miart Studio. Arte sempre
                  foi seu forte. Além de tatuador, é ourives de profissão, e se diverte
                  como escultor e pintor.
                </p>
                <p>
                  O cuidado com o cliente e busca por novos conhecimentos e técnicas são
                  outra marca de Pablo. Ele não descansa até encontrar o design perfeito
                  para o projeto de tatuagem de seus clientes.
                </p>
              </div>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default (
  <div>
    <MainNavBar />
    <Content />    
  </div>
);
