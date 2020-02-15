import {requestHandler} from "../../lib/axios";
import {call, take, put, all} from "redux-saga/effects";
import {FILE_UPLOAD_FAILURE, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS} from "./";


function* fileUploadSaga() {
  while (true){
    try{
      const action = yield take(FILE_UPLOAD_REQUEST);
      const data = yield call(requestHandler,{
        path: '/api/v1/files',
        method: 'post',
        data: action.payload,
        headers: {'content-type': 'multipart/form-data'}
      });
      yield put({type: FILE_UPLOAD_SUCCESS, payload: data});
    }catch(e){
      yield put({type: FILE_UPLOAD_FAILURE, payload: e});
    }
  }
}

export default function* baseSaga(){
  yield all([
    fileUploadSaga()
  ])
}
