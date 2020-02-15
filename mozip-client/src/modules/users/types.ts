import {
  clearError,
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
  }
  status: {
    signIn: Status,
    signUp: Status
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


