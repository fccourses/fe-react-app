import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UsersLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: false,
    };
  }

  componentDidMount () {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data.results,
        })
      )
      .catch(() =>
        this.setState({
          isError: true,
        })
      )
      .finally(() =>
        this.setState({
          isFetching: false,
        })
      );
  }

  render () {
    const { users, isFetching, isError } = this.state;

    if (isError) {
      return <div>ERROR</div>;
    }

    if (isFetching) {
      return <div>LOADING...</div>;
    }

    return (
      <div>
        <h1>USER LIST</h1>
        <ul>
          {users.map(user => (
            <li key={user.login.uuid}>{JSON.stringify(user, null, 4)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;
