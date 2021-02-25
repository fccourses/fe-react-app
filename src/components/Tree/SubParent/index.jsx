import React from 'react';
import Child from '../Child';

const SubParent = props => {
  return (
    <div style={{ border: '3px solid', padding: '25px' }}>

      SUBPARENT
      <Child />
    </div>
  );
};

export default SubParent;
