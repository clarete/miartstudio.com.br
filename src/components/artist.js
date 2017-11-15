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
          marginBottom: 40,
          padding: '1px 20px 20px 20px',
          height: 200,
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
      </Row>
    </Grid>
  </DivWithBG>
);
