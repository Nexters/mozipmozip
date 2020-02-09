export type OccupationType = 'PROGRAMMER' | 'DESIGNER';
export type UserState = {
  occupation: OccupationType;
};
export type UserAction = ReturnType<typeof setOccupation>;

export const SET_OCCUPATION = 'user/SET_OCCUPATION' as const;

export const setOccupation = (occupationType: OccupationType) => ({
  type: SET_OCCUPATION,
  payload: { occupationType: occupationType },
});
