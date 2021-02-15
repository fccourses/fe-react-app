import React, { Component } from 'react';
import styles from './LoginForm.module.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleForm = (event) => {
    event.preventDefault();
    console.log(event);

    event.target.reset();
  };
  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleForm}>
        <input
          // onChange={} <- TASK. Брать новое значение и устанавливать в состояние
          value={email}
          className={styles.input}
          placeholder='Email'
          type='email'
          name='email'
        />
        <input
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
