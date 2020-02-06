import {setFormValues} from "./actions";

export type recruitQuestion = {
  title: string
  answer: {type: 'long', length: number} | {type: 'url'} // 답변 형식은 주관식 or Url
  score: number
}

export type CreateRecruit = {
  title: string
  image: {
    name: string
    imageData: string
    resizeData: string
  }
  description: string
  startDate: Date | ''
  endDate: Date | ''
  commonQuestions: recruitQuestion[]
  developerQuestions: recruitQuestion[]
  designerQuestions: recruitQuestion[]
}

export type AdminState = {
  recruit: CreateRecruit
}

export type AdminAction =
  | ReturnType<typeof setFormValues>
