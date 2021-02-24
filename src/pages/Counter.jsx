import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterPage extends Component {
  state = {
    step: 1,
    inputValue: 10,
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({
      [name]: Number(value),
    });

  render () {
    const { step, inputValue } = this.state;
    return (
      <div>
        <input
          type='range'
          min='1'
          max='50'
          value={step}
          onChange={this.handleChange}
          name='step'
        />
        <input
          type='text'
          min='1'
          max='50'
          value={inputValue}
          onChange={this.handleChange}
          name='inputValue'
        />

        <span>STEP: {step}</span>
        <span>value: {inputValue}</span>
        <Counter step={step} inputValue={inputValue} />
      </div>
    );
  }
}

export default CounterPage;
