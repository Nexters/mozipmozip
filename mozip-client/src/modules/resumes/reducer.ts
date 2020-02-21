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
  noticeId: 1,
  status: 'wait',
};

export default function(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case 'user/SET_OCCUPATION':
      const { occupationType } = action.payload;
      return { ...state, occupation: occupationType };
    case 'user/SET_USER_INFO':
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case 'resumes/POST_RESUMES_FAILURE':
      return { ...state, status: 'fail' };
    case 'resumes/POST_RESUMES_REQUEST':
      return { ...state, status: 'pending' };
    case 'resumes/POST_RESUMES_SUCCESS':
      return { ...state, status: 'success' };
    default:
      return state;
  }
}
