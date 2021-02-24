import React, { Component } from 'react';

class UserLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    this.setState({
      isFetching: true,
    });
    fetch('/users.json')
      .then(res => res.json())
      .then(users => this.setState({ users, isFetching: false }))
      .catch(error => this.setState({ error, isFetching: false }));
  }

  render () {
    const { users, isFetching, error } = this.state;
    if (error) {
      return <div>{error.message}</div>;
    }
    if (isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <ol>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ol>
    );
  }
}

export default UserLoader;
