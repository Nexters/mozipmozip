import {take, call, all, put} from 'redux-saga/effects';
import {POST_NOTICE_FAILURE, POST_NOTICE_REQUEST, POST_NOTICE_SUCCESS} from "./actions";
import {requestHandler} from "../../lib/axios";

function* postNoticeSaga() {
  while(true){
    try {
      const action = yield take(POST_NOTICE_REQUEST);
      const {result} = yield call(requestHandler, {
        path: '/api/v1/notices',
        method: 'post',
        data: action.payload
      });
      yield put({type: POST_NOTICE_SUCCESS, payload: result});
      return result
    } catch (e) {
      yield put({type: POST_NOTICE_FAILURE, payload: e});
    }
  }
}

export default function* adminSaga() {
  yield all([
    postNoticeSaga()
  ]);
}
