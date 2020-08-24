import React from 'react';
import { Header } from 'components/molecules';

const style = {
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  content: {
    width: '100%',
    paddingTop: '20px',
  }
};

const PageTemplate = ({children}) => (
  <div style={style}>
    <Header />
    <div style={style.content}>
      {children}
    </div>
  </div>
);

export default PageTemplate;