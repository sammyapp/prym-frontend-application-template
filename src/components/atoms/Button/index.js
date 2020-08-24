import React from "react";

const style = ({disabled}) => ({
  height: '40px',
  minWidth: '150px',
  maxWidth: '250px',
  width: '100%',
  color: '#fff',
  fontSize: '16px',
  backgroundColor: '#32d390',
  borderRadius: '8px',
  boxShadow: 'rgba(0,0,0,0.13) 0rem 0.5rem 0.9375rem 0rem, rgba(40,45,57,0.08) 0rem 0.5rem 0.9375rem 0rem',
  outline: 'none',
  border: '1px solid #32d390',
  cursor: disabled ? 'default' : 'pointer',
  opacity: disabled ? '0.5' : 1
});

const Button = ({text, type, disabled = false, onClick}) => (
  <button {...{type, disabled, onClick}} style={style({disabled})}>
    {text}
  </button>
);

export default Button;