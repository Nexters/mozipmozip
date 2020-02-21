
export const SET_FORM_VALUES = 'admin/SET_FORM_VALUES' as const;
export const setFormValues = (name: string, value: any) => ({type: SET_FORM_VALUES, payload: {name, value}});
export const CLEAR_ERROR = 'admin/CLEAR_ERROR'as const;
export const clearError = (keyName: string) => ({type: CLEAR_ERROR, payload: keyName});

export const ADD_QUESTION = 'admin/ADD_QUESTION' as const;
export const addQuestion = (name: string) => ({type: ADD_QUESTION, payload: {name}});
export const SET_QUESTION_VALUE = 'admin/SET_QUESTION_VALUE' as const;

export type SetQuestion = {
  type: 'common' | 'designer' | 'programmer',
  keyName: string,
  index: number,
  value: number | string
}; // setQuestionValue action creator params type, depth 1
export const setQuestionValue = (args: SetQuestion) => ({type: SET_QUESTION_VALUE, payload: {...args}});

export const POST_NOTICE_REQUEST = 'admin/POST_NOTICE_REQUEST' as const; // create notice
export const POST_NOTICE_SUCCESS = 'admin/POST_NOTICE_SUCCESS' as const;
export const POST_NOTICE_FAILURE = 'admin/POST_NOTICE_FAILURE' as const;

export const GET_NOTICES_REQUEST = 'admin/GET_NOTICES_REQUEST' as const;
export const GET_NOTICES_SUCCESS = 'admin/GET_NOTICES_SUCCESS' as const;
export const GET_NOTICES_FAILURE = 'admin/GET_NOTICES_FAILURE' as const;

export const GET_NOTICE_ONE_REQUEST = 'admin/GET_NOTICE_ONE_REQUEST' as const;
export const GET_NOTICE_ONE_SUCCESS = 'admin/GET_NOTICE_ONE_SUCCESS' as const;
export const GET_NOTICE_ONE_FAILURE = 'admin/GET_NOTICE_ONE_FAILURE' as const;

type NoticeFormQuestionItem = {
  content: string
  maxLength: number
  questionScore: number
  title: string
  type: string //'LINK' | 'LONG'
}// type 폴더에 있는 NoticeQuestion type 과 비슷하지만 서버랑 스키마가 달라서 만듬

type NoticeForm = {
  jobTypes: string[]
  noticeFormQuestionItems: NoticeFormQuestionItem[]
  occupation: string //  "COMMON" | "PROGRAMMER" | "DESIGNER"
}

export type NoticeObject = {
  title: string
  description: string
  displayImagePath: string
  documentStartDate: Date | ''
  documentEndDate: Date | ''
  interviewStartDate : Date | ''
  interviewEndDate: Date | ''
  noticeEndDate : Date | ''
  noticeForms: NoticeForm[]
  noticeStatus: string //"DRAFT"
}

export const postNoticeRequest = (noticeObj: NoticeObject) => ({type: POST_NOTICE_REQUEST, payload: noticeObj});
export const postNoticeSuccess = (res: any) => ({type: POST_NOTICE_SUCCESS, payload: res});
export const postNoticeFailure = (e: Error) => ({type: POST_NOTICE_FAILURE, payload: e});

export const getNoticesRequest = () => ({type: GET_NOTICES_REQUEST});
export const getNoticesSuccess = (res: any) => ({type: GET_NOTICES_SUCCESS, payload: res});
export const getNoticesFailure = (e: Error) => ({type: GET_NOTICES_FAILURE, payload: e});

export const getNoticeOneRequest = (id: number) => ({type: GET_NOTICE_ONE_REQUEST, payload: id});
export const getNoticeOneSuccess = (res: any) => ({type: GET_NOTICE_ONE_SUCCESS, payload: res});
export const getNoticeOneFailure = (e: Error) => ({type: GET_NOTICE_ONE_FAILURE, payload: e});
