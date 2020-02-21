import {
  clearError, getCurrentUserFailure, getCurrentUserRequest, getCurrentUserSuccess, resetStatus,
  setFormValues,
  signInFailure,
  signInRequest,
  signInSuccess, signOutFailure, signOutRequest, signOutSuccess,
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
    signOut: Error | ''
    getCurrentUser: Error | ''
  }
  status: {
    signIn: Status
    signUp: Status
    signOut: Status
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
  | ReturnType<typeof resetStatus>
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpFailure>
  | ReturnType<typeof signInRequest>
  | ReturnType<typeof signInSuccess>
  | ReturnType<typeof signInFailure>
  | ReturnType<typeof getCurrentUserRequest>
  | ReturnType<typeof getCurrentUserSuccess>
  | ReturnType<typeof getCurrentUserFailure>
  | ReturnType<typeof signOutRequest>
  | ReturnType<typeof signOutSuccess>
  | ReturnType<typeof signOutFailure>



