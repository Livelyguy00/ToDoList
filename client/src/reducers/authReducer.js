import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../actions/types";

export default ( state = {}, action ) => {
  switch(action.type){
    case SIGN_UP:
      return { data: action.payload }

    case SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload }

    case SIGN_OUT:
      return { ...state,  isSignedIn: false }

    default:
      return state;
  }
};