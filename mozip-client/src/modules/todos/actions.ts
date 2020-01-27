import { createAction } from 'typesafe-actions'

// export const ADD_TODO = 'todos/ADD_TODO' as const
// export const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const
// export const REMOVE_TODO = 'todos/REMOVE_TODO' as const


export const ADD_TODO = 'todos/ADD_TODO'
export const TOGGLE_TODO = 'todos/TOGGLE_TODO'
export const REMOVE_TODO = 'todos/REMOVE_TODO' // createAction 사용하는 case

// export const addTodo = (text: string) => ({type: ADD_TODO, payload: text})
// export const toggleTodo = (id: number) => ({type: TOGGLE_TODO, payload: id})
// export const removeTodo = (id: number) => ({type: REMOVE_TODO, payload: id})

export const addTodo = createAction(ADD_TODO)<string>()
export const toggleTodo = createAction(TOGGLE_TODO)<number>()
export const removeTodo = createAction(REMOVE_TODO)<number>()


// type TodosAction =
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof toggleTodo>
//   | ReturnType<typeof removeTodo>;

