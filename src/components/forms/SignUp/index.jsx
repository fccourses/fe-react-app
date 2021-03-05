import React, { useReducer } from 'react';
import reducer from './reducer';

const SignUp = props => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    gender: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    const action = {
      name,
      value,
    };

    dispatch(action);
  };

  return (
    <form>
      <input
        value={state.firstName}
        onChange={handleChange}
        type='text'
        name='firstName'
      />
      <input
        value={state.lastName}
        onChange={handleChange}
        type='text'
        name='lastName'
      />
      <input
        value={state.email}
        onChange={handleChange}
        type='text'
        name='email'
      />
      <input
        value={state.password}
        onChange={handleChange}
        type='password'
        name='password'
      />
      <input
        value={state.birthday}
        onChange={handleChange}
        type='date'
        name='birthday'
      />
      <input
        value={state.gender}
        onChange={handleChange}
        type='text'
        name='gender'
      />
      <input type='submit' />
    </form>
  );
};

export default SignUp;
