import {AdminAction, AdminState, hasKey} from './types';

const initialState: AdminState = {
  // create start
  // title: '넥스터즈 17기 모집 공고',
  // image: {
  //   name: '',
  //   formData: '', // original
  //   resizeData: '', // resize
  // },
  // description: '',
  // documentStartDate: '',
  // documentEndDate: '',
  // interviewStartDate: '',
  // interviewEndDate: '',
  // noticeEndDate: '',
  // questions: {
  //   common: [
  //     {title: '공통질문1', type: 'long', maxLength: 10, questionScore: 40},
  //   ],
  //   programmer: [
  //     {title: '개발자질문1', type: 'long', maxLength: 10, questionScore: 40},
  //   ],
  //   designer: [
  //     {title: '디자공통질문1', type: 'long', maxLength: 10, questionScore: 40},
  //   ],
  // },
  title: '넥스터즈 17기 모집 공고',
  image: {
    name: '',
    formData: '', // original
    resizeData: '', // resize
  },
  description: '연합동아리 NEXTERS는 IT 생태계의 주인공인 개발자와 디자이너를 위한 모임입니다. 재능있는 개발자와 디자이너가 함께 모여 자유로운 분위기에서 어울리고 도움을 주고받으며 협업을 통해 원하는 서비스를 만듭니다. NEXTERS에서는 수도권 인근의 대학생들과 직장인들이 주로 활동하고 있습니다. 대학생은 실무에서의 경험과 노하우를 배우며 진로를 세부적으로 검증할 수 있고, 실무자는 제한이 적은 자유로운 활동을 통해 창의력을 키워나갈 수 있는 기회가 될 것입니다.',
  documentStartDate: new Date("2020-02-21"),
  documentEndDate: new Date("2020-02-23"),
  interviewStartDate: new Date('2020-02-24'),
  interviewEndDate: new Date('2020-02-25'),
  noticeEndDate: new Date('2020-02-26'),
  questions: {
    common: [
      {title: '가장 좋아하는 음식 설명 해주세요!', type: 'long', maxLength: 500, questionScore: 40},
      {title: '넷플릭스 재밌는 영화나 드라마 아시나요?', type: 'long', maxLength: 500, questionScore: 40},
      {title: '일할 때 듣기 좋은 노래 없나요?', type: 'long', maxLength: 500, questionScore: 20},

    ],
    programmer: [
      {title: '개발자로 3행시 해주세요.', type: 'long', maxLength: 500, questionScore: 20},
      {title: '코딩 잘하는 비결이 뭔가요?', type: 'long', maxLength: 200, questionScore: 30},
      {title: '여러분에게 디자이너란?', type: 'long', maxLength: 300, questionScore: 50},
    ],
    designer: [
      {title: '디자이너로 4행시 지어주세요.', type: 'long', maxLength: 350, questionScore: 40},
      {title: '가고싶은 회사가 어디에요?', type: 'long', maxLength: 250, questionScore: 40},
      {title: '디자인 잘하는 비결 알려주세', type: 'long', maxLength: 410, questionScore: 20},
    ],
  },

  // create end
  noticeList: [],
  error: {
    createNoticeError: '',
    getNoticeError: '',
    getNoticeOneError: ''
  },
  status: {
    createNoticeStatus: 'wait',
    getNoticeStatus: 'wait',
    getNoticeOneStatus: 'wait'
  },
};

export default function (state: AdminState = initialState, action: AdminAction) {
  switch (action.type) {
    case 'admin/SET_FORM_VALUES': {
      const {name, value} = action.payload;
      return {...state, [name]: value};
    }
    case 'admin/CLEAR_ERROR': {
      return {...state, error: {...state.error, [action.payload]: ''}};
    }
    case 'admin/ADD_QUESTION': {
      const {name} = action.payload;
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
      const {type, keyName, index, value} = action.payload;
      const target = state.questions[type]; // targetArray
      return {
        ...state,
        questions: {
          ...state.questions,
          [type]: [
            ...target.slice(0, index),
            {...target[index], [keyName]: value},
            ...target.slice(index + 1, target.length),
          ],
        },
      };
    }
    case 'admin/POST_NOTICE_REQUEST': {
      return {...state, status: {...state.status, createNoticeStatus: 'pending'}};
    }
    case 'admin/POST_NOTICE_SUCCESS': {
      return {...state, status: {...state.status, createNoticeStatus: 'success'}};
    }
    case 'admin/POST_NOTICE_FAILURE': {
      return {
        ...state,
        status: {...state.status, createNoticeStatus: 'fail'},
        error: {...state.error, createNoticeError: action.payload}
      };
    }
    case 'admin/GET_NOTICES_REQUEST': {
      return {...state, status: {...state.status, getNoticeStatus: 'pending'}};
    }
    case 'admin/GET_NOTICES_SUCCESS': {
      const {data} = action.payload;
      return {
        ...state,
        status: {...state.status, getNoticeStatus: 'success'},
        noticeList: data,
      };
    }
    case 'admin/GET_NOTICES_FAILURE': {
      return {
        ...state,
        status: {...state.status, getNoticeStatus: 'fail'},
        error: {...state.error, getNoticeError: action.payload}
      };
    }
    case 'admin/GET_NOTICE_ONE_REQUEST': {
      return {
        ...state,
        status: {...state.status, getNoticeOneStatus: 'pending'}
      }
    }
    case 'admin/GET_NOTICE_ONE_SUCCESS': {
      return {
        ...state,
        ...action.payload,
        status: {...state.status, getNoticeOneStatus: 'success'}
      }
    }
    case 'admin/GET_NOTICE_ONE_FAILURE': {
      return {
        ...state,
        status: {...state.status, getNoticeOneStatus: 'fail'}
      }
    }
    default:
      return state;
  }
}
