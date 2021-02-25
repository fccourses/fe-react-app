import React from 'react';
import SubChild from '../SubChild';

const Child = props => {
  return (
    <div style={{ border: '3px solid', padding: '25px' }}>

      CHILD
      <SubChild />
    </div>
  );
};

export default Child;
