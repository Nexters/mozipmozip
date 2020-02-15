import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import admin from './admin';
import base from './base';
import resumes from './resumes';
import users from './users'

import baseSaga from "./base/sagas";
import adminSaga from "./admin/sagas";
import usersSaga from "./users/sagas";
import resumesSaga from './resumes/sagas';


const rootReducer = combineReducers({
  admin,
  resumes,
  base,
  users
});

export function* rootSaga() {
  yield all([baseSaga(), adminSaga(), resumesSaga(), usersSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
