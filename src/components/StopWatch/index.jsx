import React, { Component } from 'react';
import styles from './StopWatch.module.scss';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.timeoutId = null;
  }

  tick = () =>
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(time.getSeconds() + 1);

      return {
        time: newTime,
      };
    });

  start = () => {
    this.setState({ isRunning: true });
  };

  stop = () => {
    this.setState({ isRunning: false });
  };

  clear = () => {
    clearInterval(this.timeoutId);
    this.timeoutId = null;
  };

  reset = () => {
    this.clear();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    this.start();
  }

  componentDidUpdate() {
    const { isRunning } = this.state;
    this.clear();
    if (isRunning) {
      this.timeoutId = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    const { time, isRunning } = this.state;
    console.log(styles);
    return (
      <article className={styles.container}>
        <h1>{time.toLocaleTimeString('it-IT')}</h1>
        {isRunning ? (
          <button className={styles.btn} onClick={this.stop}>
            Stop
          </button>
        ) : (
          <button className={styles.btn} onClick={this.start}>
            Start
          </button>
        )}

        <button className={styles.btn} onClick={this.reset}>
          Reset
        </button>
      </article>
    );
  }
}

export default StopWatch;
