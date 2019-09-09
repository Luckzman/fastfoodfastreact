// import { toast } from 'react-toastify';
// import { signupCall, loginCall } from '../../helpers/axiosCalls/auth';
// import { setToken } from '../../helpers/jwt';
// import triggerLoading from './loading';
// import { dispatch } from 'rxjs/internal/observable/range';
import axios from 'axios';

export const actionTypes = {
  AUTH_LOADING: 'AUTH_LOADING',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

// export const signUpSuccess = payload => ({
//   type: actionTypes.SIGNUP_SUCCESS,
//   payload
// });

// export const signUpFailure = payload => ({
//   type: SIGNUP_FAILURE,
//   payload
// });

// export const userSignUp = user => async (dispatch) => {
//   try {
//     dispatch(triggerLoading(AUTH_LOADING));
//     const response = await signupCall(user);
//     dispatch(signUpSuccess(response));
//     toast.success(response.data.data.message);
//   } catch (error) {
//     if (error.response) {
//       dispatch(signUpFailure(error.response));
//       toast.error(error.response.data.data.message);
//     }
//   }
// };

// export const loginSuccess = payload => ({
//   type: actionTypes.LOGIN_SUCCESS,
//   payload
// });

// export const loginFailure = payload => ({
//   type: actionTypes.LOGIN_FAILURE,
//   payload
// });

// export const login = user => async (dispatch) => {
//   console.log("user");
//   try {
//     console.log("user");
//     const response = await loginCall(user);
//     console.log(response);
//     setToken(response.data.data.token);
//     dispatch(loginSuccess(response));
//     // toast.success(response.data.data.message);
//   } catch (error) {
//     if (error.response) {
//       console.log(error, 'error');
//       dispatch(loginFailure(error.response));
//       toast.error(error.response.data.data.message);
//     }
//   }
// };



export const login = (user) => {
  return (dispatch) => {
    return axios.post('http://localhost:3000/api/v1/auth/login', user)
      .then(response => {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch(error => {
        if (error.response) {
          dispatch({
            type: actionTypes.LOGIN_FAILURE,
            payload: error.response.data,
          })
        }
      })
  }
}