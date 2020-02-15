export const SET_FORM_VALUES = 'users/SET_FORM_VALUES' as const;
export const setFormValues = (name: string, value: any) => ({type: SET_FORM_VALUES, payload: {name, value}});
export const CLEAR_ERROR = 'users/CLEAR_ERROR'as const
export const clearError = (keyName: string) => ({type: CLEAR_ERROR, payload: keyName});

export type SignUpRequest = {
  admin: boolean
  adminCode: string
  email: string
  name: string
  password: string
}

export type SignInRequest = {
  email: string
  password: string
}
export const SIGN_UP_REQUEST = 'users/SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'users/SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'users/SIGN_UP_FAILURE' as const;

export const signUpRequest = (values: SignUpRequest) => ({type: SIGN_UP_REQUEST, payload: values});
export const signUpSuccess = (data: any) => ({type: SIGN_UP_SUCCESS, payload: data});
export const signUpFailure = (e: Error) => ({type: SIGN_UP_FAILURE, payload: e});

export const SIGN_IN_REQUEST = 'users/SIGN_IN_REQUEST' as const;
export const SIGN_IN_SUCCESS = 'users/SIGN_IN_SUCCESS' as const;
export const SIGN_IN_FAILURE = 'users/SIGN_IN_FAILURE' as const;

export const signInRequest = (values: SignInRequest) => ({type: SIGN_IN_REQUEST, payload: values});
export const signInSuccess = (data: any) => ({type: SIGN_IN_SUCCESS, payload: data});
export const signInFailure = (e: Error) => ({type: SIGN_IN_FAILURE, payload: e});
