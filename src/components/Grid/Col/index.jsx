import React from 'react';

const Col = props => {
  const { children, colNum } = props;
  return <div className={`col-${colNum}`}>{children}</div>;
};

export default Col;
