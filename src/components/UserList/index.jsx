import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserCard, { userPropType } from './UserCard';
//vlc

class UserList extends Component {
  userSelector = id => {
    const { users, setUsers } = this.props;
    const newUsers = [...users]; // Поверхностная копия

    setUsers(
      newUsers.map(user => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      }))
    );
  };

  mapUser = user => (
    <UserCard key={user.id} user={user} userSelector={this.userSelector} />
  );

  render () {
    const { users } = this.props;
    return (
      <section>
        <h1>USER LIST FROM DB</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(userPropType).isRequired,
  setUsers: PropTypes.func,
};

export default UserList;
