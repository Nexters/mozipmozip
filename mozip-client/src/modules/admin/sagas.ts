import {take, call, all, put, select} from 'redux-saga/effects';
import {
  GET_NOTICES_FAILURE,
  GET_NOTICES_REQUEST,
  GET_NOTICES_SUCCESS,
  POST_NOTICE_FAILURE,
  POST_NOTICE_REQUEST,
  POST_NOTICE_SUCCESS
} from "./actions";
import {requestHandler} from "../../lib/axios";

function* postNoticeSaga() {
  while (true) {
    try {
      const action = yield take(POST_NOTICE_REQUEST);
      const { admin: {image}} = yield select();
      const {data} = yield call(requestHandler, {
        path: '/api/v1/files',
        method: 'post',
        headers: {'content-type': 'multipart/form-data'},
        data: image.formData
      });
      const { data: res} = yield call(requestHandler, {
        path: '/api/v1/notices',
        method: 'post',
        data: {...action.payload, displayImagePath: 'string'} // 수정 필요
      });
      yield put({type: POST_NOTICE_SUCCESS, payload: res});
    } catch (e) {
      yield put({type: POST_NOTICE_FAILURE, payload: e});
    }
  }
}

function* getNoticesSaga() {
  try {
    yield take(GET_NOTICES_REQUEST);
    const result = yield call(requestHandler, {
      path: '/api/v1/notices',
      method: 'get',
    });
    yield put({type: GET_NOTICES_SUCCESS, payload: result});
  } catch (e) {
    yield put({type: GET_NOTICES_FAILURE, payload: e});
  }
}


export default function* adminSaga() {
  yield all([
    postNoticeSaga(),
    getNoticesSaga()
  ]);
}
