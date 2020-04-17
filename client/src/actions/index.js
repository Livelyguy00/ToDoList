import api from '../apis/index';
import { SIGN_IN, SIGN_UP } from './types';
import history from '../history';

export const signUp = ({email, password, password_2}) => async dispatch => {
  if(password === password_2){
    const request = await api.post('/signup', ({email, password}));
    await dispatch({
      type: SIGN_UP,
      payload: request.data.message
    })
    if(request.data.success === true){
      history.push('/signin')
    }
    else{
      history.push('/signup')
    }
  }
}

export const signIn = ({ email, password }) => async dispatch => {
  const response = await api.post('/signin', {email, password})
  await dispatch({
    type: SIGN_IN,
    payload: response.data.data
  })
  history.push('/')
}