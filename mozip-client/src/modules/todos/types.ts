import {ActionType} from "typesafe-actions"
import {addTodo, removeTodo, toggleTodo} from "./actions"

const actions = { addTodo, toggleTodo, removeTodo }
export type TodosAction = ActionType<typeof actions>

export type Todo = {
  id: number
  text: string
  done: boolean
}
export type TodosState = Todo[]