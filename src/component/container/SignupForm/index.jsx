import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupValidator } from '../../../helpers/validate';
// import { userSignUp } from '../../actions/authActions/authActions';
// import Loading from '../Loader/Loading';
import InlineError from '../../presentation/InlineErrors';
import Button from '../../presentation/Button';
import Input from '../../presentation/Input';

import './SignupForm.scss';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
      },
      errors: {}
    };
  }

  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({ user });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { signup } = this.props;
    const errors = signupValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    signup(user);
  };

  render() {
    const { user, errors } = this.state;
    // if (this.props.user.isAuthenticated) {
    //   return <Redirect to="catalog" />;
    // }
    // console.log(<Input />)
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div className="form-input">
          <Input
            name="firstname"
            value={user.firstname}
            handleChange={this.handleChange}
            placeholder="First name"
            className="name-input"
          />
          <Input
            name="lastname"
            value={user.lastname}
            handleChange={this.handleChange}
            placeholder="Last name"
            className="name-input"
          />
        </div>
        {errors.firstname && <InlineError text={errors.firstname} />}
        {errors.lastname && <InlineError text={errors.lastname} />}
        <Input
          name="email"
          value={user.email}
          handleChange={this.handleChange}
          placeholder="Email"
          className="email-input"
        />
        <Input
          name="phone"
          value={user.phone}
          type="text"
          handleChange={this.handleChange}
          placeholder="Phone"
          className="email-input"
        />
        <div className="form-input password-input">
          <Input
            name="password"
            value={user.password}
            type="password"
            handleChange={this.handleChange}
            placeholder="Password"
            className="name-input"
          />
          <Input
            name="password2"
            value={user.password2}
            type="password"
            handleChange={this.handleChange}
            placeholder="Repeat password"
            className="name-input"
          />
        </div>
        {/* <input
            name="email"
            value={user.email}
            onChange={this.handleChange}
            placeholder="Email"
          /> */}
        {/* {errors.email && <InlineError text={errors.email} />} */}
        {/* <input name="phone" value={this.phone} onChange={this.handleChange} placeholder="Phone" /> */}
        {/* {errors.phone && <InlineError text={errors.phone} />} */}
        {/* <Input
            name="password"
            value={this.password}
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
          /> */}
        {/* {errors.password && <InlineError text={errors.password} />}
        {this.props.user.authIsLoading ? <Loading size="tiny" /> : null} */}
        <Button type="submit" name="Sign up" className="signup-btn" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default SignupForm;

// const mapDispatchToProps = dispatch => ({
//   signup: user => dispatch(userSignUp(user))
// });

// const mapStateToProps = state => ({ user: state.authReducer });

// export { SignupForm as Signup };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignupForm);

SignupForm.propTypes = {
  signup: PropTypes.func,
  user: PropTypes.object
};

SignupForm.defaultProps = { signup: null, user: {} };
