export const SET_FORM_VALUES = 'admin/SET_FORM_VALUES' as const;
export const setFormValues = (name: string, value: any) => ({type: SET_FORM_VALUES, payload: {name, value}});

export const ADD_QUESTION = 'admin/ADD_QUESTION' as const;
export const addQuestion = (name: string) => ({type: ADD_QUESTION, payload: {name}});
export const SET_QUESTION_VALUE = 'admin/SET_QUESTION_VALUE' as const;

export type SetQuestion = {
  type: 'commonQuestions' | 'designerQuestions' | 'developerQuestions',
  keyName: string,
  index: number,
  value: number | string
}; // setQuestionValue action creator params type, depth 1
export const setQuestionValue = (args: SetQuestion) => ({type: SET_QUESTION_VALUE, payload: {...args}});

export const POST_NOTICE_REQUEST = 'admin/POST_NOTICE_REQUEST' as const; // create notice
export const POST_NOTICE_SUCCESS = 'admin/POST_NOTICE_SUCCESS' as const;
export const POST_NOTICE_FAILURE = 'admin/POST_NOTICE_FAILURE' as const;
export const postNotice = () => ({type: POST_NOTICE_REQUEST});
