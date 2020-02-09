import {requestHandler} from "../../lib/axios";
import {call, take, put} from "redux-saga/effects";
import {BaseAction, FILE_UPLOAD_FAILURE, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS} from "./";


export function* fileUploadSaga(action: BaseAction) {
  try{
    yield take(FILE_UPLOAD_REQUEST);
    const data = yield call(requestHandler,{
      method: 'post',
      data: action.payload,
      headers: {'content-type': 'multipart/form-data'}
    });

    yield put({type: FILE_UPLOAD_SUCCESS, payload: data});
  }catch(e){
    yield put({type: FILE_UPLOAD_FAILURE, payload: e});
  }
}
