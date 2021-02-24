import React, { Component } from 'react';

class PhoneList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      phones: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    this.setState({ isFetching: true });
    fetch('/phones.json')
      .then(res => res.json())
      .then(phones => this.setState({ phones, isFetching: false }))
      .catch(error => this.setState({ error, isFetching: false }));
  }

  render () {
    const { phones, isFetching, error } = this.state;
    if (error) {
      return <div>{error.message}</div>;
    }
    if (isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        {phones.map(phone => (
          <li key={phone.id}>
            <p>{phone.name}</p>
            <strong>{phone.price}</strong>
          </li>
        ))}
      </ul>
    );
  }
}

export default PhoneList;
