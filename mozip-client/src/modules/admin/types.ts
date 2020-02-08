import {
  setFormValues,
  addQuestion,
  setQuestionValue,
} from "./actions";

export function hasKey<o>(obj: o, key: keyof any): key is keyof o  {
  return key in obj
} // for index signature

export type SetQuestion = {
  type: 'commonQuestions' | 'designerQuestions' | 'developerQuestions',
  keyName: string,
  index: number,
  value: number | string
}; // setQuestionValue action creator params type, depth 1
export type SetInnerQuestion = SetQuestion & { innerKeyName: string } // depth 2

export type NoticeQuestion = {
  title: string
  type: 'long' | 'url'
  maxLength?: number
  questionScore: number
}

export type AdminState = {
  title: string
  image: {
    name: string
    imageData: string
    resizeData: string
  }
  description: string
  startDateTime: Date | ''
  endDateTime: Date | ''
  questions: {
    commonQuestions: NoticeQuestion[]
    developerQuestions: NoticeQuestion[]
    designerQuestions: NoticeQuestion[]
  }
}


export type AdminAction =
  | ReturnType<typeof setFormValues>
  | ReturnType<typeof addQuestion>
  | ReturnType<typeof setQuestionValue>
