import { UserAction, UserState } from './actions';

const initialState: UserState = {
  occupation: 'PROGRAMMER',
};

export default function(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case 'user/SET_OCCUPATION':
      const { occupationType } = action.payload;
      return { ...state, occupation: occupationType };
    default:
      return state;
  }
}
