import React from 'react';

const Container = props => {
  const { children } = props;
  return <div style={{ maxWidth: '1200px' }}>{children}</div>;
};

export default Container;
