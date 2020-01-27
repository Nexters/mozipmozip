import { createReducer } from "typesafe-actions"
import { EmployeesAction, EmployeesState } from "./types"
import {EMPLOYEE} from "./actions"

const initialState: EmployeesState = {
  data : [],
  status : "INIT"
}

export default createReducer<EmployeesState, EmployeesAction>(initialState, {
  [EMPLOYEE.REQUEST] : (state, action) => {
    return {...state, status : 'LOADING'}
  },
  [EMPLOYEE.FAILURE] : (state, action) => {
    console.log('action',action) // 임시
    return { ...state, status : 'FAILURE'}
  },
  [EMPLOYEE.SUCCESS] : (state, {payload : {data}}): EmployeesState => {
    return {...state, ...data}
  }
})