import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import tasksReducer from './tasksReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  tasks: tasksReducer
})