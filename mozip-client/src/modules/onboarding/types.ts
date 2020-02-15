import {setFormValues, signUpFailure, signUpRequest, signUpSuccess} from "./actions";

export type OnboardingState = {
  isLogin: boolean
}

export type OnboardingAction =
  | ReturnType<typeof setFormValues>
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpFailure>

