import React from 'react';
import { H2, Logo } from 'components/atoms';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '70px',
};

const Header = () => (
  <div style={style}>
    <Logo />
    <H2 text="Welcome to Prym Sign up form"/>
  </div>
);

export default Header;