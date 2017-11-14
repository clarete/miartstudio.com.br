import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import DivWithBG from './divwithbg';

export default () => (
  <DivWithBG>
    <Grid>
      <Row>
        <h2 style={{ color: '#fff' }}>Artista</h2>
        <a id="artist"></a>
        <img
          src={require(`../imgs/photos/0056.jpg`)}
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
            foi seu forte: além de tatuador, é designer de jóias e ourives de
            profissão, e se diverte como escultor e pintor.
          </p>
          <p>
            O cuidado com o cliente e busca por novos conhecimentos e técnicas são
            outra marca de Pablo. Ele não descansa até encontrar o design perfeito
            para o projeto de tatuagem de seus clientes.
          </p>
        </div>
      </Row>
    </Grid>
  </DivWithBG>
);
