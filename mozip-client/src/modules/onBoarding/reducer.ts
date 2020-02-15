import {OnBoardingAction, OnBoardingState} from "./types";

const initialState: OnBoardingState = {
  isLogin: false,
  error: '',
  status: {
    login: "wait",
    signUp: "wait"
  }
};

export default function (state: OnBoardingState = initialState, action: OnBoardingAction) {
  switch (action.type) {
    case "onBoarding/SIGN_UP_REQUEST":
      return {...state, status: {...state.status, signUp: 'pending'}};
    case "onBoarding/SIGN_UP_SUCCESS":
      return {...state, status: {...state.status, signUp: 'success'}};
    case "onBoarding/SIGN_UP_FAILURE":
      return {...state, status: {...state.status, signUp: 'fail'}, error: action.payload};
    default:
      return state;
  }
}
