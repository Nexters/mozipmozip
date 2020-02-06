import {setFormValues, addQuestion} from "./actions";

export type recruitQuestion = {
  title: string
  answer: {type: 'long', length: number} | {type: 'url'} // 답변 형식은 주관식 or Url
  score: number
}

export type AdminState = {
  title: string
  image: {
    name: string
    imageData: string
    resizeData: string
  }
  description: string
  startDate: Date | ''
  endDate: Date | ''
  questions: {
    [commonQuestions:string]: recruitQuestion[]
    developerQuestions: recruitQuestion[]
    designerQuestions: recruitQuestion[]
  }
}


export type AdminAction =
  | ReturnType<typeof setFormValues>
  | ReturnType<typeof  addQuestion>
