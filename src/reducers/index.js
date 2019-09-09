import { combineReducers } from 'redux';
import auth from './auth';
// import guessedWords from './guessWordsReducer';
// import secretWord from './secretWordReducer';
// import error from './errorMessageReducer'

export default combineReducers({
  auth,
  // success,
  // guessedWords,
  // secretWord,
});