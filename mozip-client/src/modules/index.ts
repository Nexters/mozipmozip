import {combineReducers} from "redux";
import {all} from 'redux-saga/effects';
import admin from './admin';
import base from './base';
import resumes from './resumes';
import onBoarding from './onBoarding'

import baseSaga from "./base/sagas";
import adminSaga from "./admin/sagas";

const rootReducer = combineReducers({
  admin,
  resumes,
  base,
  onBoarding
});

export function* rootSaga() {
  yield all([
    baseSaga(),
    adminSaga()
  ]);
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
