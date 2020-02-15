import {setFormValues, signUpFailure, signUpRequest, signUpSuccess} from "./actions";

export type Status = 'wait' | 'pending' | 'success' | 'fail'
export type OnBoardingState = {
  isLogin: boolean
  error: Error | ''
  status: {
    login: Status,
    signUp: Status
  }
}

export type OnBoardingAction =
  | ReturnType<typeof setFormValues>
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpFailure>

