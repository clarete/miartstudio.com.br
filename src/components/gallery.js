import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

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
  src: require(`../imgs/photos/thumbs/${p}`),
}));

export default () => (
  <Grid>
    <Row>
      <Col md={12}>
        <h1>Trabalhos</h1>
        <a id="trabalhos"></a>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {pics().map((o, i) =>
            <li style={{ float: 'left', paddingRight: 20, paddingBottom: 20, }}
                key={i}><img src={o.src} /></li>)}
        </ul>
      </Col>
    </Row>
  </Grid>
);
