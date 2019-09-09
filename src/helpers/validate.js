import validator from 'validator';

export function loginValidator(user) {
  const errors = {};

  if (validator.isEmpty(user.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(user.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } else if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$', 'g').test(user.password)) {
    errors.password = 'Password must be at least 8 characters, 1 uppercase letter, 1 number';
  }
  return errors;
}

export function signupValidator(user) {
  const errors = {};
  if (validator.isEmpty(user.firstname)) {
    errors.firstname = 'Firstname field is required';
  }
  if (validator.isEmpty(user.lastname)) {
    errors.lastname = 'Lastname field is required';
  }
  if (validator.isEmpty(user.phone)) {
    errors.phone = 'phone field is required';
  } else if (!validator.isMobilePhone(user.phone)) {
    errors.phone = 'phone number is not valid';
  }
  if (validator.isEmpty(user.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(user.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } else if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$', 'g').test(user.password)) {
    errors.password = 'Password must be at least 8 characters, 1 uppercase letter, 1 number';
  }
  return errors;
}
