import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import DivWithBG from './divwithbg';

export default () => (
  <DivWithBG>
    <Grid>
      <Row>
        <Col md={12}>
          <h2 style={{ color: '#fff' }}>Artista</h2>
          <a id="artist"></a>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <img
            src={require(`../imgs/photos/0056.jpg`)}
            alt="Pablo Fernandes"
            style={{ width: '100%' }}/>
        </Col>
        <Col md={9}>
          <div style={{
            marginBottom: 40,
            padding: '1px 20px 20px 20px',
            background: '#222',
            color: '#ffffff',
            fontSize: 16,
          }}>
            <h3>Pablo Fernandes</h3>
            <p>
              Sou proprietário e tatuador chefe do Miart Studio. Arte sempre foi o meu forte.
              Além de tatuador, sou designer de jóias e ourives de profissão, e também me
              aventuro nos caminhos das esculturas e pinturas.
            </p>
            <p>
              O cuidado com o cliente e busca por novos conhecimentos e técnicas me
              instigam e não descanso até encontrar o design perfeito para o projeto
              de tatuagem dos meus clientes.
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  </DivWithBG>
);
