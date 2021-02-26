import React from 'react';
import SignInForm from '../../components/forms/SignInForm';

const SignInPage = props => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div>
      {/* <Header></Header> */}

      <h1>LOGIN TO your account</h1>

      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignInPage;
