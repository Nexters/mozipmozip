import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import admin from './admin';
import base from './base';
import resumes from './resumes';

import baseSaga from './base/sagas';
import adminSaga from './admin/sagas';
import resumesSaga from './resumes/sagas';

const rootReducer = combineReducers({
  admin,
  resumes,
  base,
});

export function* rootSaga() {
  yield all([baseSaga(), adminSaga(), resumesSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
