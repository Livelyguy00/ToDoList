import { SIGN_IN, SIGN_UP } from "../actions/types";

export default ( state = {}, action ) => {
  switch(action.type){
    case SIGN_UP:
      return { data: action.payload }

    case SIGN_IN:
      return { isSignedIn: true, user: action.payload }

    default:
      return state;
  }
};