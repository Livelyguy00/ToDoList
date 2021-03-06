import api from '../apis/index';
import { SIGN_IN, SIGN_UP, SIGN_OUT, FETCH_TASKS, FETCH_TASK, DELETE_TASK, NEW_TASK, FETCH_CHECKED } from './types';
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
    payload: response.data.userId
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

export const NewTask = (task, user) => async dispatch => {
  const response = await api.post('/addtask', {task, user})

  dispatch({
    type: NEW_TASK,
    payload: response.data.task
  })
  history.push('/tasks')
}

export const fetchTasks = (userId) => async dispatch => {
  const response = await api.get(`/fetchtasks?user=${userId}`)
  dispatch({
    type: FETCH_TASKS,
    payload: response.data.data
  })
}

export const fetchCheckedTasks = (userId) => async dispatch => {
  const response = await api.get(`/fetchchecked?user=${userId}`)
  dispatch({
    type: FETCH_CHECKED,
    payload: response.data.data
  })
}

export const fetchTask = (taskId) => async dispatch => {
  const response = await api.get(`/fetchtask?task=${taskId}`)
  const data = response.data.data[0]
  dispatch({
    type: FETCH_TASK,
    payload: data
  })
}

export const deleteTask = (taskId) => async dispatch => {
  const response = await api.get(`/delete?task=${taskId}`)
  const message = response.data.message
  dispatch({
    type: DELETE_TASK,
    payload: message
  })
}

export const checkTask = (taskId) => async dispatch => {
  await api.get(`/check?task=${taskId}`)
}

export const uncheckTask = (taskId) => async dispatch => {
  await api.get(`/uncheck?task=${taskId}`)
}