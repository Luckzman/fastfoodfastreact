import React, { Component } from 'react';

import Button from '../Button';
import SignupForm from '../../container/SignupForm';
import LoginForm from '../../container/LoginForm';
import './AuthFormContainer.scss';

export default class AuthFormContainer extends Component {
  state = {
    isLoginForm: false,
    isSignupForm: true,
  }

  triggerLoginForm = () => {
    this.setState({ isLoginForm: true, isSignupForm: false });
  }

  triggerSignupForm = () => {
    this.setState({ isLoginForm: false, isSignupForm: true });
  }

  render() {
    const { isLoginForm, isSignupForm } = this.state;
    const { onhandleAlert } = this.props;

    return (
      <React.Fragment>
        <div className="auth-btn-container">
          <Button
            name="Signup"
            className={isSignupForm ? 'signup' : 'login'}
            handleClick={this.triggerSignupForm}
          />
          <Button
            name="Login"
            className={isLoginForm ? 'signup' : 'login'}
            handleClick={this.triggerLoginForm}
          />
        </div>
        {isSignupForm && <SignupForm />}
        {isLoginForm && <LoginForm onhandleAlert={onhandleAlert} />}
      </React.Fragment>
    );
  }
}
