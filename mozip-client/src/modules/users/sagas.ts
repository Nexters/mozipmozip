import {take, call, all, put} from 'redux-saga/effects';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST
} from "./actions";
import {requestHandler} from "../../lib/axios";

function* signUpSaga() {
  while (true) {
    try {
      const action = yield take(SIGN_UP_REQUEST);
      const {data} = yield call(requestHandler, {
        path: '/api/v1/users',
        method: 'post',
        data: action.payload
      });
      yield put({type: SIGN_UP_SUCCESS, payload: data});
    } catch (e) {
      yield put({type: SIGN_UP_FAILURE, payload: e});
    }
  }
}



export default function* usersSaga() {
  yield all([
    signUpSaga(),

  ]);
}
