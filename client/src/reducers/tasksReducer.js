import { FETCH_TASKS, FETCH_TASK } from '../actions/types';

const INITIAL_STATE = {
  tasks: []
}

export default ( state=INITIAL_STATE, action ) => {
  switch(action.type){
    case FETCH_TASKS:
      return { ...state, tasks: action.payload }
    
    case FETCH_TASK:
      return { ...state, task: action.payload }

    default:
      return state
  }
}