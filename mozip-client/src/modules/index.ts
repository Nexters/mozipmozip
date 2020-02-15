import {combineReducers} from "redux";
import {all} from 'redux-saga/effects';
import admin, {AdminAction} from './admin';
import base, {BaseAction} from './base';
import employees from './employees'
import todos from './todos'


import baseSaga from "./base/sagas";
import adminSaga from "./admin/sagas";

const rootReducer = combineReducers({
  admin,
  base,
  employees,
  todos
});

export function* rootSaga() {
  yield all([
    baseSaga(),
    adminSaga()
  ]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
