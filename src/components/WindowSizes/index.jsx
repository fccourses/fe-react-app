import React, { Component } from 'react';

class WindowSizes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () =>
    this.setState({
      x: window.innerWidth,
      y: window.innerHeight,
    });

  componentDidUpdate (prevProps, prevState) {

  }

  render () {
    const { x, y } = this.state;
    return (
      <div>
        current h: {y}
        current w: {x}
      </div>
    );
  }
}

export default WindowSizes;
