import React from 'react';

const style = {
  fontSize: '28px',
  fontWeight: '600'
};
const H2 = ({text}) => (
  <h2 {...{style}}>
    {text}
  </h2>
);

export default H2;