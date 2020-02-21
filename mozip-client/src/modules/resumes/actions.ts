//type
export type OccupationType = 'PROGRAMMER' | 'DESIGNER';
export type StateType = 'DRAFT' | 'COMPLETE';
export type UserAction =
  | ReturnType<typeof setOccupation>
  | ReturnType<typeof setUserInfo>;
type resumeAnswerType = {
  questionNo: number;
  answer: string;
};
//TODO: jobTypes를 string 배열로 해서 중복 체크 기능 추가
export type UserState = {
  blogURL: string;
  email: string;
  githubURL: string;
  jobTypes: string[];
  name: string;
  occupation: OccupationType;
  phoneNumber: string;
  portfolioURL: string;
  resumeAnswerItems: resumeAnswerType[];
  state: 'DRAFT';
  noticeId: number;
};
//사가 액션 - request, success, failure
export const POST_RESUMES_REQUEST = 'resumes/POST_RESUMES_REQUEST' as const;
export const POST_RESUMES_SUCCESS = 'resumes/POST_RESUMES_SUCCESS' as const;
export const POST_RESUMES_FAILURE = 'resumes/POST_RESUMES_FAILURE' as const;

export const SET_OCCUPATION = 'user/SET_OCCUPATION' as const;
export const SET_USER_INFO = 'user/SET_USER_INFO' as const;

export const setUserInfo = (name: string, value: any) => ({
  type: SET_USER_INFO,
  payload: { name, value },
});

export const setOccupation = (occupationType: OccupationType) => ({
  type: SET_OCCUPATION,
  payload: { occupationType: occupationType },
});

//사가 액션 생성 함수
export const postResumesRequest = (values: UserState) => ({
  type: POST_RESUMES_REQUEST,
  payload: values,
});
export const postResumesSuccess = (data: any) => ({
  type: POST_RESUMES_SUCCESS,
  payload: data,
});
export const postResumesFailure = (error: Error) => ({
  type: POST_RESUMES_FAILURE,
  payload: error,
});
