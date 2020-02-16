import { AdminAction, AdminState, hasKey } from './types';

const initialState: AdminState = {
  // create start
  title: '넥스터즈 17기 모집 공고',
  image: {
    name: '',
    formData: '', // original
    resizeData: '', // resize
  },
  description: '',
  documentStartDate: '',
  documentEndDate: '',
  interviewStartDate: '',
  interviewEndDate: '',
  noticeEndDate: '',
  questions: {
    common: [
      { title: '공통질문1', type: 'long', maxLength: 10, questionScore: 40 },
    ],
    programmer: [
      { title: '개발자질문1', type: 'long', maxLength: 10, questionScore: 40 },
    ],
    designer: [
      { title: '디자공통질문1', type: 'long', maxLength: 10, questionScore: 40 },
  ],
  },
  // create end
  noticeList: [],
  error: {
    createNoticeError: '',
    getNoticeError: ''
  },
  status: {
    createNoticeStatus: 'wait',
    getNoticeStatus: 'wait',
  },
};

export default function(state: AdminState = initialState, action: AdminAction) {
  switch (action.type) {
    case 'admin/SET_FORM_VALUES': {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case 'admin/CLEAR_ERROR': {
      return {...state, error: {...state.error, [action.payload]: ''}};
    }
    case 'admin/ADD_QUESTION': {
      const { name } = action.payload;
      if (hasKey(state.questions, name)) {
        return {
          ...state,
          questions: {
            ...state.questions,
            [name]: state.questions[name].concat({
              title: '',
              type: 'long',
              maxLength: 0,
              questionScore: 0,
            }),
          },
        };
      } else return state;
    }
    case 'admin/SET_QUESTION_VALUE': {
      const { type, keyName, index, value } = action.payload;
      const target = state.questions[type]; // targetArray
      return {
        ...state,
        questions: {
          ...state.questions,
          [type]: [
            ...target.slice(0, index),
            { ...target[index], [keyName]: value },
            ...target.slice(index + 1, target.length),
          ],
        },
      };
    }
    case 'admin/POST_NOTICE_REQUEST': {
      return {...state, status: {...state.status, createNoticeStatus: 'pending'}}
    }
    case 'admin/POST_NOTICE_SUCCESS': {
      return {...state, status: {...state.status, createNoticeStatus: 'success'}}
    }
    case 'admin/POST_NOTICE_FAILURE': {
      return {...state, status: {...state.status, createNoticeStatus: 'fail'},  error: {...state.error, createNoticeError: action.payload }}
    }
    case 'admin/GET_NOTICES_REQUEST': {
      return { ...state, status: { ...state.status, getNoticeStatus: 'pending' } };
    }
    case 'admin/GET_NOTICES_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        status: { ...state.status, getNoticeStatus: 'success' },
        noticeList: data,
      };
    }
    case 'admin/GET_NOTICES_FAILURE': {
      return { ...state, status: { ...state.status, getNoticeStatus: 'fail' }, error: {...state.error, getNoticeError: action.payload }};
    }
    default:
      return state;
  }
}
