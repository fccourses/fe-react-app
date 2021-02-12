import React, { Component } from 'react';
import UserCard from './UserCard';

const usersDB = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Snow',
  },
  {
    id: 2,
    firstName: 'Test',
    lastName: 'Doe',
  },
  {
    id: 3,
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: 4,
    firstName: 'Sasha',
    lastName: 'Doe',
  },
  {
    id: 5,
    firstName: 'Masha',
    lastName: 'Doe',
  },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB,
    };
  }

  mapUser = (user) => <UserCard key={user.id} user={user} />;

  render() {
    const { users } = this.state;
    return (
      <section>
        <h1>USER LIST FROM DB</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

export default UserList;
