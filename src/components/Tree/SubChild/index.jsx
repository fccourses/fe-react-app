import React from 'react';
import { UserContext } from '../../../contexts';

const SubChild = props => {
  return (
    <UserContext.Consumer>
      {userValueFromContext => {
        return (
          <div style={{ border: '3px solid', padding: '25px' }}>
            TARGET SUB_CHILD
            <div>{JSON.stringify(userValueFromContext)}</div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default SubChild;
