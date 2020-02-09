//type
export type OccupationType = 'PROGRAMMER' | 'DESIGNER';
export type StateType = 'DRAFT' | 'COMPLETE';
export type UserAction =
  | ReturnType<typeof setOccupation>
  | ReturnType<typeof setUserInfo>;
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
  resumeAnswerItems: [
    {
      answer: string;
    },
  ];
  state: 'DRAFT';
};

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
