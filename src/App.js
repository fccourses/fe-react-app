import React, { Component } from 'react';
import './App.css';
import Aloha from './components/Aloha';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      url: 'http://localhost:3000/favicon.ico',
    };
  }
  render() {
    const { firstName, url, lastName } = this.state;

    return (
      <>
        <Aloha name={`${firstName} ${lastName}`} />
        <Aloha name='Masha' />
        <Aloha name='Dasha' />
      </>
    );
  }
}

export default App;
