import {
  clearError, getCurrentUserFailure, getCurrentUserRequest, getCurrentUserSuccess,
  setFormValues,
  signInFailure,
  signInRequest,
  signInSuccess,
  signUpFailure,
  signUpRequest,
  signUpSuccess
} from "./actions";

export type Status = 'wait' | 'pending' | 'success' | 'fail'
export type UsersState = {
  isLogin: boolean
  error: {
    signIn: Error | ''
    signUp: Error | ''
    getCurrentUser: Error | ''
  }
  status: {
    signIn: Status,
    signUp: Status
  }
  userInfo: {
    name: string
    email: string
    admin: boolean
  }
}

export type UsersAction =
  | ReturnType<typeof setFormValues>
  | ReturnType<typeof clearError>
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpFailure>
  | ReturnType<typeof signInRequest>
  | ReturnType<typeof signInSuccess>
  | ReturnType<typeof signInFailure>
  | ReturnType<typeof getCurrentUserRequest>
  | ReturnType<typeof getCurrentUserSuccess>
  | ReturnType<typeof getCurrentUserFailure>



