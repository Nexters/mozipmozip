import {take, call, all} from 'redux-saga/effects';
import {makeFormData} from "../../lib/form";

function* postNoticeSaga() {
  const action = yield take("POST_NOTICE");


}

export function* AdminSaga() {
  yield all([
    postNoticeSaga()
  ]);
}
