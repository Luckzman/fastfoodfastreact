import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import { Alert } from '../../presentation/Alert';
// import Loading from '../Loader/Loading';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import { loginValidator } from '../../../helpers/validate';
import InlineError from '../../presentation/InlineErrors';

import '../SignupForm/SignupForm.scss';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { login, onhandleAlert } = this.props;
    const errors = loginValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    login(user);
    onhandleAlert();
  };

  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({ user });
  };

  render() {
    const { user, errors } = this.state;
    // if (this.props.user.isAuthenticated) {
    //   return <Redirect to="catalog" />;
    // }
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <Input
          name="email"
          value={user.email}
          handleChange={this.handleChange}
          placeholder="Email"
          className="email-input"
        />
        {errors.email && <InlineError text={errors.email} />}

        <Input
          name="password"
          value={user.password}
          type="password"
          className="email-input"
          placeholder="Password"
          handleChange={this.handleChange}
        />
        {errors.password && <InlineError text={errors.password} />}
        {/* {this.props.user.authIsLoading ? <Loading size="tiny" /> : null} */}
        <Button type="submit" name="Login" className="signup-btn" onClick={this.handleSubmit} />
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   console.log('data');
//   return {
//   login: user => dispatch(login(user))
// };

const mapStateToProps = state => {
  console.log(state);
  return ({ user: state.auth })
};

// export { LoginForm as Login };


LoginForm.propTypes = {
  user: PropTypes.object,
};

LoginForm.defaultProps = { user: {} };

// export default LoginForm;
export default connect(
  mapStateToProps,
  { login }
  // mapDispatchToProps,
)(LoginForm);
