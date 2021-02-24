import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: '2px solid dodgerblue',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  fontSize: '3rem',
  maxWidth: '480px',
  margin: '0 auto',
};

/* 
  1. Состояние не должно быть сложным.
  2. Всё состояние и все пропсы должны влиять на рендер.
*/

class Counter extends Component {
  state = {
    value: 0,
  };

  increment = () =>
    this.setState((state, props) => ({ value: state.value + props.step }));

  decrement = () =>
    this.setState((state, props) => ({ value: state.value - props.step }));

  render () {
    const { value } = this.state;
    const { step, inputValue } = this.props;
    console.log('render counter');

    return (
      <div style={styles}>
        Current Step: {step}
        <br />
        Current state: {value}
        <br />
        Current input value from page: {inputValue}
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={() => this.setState({ value })}>
            SET THIS VALUE
          </button>
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  step: 5,
};

Counter.propTypes = {
  step: PropTypes.number,
};

export default Counter;
