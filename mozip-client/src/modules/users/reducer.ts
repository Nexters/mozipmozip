import {UsersAction, UsersState} from "./types";

const initialState: UsersState = {
  isLogin: false,
  userInfo: {
    name: '',
    email: '',
    admin: false
  },
  error: {
    signIn: '',
    signUp: '',
    signOut: '',
    getCurrentUser: ''
  },
  status: {
    signIn: "wait",
    signUp: "wait",
    signOut: "wait"
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
      return {...state, userInfo: action.payload};
    case "users/GET_CURRENT_USER_FAILURE":
      return {...state, error: {...state.error, getCurrentUser: action.payload}};
    case "users/SIGN_OUT_REQUEST":
      return {...state, status: {...state.status, signOut: "pending"}};
    case "users/SIGN_OUT_SUCCESS":
      return {...state, status: {...initialState.status, signOut: "success"}, userInfo: {name: '', email: '', admin: false}};
    case "users/SIGN_OUT_FAILURE":
      return {...state, status: {...state.status, signOut: "fail"}, error: {...state.error, signOut: action.payload}};
    default:
      return state;
  }
}
