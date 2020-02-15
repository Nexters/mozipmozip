import {UsersAction, UsersState} from "./types";

const initialState: UsersState = {
  isLogin: false,
  error: '',
  status: {
    login: "wait",
    signUp: "wait"
  }
};

export default function (state: UsersState = initialState, action: UsersAction) {
  switch (action.type) {
    case "users/SIGN_UP_REQUEST":
      return {...state, status: {...state.status, signUp: 'pending'}};
    case "users/SIGN_UP_SUCCESS":
      return {...state, status: {...state.status, signUp: 'success'}};
    case "users/SIGN_UP_FAILURE":
      return {...state, status: {...state.status, signUp: 'fail'}, error: action.payload};
    default:
      return state;
  }
}
