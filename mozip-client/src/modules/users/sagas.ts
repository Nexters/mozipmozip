import {take, call, all, put, takeLatest} from 'redux-saga/effects';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE, SIGN_OUT_REQUEST, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS
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

function* signInSage() {
  while (true) {
    try {
      const action = yield take(SIGN_IN_REQUEST);
      const {data} = yield call(requestHandler, {
        path: '/api/v1/users/login',
        method: 'post',
        data: action.payload
      });
      yield put({type: SIGN_IN_SUCCESS, payload: data});
    } catch (e) {
      yield put({type: SIGN_IN_FAILURE, payload: e});
    }
  }
}


function* getCurrentUserSaga(){
  while (true) {
    try {
      yield take(GET_CURRENT_USER_REQUEST);
      const {data} = yield call(requestHandler, {
        path: '/api/v1/users/current',
        method: 'get',
      });
      yield put({type: GET_CURRENT_USER_SUCCESS, payload: data});
    } catch (e) {
      yield put({type: GET_CURRENT_USER_FAILURE, payload: e});
    }
  }
}


function* signOutSaga(){
  while (true) {
    try {
      yield take(SIGN_OUT_REQUEST);
      yield call(requestHandler, {
        path: '/api/v1/users/logout',
        method: 'post',
      });
      yield put({type: SIGN_OUT_SUCCESS})
    } catch (e) {
      yield put({type: SIGN_OUT_FAILURE, payload: e});
    }
  }
}

export default function* usersSaga() {
  yield all([
    signUpSaga(),
    signInSage(),
    getCurrentUserSaga(),
    signOutSaga()
  ]);
}
