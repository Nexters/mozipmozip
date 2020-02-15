import { UserAction, UserState } from './actions';

const initialState: UserState = {
  blogURL: '',
  email: '',
  githubURL: '',
  jobTypes: [],
  name: '',
  occupation: 'PROGRAMMER',
  phoneNumber: '',
  portfolioURL: '',
  resumeAnswerItems: [],
  state: 'DRAFT',
};

export default function(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case 'user/SET_OCCUPATION':
      const { occupationType } = action.payload;
      return { ...state, occupation: occupationType };
    case 'user/SET_USER_INFO':
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}
