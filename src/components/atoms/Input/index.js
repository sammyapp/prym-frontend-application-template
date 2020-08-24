import React from 'react';

const style = {
  height: '50px',
  width: '100%',
  padding: '0 10px',
  backgroundColor: '#fff',
  border: '1px solid #e3e5e7',
  borderRadius: '8px',
  outline: 'none',
  color: '#000',
};

const Input = ({type, name, value, placeholder, onChange}) => (
  <input
    {...{type, name, value, onChange, placeholder, style}}
  />
);

Input.defaultProps = {
  type: 'text',
};

export default Input;