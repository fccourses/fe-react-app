import React, { Component } from 'react';

class TrackerPage extends Component {
  render () {
    return (
      <div>
        <MouseTracker>
          {({ x, y }) => {
            return <Cat x={x} y={y} />;
          }}
        </MouseTracker>
      </div>
    );
  }
}

const Cat = props => {
  const { x, y } = props;
  const styles = {
    width: '170px',
    height: '100px',
    objectFit: 'cover',
    position: 'absolute',
    top: `${y + 2}px`,
    left: `${x + 2}px`,
  };
  return (
    <img src='https://i.redd.it/r78ytk8h9so11.jpg' alt='cat' style={styles} />
  );
};

class MouseTracker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = event =>
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });

  componentDidMount () {
    document.body.addEventListener('mousemove', this.handleMouseMove);
  }
  componentWillUnmount () {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
  }

  render () {
    const { children } = this.props;
    return children(this.state);
  }
}

class CatWithMouse extends Component {
  constructor (props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = event =>
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });

  render () {
    const { x, y } = this.state;
    const styles = {
      width: '170px',
      height: '100px',
      objectFit: 'cover',
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
    };

    return (
      <div
        style={{ height: '100vh', border: '5px solid red', cursor: 'none' }}
        onMouseMove={this.handleMouseMove}
      >
        <img
          src='https://i.redd.it/r78ytk8h9so11.jpg'
          alt='cat'
          style={styles}
        />
      </div>
    );
  }
}

export default TrackerPage;
