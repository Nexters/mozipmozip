export const SET_FORM_VALUES = 'onboarding/SET_FORM_VALUES' as const;
export const setFormValues = (name: string, value: any) => ({type: SET_FORM_VALUES, payload: {name, value}});

export type SignUpRequest = {
  admin: boolean
  adminCode: string
  email: string
  name: string
  password: string
}
export const SIGN_UP_REQUEST = 'onboarding/SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'onboarding/SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'onboarding/SIGN_UP_FAILURE' as const;

export const signUpRequest = (values: SignUpRequest) => ({type: SIGN_UP_REQUEST, payload: values});
export const signUpSuccess = (data: any) => ({type: SIGN_UP_SUCCESS, payload: data});
export const signUpFailure = (e: Error) => ({type: SIGN_UP_FAILURE, payload: e});
