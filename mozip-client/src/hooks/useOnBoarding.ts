import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {SignUpRequest, signUpRequest} from "../modules/onBoarding";

export default function useOnBoarding() {
  const dispatch = useDispatch();
  const onSignUp = useCallback((values: SignUpRequest) => dispatch(signUpRequest(values)),[dispatch]);
  return {
    onSignUp
  };
}
