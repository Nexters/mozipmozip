import {setFormValues, signUpFailure, signUpRequest, signUpSuccess} from "./actions";

export type Status = 'wait' | 'pending' | 'success' | 'fail'
export type UsersState = {
  isLogin: boolean
  error: Error | ''
  status: {
    login: Status,
    signUp: Status
  }
}

export type UsersAction =
  | ReturnType<typeof setFormValues>
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpFailure>

