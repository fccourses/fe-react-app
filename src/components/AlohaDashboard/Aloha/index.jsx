import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Aloha.module.scss';

class Aloha extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }

  switchState = () => {
    const { isGreeting } = this.state;
    this.setState({
      isGreeting: !isGreeting,
    });
  };

  deleteHandler = () => {
    const { deleteUser, id } = this.props;
    deleteUser(id);
  };

  render () {
    const { isGreeting } = this.state;
    const { name } = this.props;
    if (!isGreeting) {
      return <h1>ПОКА {name}</h1>;
    }

    return (
      <div className={styles.container}>
        <h1>
          {isGreeting ? 'Hello' : 'Goodbye'}, {name}
        </h1>
        <button onClick={this.switchState}>Switch</button>
        <button onClick={this.deleteHandler}>X</button>
      </div>
    );
  }
}

Aloha.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteUser: PropTypes.func,
};

export default Aloha;
