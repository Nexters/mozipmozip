import { all, take, call, put } from 'redux-saga/effects';
import {
  POST_RESUMES_REQUEST,
  POST_RESUMES_SUCCESS,
  POST_RESUMES_FAILURE,
} from './actions';
import { requestHandler } from '../../lib/axios';

//resume 등록 사가
function* postResumesSaga() {
  try {
    //take를 하면 yield를 하나씩 수행한다
    //POST_RESUMES_REQUEST 액션 observe
    const action = yield take(POST_RESUMES_REQUEST);
    // call(a,b) a의 함수에 b를 넣어서 실행
    // promise가 resolve 될 때 까지 다음 yield를 실행하지 않음
    const { data } = yield call(requestHandler, {
      method: 'post',
      path: '/api/v1/resumes',
      data: action.payload,
    });
    //put store로 디스패치
    yield put({ type: POST_RESUMES_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: POST_RESUMES_FAILURE, payload: e });
  }
}

// resume 사가들을 모아주는 resume root saga
export default function* resumeSaga() {
  yield all([postResumesSaga()]);
}
