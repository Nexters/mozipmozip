import {OnboardingAction, OnboardingState} from "./types";

const initialState: OnboardingState = {
  isLogin: false
};

export default function(state: OnboardingState = initialState, action: OnboardingAction){
  switch (action.type) {
    default:
      return state
  }
}
