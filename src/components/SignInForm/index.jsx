import React, { Component } from 'react';
import cx from 'classnames';
import styles from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
  isemailValid: true,
  ispasswordValid: true,
};

class SignInForm extends Component {
  constructor (props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(' ') });
  };

  handleForm = event => {
    event.preventDefault();
    console.log(event);

    // event.target.reset();
    this.setState({ ...initialValues });
  };

  render () {
    const { email, password, isemailValid } = this.state;

    const emailClassNames = cx(styles.input, {
      [styles.invalidInput]: !isemailValid,
    });

    return (
      <form className={styles.container} onSubmit={this.handleForm}>
        <input
          className={emailClassNames}
          onChange={this.handleChange}
          value={email}
          placeholder='Email'
          type='email'
          name='email'
        />
        <input
          className={styles.input}
          onChange={this.handleChange}
          value={password}
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

/* function cx(objectStyles) {
  return Object.entries(objectStyles)
    .filter(([className, condition]) => condition)
    .map(([className, condition]) => className)
    .join(' ');
} */

/* 

{
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
  имяКласса: условиеДляПрименения,
}
*/
