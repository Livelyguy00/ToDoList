import { SIGN_IN } from "../actions/types";

export default ( state = {}, action ) => {
  switch(action.type){
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload }

    default:
      return state;
  }
};