import { combineReducers } from "redux"
import { all } from 'redux-saga/effects'
import todos from './todos'
import employees from './employees'
import getEmployeesWatcher from "./employees/sagas"

const rootReducer = combineReducers({
  todos,
  employees
})

export function* rootSaga() {
  yield all([
    getEmployeesWatcher()
  ])
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>