
import { TodosState, TodosAction } from "./types"
import {createReducer} from "typesafe-actions"
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "./actions"

const initialState: TodosState = []

// export default function(state: TodosState = initialState, action: TodosAction){
//   switch (action.type) {
//     case ADD_TODO: {
//       const nextId = Math.max(...state.map(todo => todo.id)) + 1;
//       return state.concat({
//         id: nextId,
//         text: action.payload,
//         done: false
//       });
//     }
//     case TOGGLE_TODO:
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       );
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

export default createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO] : (state, {payload :text}) => {
    return state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false
    });
  },
  [TOGGLE_TODO] : (state, {payload : id}) => state.map( todo => todo.id === id ? {...todo, done : !todo.done} : todo),
  [REMOVE_TODO] : (state, {payload : id}) => state.filter(todo => todo.id !== id)
})
