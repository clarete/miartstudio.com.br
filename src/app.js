import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import TopBar from './components/topbar';
import DivWithBG from './components/divwithbg';

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

const Gallery = () => (
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
  </div>
);

const Artist = () => (
  <DivWithBG>
    <Grid>
      <Row>
        <h2 style={{ color: '#fff' }}>Artista</h2>
        <a id="artist"></a>
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
            foi seu forte: além de tatuador, é designer de jóias (ourives) de
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

export default (
  <div>
    <TopBar />
    <Gallery />
    <Artist />
  </div>
);
