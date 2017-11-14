import React from 'react';

export default (props) => (
  <div style={{
    background: '#000',
    backgroundImage: `url(${require('../imgs/bgs/black_texture___ray_by_ethenyl.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-300px -100px',
    marginTop: 60,
    paddingTop: 40,
    paddingBottom: 60,
  }}>
    {props.children}
  </div>
);
