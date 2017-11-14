import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import DivWithBG from './divwithbg';

const icon = (name) => (
  <img
    src={require(`../imgs/icons/Social Media Icons/SVG/Square Black White/${name}.svg`)}
    alt={name}
    style={{ height: 30, paddingRight: 10, }}/>
);

const link = (href, title, alt) => (
  <a style={{ color: '#fff' }} href={href} alt={alt}>{title}</a>
);

export default () => (
  <DivWithBG>
    <Grid>
      <Row>
        <a id="contato"></a>
        <div style={{ float: 'right', padding: '20px 0', }}>
          <img height="300" src={require('../imgs/map.jpg')} alt="Map" />
        </div>

        <div style={{
          padding: '30px 0 40px 0',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 32,
          marginRight: 30,
        }}>
          <p style={{ marginBottom: -10 }}>
            Rua José Soares, 72b<br />
            Floramar - Belo Horizonte, MG<br />
          </p>

          <em style={{ fontSize: 20, color: '#777' }}>em frente ao Chico do Peixe</em>

          <ul style={{ listStyle: 'none', margin: 0, padding: '35px 0 0 0', fontSize: 16 }}>
            <li style={{ paddingBottom: 10 }}>
              {link("https://instagram.com/pablofernandes85", icon('Instagram'), 'Instagram')}
              {link("https://instagram.com/pablofernandes85", "@pablofernandes85", 'Instagram')}
            </li>
            <li style={{ paddingBottom: 10, }}>
              {link("https://facebook.com/pablofernandes85", icon('Facebook'), 'Facebook')}
              {link("https://facebook.com/pablofernandes85", "facebook.com/pablofernandes85", 'Facebook')}
            </li>
            <li>
              {icon('WhatsApp')}
              (31) 8778-7627 / (31) 8613-4333
            </li>
          </ul>
        </div>
      </Row>
    </Grid>
  </DivWithBG>
);
