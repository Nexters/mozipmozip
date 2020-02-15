import {UsersAction, UsersState} from "./types";

const initialState: UsersState = {
  isLogin: false,
  error: {
    signIn: '',
    signUp: '',
    getCurrentUser: ''
  },
  status: {
    signIn: "wait",
    signUp: "wait"
  },
  userInfo: {

  }
};

export default function (state: UsersState = initialState, action: UsersAction) {
  switch (action.type) {
    case "users/CLEAR_ERROR": // error 초기화
      return {...state, error: {...state.error, [action.payload]: ''}};
    case "users/SIGN_UP_REQUEST":
      return {...state, status: {...state.status, signUp: 'pending'}};
    case "users/SIGN_UP_SUCCESS":
      return {...state, status: {...state.status, signUp: 'success'}};
    case "users/SIGN_UP_FAILURE":
      return {...state, status: {...state.status, signUp: 'fail'}, error: {...state.error, signUp: action.payload}};
    case "users/SIGN_IN_REQUEST":
      return {...state, status: {...state.status, signIn: 'pending'}};
    case "users/SIGN_IN_SUCCESS":
      return {...state, status: {...state.status, signIn: 'success'}};
    case "users/SIGN_IN_FAILURE":
      return {...state, status: {...state.status, signIn: 'fail'}, error: {...state.error, signIn: action.payload}};
    case "users/GET_CURRENT_USER_SUCCESS":
      return {...state, userInfo: action.payload };
    case "users/GET_CURRENT_USER_FAILURE":
      return {...state, error: {...state.error, getCurrentUser: action.payload}};
    default:
      return state;
  }
}
