import {
  setFormValues,
  addQuestion,
  setQuestionValue,
  postNoticeRequest,
  postNoticeSuccess,
  postNoticeFailure,
  getNoticesRequest,
  getNoticesSuccess,
  getNoticesFailure,
} from "./actions";

export function hasKey<o>(obj: o, key: keyof any): key is keyof o  {
  return key in obj
} // for index signature

export type Status = 'wait' | 'pending' | 'success' | 'fail'
export type NoticeStatus = 'DRAFT' | 'PUBLISHED' | 'DOCUMENT' | 'INTERVIEW' | 'END'

export type NoticeQuestion = {
  title: string
  type: 'long' | 'link' | 'file'
  maxLength: number
  questionScore: number
}

export type Notice = {
  id: number
  title: string
  displayImagePath: string
  description: string
  startDateTime: Date | ''
  endDateTime: Date | ''
  noticeStatus: NoticeStatus
}

export type AdminState = {
  title: string
  image: {
    name: string
    formData: string
    resizeData: string
  }
  description: string
  documentStartDate: Date | ''
  documentEndDate: Date | ''
  interviewStartDate : Date | ''
  interviewEndDate: Date | ''
  noticeEndDate : Date | ''
  questions: {
    [common: string]: NoticeQuestion[]
    programmer: NoticeQuestion[]
    designer: NoticeQuestion[]
  }
  noticeList : Notice[],
  error: Error | ''
  status: {
    createNoticeStatus: Status
    getNoticeStatus: Status
  }
}


export type AdminAction =
  | ReturnType<typeof setFormValues>
  | ReturnType<typeof addQuestion>
  | ReturnType<typeof setQuestionValue>
  | ReturnType<typeof postNoticeRequest>
  | ReturnType<typeof postNoticeSuccess>
  | ReturnType<typeof postNoticeFailure>
  | ReturnType<typeof getNoticesRequest>
  | ReturnType<typeof getNoticesSuccess>
  | ReturnType<typeof getNoticesFailure>



