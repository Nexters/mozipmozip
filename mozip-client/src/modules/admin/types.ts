import {setFormValues} from "./actions";

export type CreateRecruit = {
  title: string
  image: {
    name: string
    imageData: string
  }
  description: string
  startDate: Date | ''
  endDate: Date | ''
}

export type AdminState = {
  recruit: CreateRecruit
}

export type AdminAction =
  | ReturnType<typeof setFormValues>
