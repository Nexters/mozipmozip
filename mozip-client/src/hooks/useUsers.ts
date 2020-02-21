import {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  clearError,
  getCurrentUserRequest, resetStatus,
  signInRequest,
  SignInRequest, signOutRequest,
  SignUpRequest,
  signUpRequest
} from "../modules/users";
import {RootState} from "../modules";

export default function useUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);
  const onClearError = useCallback((keyName: string) => dispatch(clearError(keyName)), [dispatch]);
  const onResetStatus = useCallback(() => dispatch(resetStatus()),[dispatch]);
  const onSignUp = useCallback((values: SignUpRequest) => dispatch(signUpRequest(values)), [dispatch]);
  const onSignIn = useCallback((values: SignInRequest) => dispatch(signInRequest(values)), [dispatch]);
  const onGetCurrentUser = useCallback(() => dispatch(getCurrentUserRequest()), [dispatch]);
  const onSignOut = useCallback(() => dispatch(signOutRequest()), [dispatch]);
  return {
    users,
    onClearError,
    onResetStatus,
    onSignUp,
    onSignIn,
    onSignOut,
    onGetCurrentUser
  };
}
