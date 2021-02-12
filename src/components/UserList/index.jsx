import React, { Component } from 'react';
import UserCard from './UserCard';
//vlc
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
      users: usersDB.map((u) => ({ ...u, isSelected: false })),
    };
  }

  userSelector = (id) => {
    const { users } = this.state;
    const newUsers = [...users];
    this.setState({
      users: newUsers.map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      })),
    });
  };

  mapUser = (user) => (
    <UserCard key={user.id} user={user} userSelector={this.userSelector} />
  );

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
