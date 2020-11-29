import { put, takeLatest, call } from 'redux-saga/effects';
import { receiveDataFunc, addFunc } from '../action';
import { fetchReceiveData, fetchAdd } from '../saga/api';
import { START_FETCH_RECEIVE_ALL, START_ADD } from '../actionTypes';

function* fetchData() {
  const data = yield call(fetchReceiveData);
  yield put(receiveDataFunc(data));
}

function* fetchResponse(action) {
  const response = yield call(fetchAdd, action);
  yield put(addFunc(response));
}

export function* actionWatcher() {
  yield takeLatest(START_FETCH_RECEIVE_ALL, fetchData);
  yield takeLatest(START_ADD, fetchResponse);
}
