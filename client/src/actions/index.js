import api from '../apis/index';
import { SIGN_IN, SIGN_UP, SIGN_OUT, FETCH_TASKS } from './types';
import history from '../history';

export const signUp = ({email, password, password_2}) => async dispatch => {
  if(password === password_2){
    const response = await api.post('/signup', ({email, password}));
    await dispatch({
      type: SIGN_UP,
      payload: response.data.message
    })
    if(response.data.success === true){
      history.push('/signin')
    }
    else{
      history.push('/signup')
    }
  }
}

export const signIn = ({ email, password }) => async dispatch => {
  const response = await api.post('/signin', {email, password})
   
  const token = response.data.token;
  localStorage.setItem('token', token);

  dispatch({
    type: SIGN_IN,
    payload: response.data.data
  })
  history.push('/tasks')
}

export const fetchUser = () => async dispatch => {
  const token = localStorage.token
  if(token){
    const response = await api.get('/user', {headers: {'Authorization':'Bearer ' + token}})

    dispatch({
      type: SIGN_IN,
      payload: response.data.authData.userId
    })
  }
}

export const SignOut = () => async dispatch => {
  localStorage.removeItem('token')

  dispatch({
    type: SIGN_OUT
  })
  history.push('/')
}

export const NewTask = async (task, user) => {
  await api.post('/addtask', {task, user})

  history.push('/tasks')
}

export const fetchTasks = (userId) => async dispatch => {
  const response = await api.get(`/fetchtasks?user=${userId}`)
  dispatch({
    type: FETCH_TASKS,
    payload: response.data.data
  })
}