import React, { useContext } from 'react';
import { AppContext } from '../../Context';

const style = {
  margin: 0,
  padding: 0,
  minHeight: '100vh',
  minWidth: '100vw',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  left: 0,
  top: 0,
  zIndex: 50,
  backgroundColor: 'rgba(0,0,0,0.4)'
};

const Loader = () => {
  const context = useContext(AppContext);
  return context.state.loading ? <h3 style={style}>Loading...</h3> : <></>;
};

export default Loader;
