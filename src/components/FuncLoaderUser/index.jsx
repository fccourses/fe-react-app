import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api';
import { useData, useMouse } from '../../hooks';

const UserList = props => {
  const { data: users, error, isFetching } = useData(getUsers);
  const coordinates = useMouse();
  
  return (
    <ol>
      <li>{JSON.stringify(coordinates)}</li>
      {isFetching && <li>LOADING...</li>}
      {users.map((u, i) => {
        return <li key={u.login.uuid}>{JSON.stringify(u, null, 4)}</li>;
      })}
    </ol>
  );
};

export default UserList;
