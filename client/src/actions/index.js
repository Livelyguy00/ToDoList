import api from '../apis/index';
import { SIGN_IN } from './types';
import history from '../history';

export const signUp = ({email, password, password_2}) => async dispatch => {
  if(password === password_2){
    api.post('/signup', ({email, password}));
  }
  
  history.push('/signin')
}

export const signIn = (formValues) => async dispatch => {
  const response = api.post('/signin', formValues)
  await dispatch({
    type: SIGN_IN,
    payload: response.data
  })
  history.push('/')
}