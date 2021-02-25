import React from 'react';
import SubParent from '../SubParent';

const Parent = props => {
  return (
    <div style={{ border: '3px solid', padding: '25px' }}>

      PARENT
      <SubParent />
    </div>
  );
};

export default Parent;
