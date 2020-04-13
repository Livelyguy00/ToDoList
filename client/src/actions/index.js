import users from '../apis/users';
import { SIGN_IN } from './types';
import history from '../history';

export const signUp = formValues => async dispatch => {
  users.post('/users', { ...formValues });
  history.push('/signin')
}

export const signIn = formValues => async dispatch => {
  const response = users.get(`/users/${ formValues }`)
  return{
    type: SIGN_IN,
    payload: response.data
  }
}