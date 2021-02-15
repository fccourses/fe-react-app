import React, { Component } from 'react';
import styles from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleForm = (event) => {
    event.preventDefault();
    console.log(event);

    // event.target.reset();
    this.setState({...initialValues});
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleForm}>
        <input
          onChange={this.handleChange}
          value={email}
          className={styles.input}
          placeholder='Email'
          type='email'
          name='email'
        />
        <input
          onChange={this.handleChange}
          value={password}
          className={styles.input}
          placeholder='Password'
          type='password'
          name='password'
        />
        <input className={styles.input} type='submit' />
      </form>
    );
  }
}

export default SignInForm;
