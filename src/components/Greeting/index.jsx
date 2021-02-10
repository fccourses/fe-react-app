import { Component } from 'react';

class Greeting extends Component {
  render() {
    const { name, photo } = this.props;
    return (
      <>
        <h1>Hello, {name}</h1>
        <img src={photo} alt={name} />
      </>
    );
  }
}

export default Greeting;
