import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api';
import useData from '../../hooks';

const UserList = props => {
  const { data: users, error, isFetching } = useData(getUsers);

  return (
    <ol>
      {isFetching && <li>LOADING...</li>}
      {users.map((u, i) => {
        return <li key={u.login.uuid}>{JSON.stringify(u, null, 4)}</li>;
      })}
    </ol>
  );
};

export default UserList;
