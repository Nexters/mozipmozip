import {
  setFormValues,
  addQuestion,
  setQuestionValue, postNoticeRequest, postNoticeSuccess, postNoticeFailure,
} from "./actions";

export function hasKey<o>(obj: o, key: keyof any): key is keyof o  {
  return key in obj
} // for index signature

export type NoticeQuestion = {
  title: string
  type: 'long' | 'url'
  maxLength: number
  questionScore: number
}

export type AdminState = {
  title: string
  image: {
    name: string
    formData: string
    resizeData: string
  }
  description: string
  startDateTime: Date | ''
  endDateTime: Date | ''
  questions: {
    [common: string]: NoticeQuestion[]
    programmer: NoticeQuestion[]
    designer: NoticeQuestion[]
  }
  error: Error | ''
}


export type AdminAction =
  | ReturnType<typeof setFormValues>
  | ReturnType<typeof addQuestion>
  | ReturnType<typeof setQuestionValue>
  | ReturnType<typeof postNoticeRequest>
  | ReturnType<typeof postNoticeSuccess>
  | ReturnType<typeof postNoticeFailure>


