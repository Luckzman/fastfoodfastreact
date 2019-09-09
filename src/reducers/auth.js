import { actionTypes } from '../actions/authActions';
// import initialState from './initialState';


// const { user } = initialState;
const user = {
  success: false,
  data: {},
  error: false,
}

export default (state = user, action) => {
  switch (action.type) {
    // case AUTH_LOADING:
    //   return {
    //     ...state,
    //     authIsLoading: true
    //   };
    // case SIGNUP_SUCCESS:
    //   return {
    //     authIsLoading: false,
    //     success: true,
    //     response: action.payload.data.message,
    //     isAuthenticated: false
    //   };
    // case SIGNUP_FAILURE:
    //   return {
    //     authIsLoading: false,
    //     success: false,
    //     response: action.payload.data.message,
    //     isAuthenticated: false
    //   };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload,
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        data: action.payload,
        error: true
      }
    default:
      return state;
  }
};
