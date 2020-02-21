export const SET_FORM_VALUES = 'users/SET_FORM_VALUES' as const;
export const setFormValues = (name: string, value: any) => ({type: SET_FORM_VALUES, payload: {name, value}});
export const CLEAR_ERROR = 'users/CLEAR_ERROR'as const
export const clearError = (keyName: string) => ({type: CLEAR_ERROR, payload: keyName});
export const RESET_STATUS = 'users/RESET_STATUS'as const;
export const resetStatus = () => ({type: RESET_STATUS});

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

export const GET_CURRENT_USER_REQUEST  = 'users/GET_CURRENT_USER_REQUEST'as const;
export const GET_CURRENT_USER_SUCCESS  = 'users/GET_CURRENT_USER_SUCCESS'as const;
export const GET_CURRENT_USER_FAILURE  = 'users/GET_CURRENT_USER_FAILURE'as const;

export const getCurrentUserRequest = () => ({type: GET_CURRENT_USER_REQUEST});
export const getCurrentUserSuccess = (data: any) => ({type: GET_CURRENT_USER_SUCCESS, payload: data});
export const getCurrentUserFailure = (e: Error) => ({type: GET_CURRENT_USER_FAILURE, payload: e});

export const SIGN_OUT_REQUEST = 'users/SIGN_OUT_REQUEST' as const;
export const SIGN_OUT_SUCCESS = 'users/SIGN_OUT_SUCCESS' as const;
export const SIGN_OUT_FAILURE = 'users/SIGN_OUT_FAILURE' as const;
export const signOutRequest = () => ({type: SIGN_OUT_REQUEST});
export const signOutSuccess = () => ({type: SIGN_OUT_SUCCESS});
export const signOutFailure = (e: Error) => ({type: SIGN_OUT_FAILURE, payload: e});
