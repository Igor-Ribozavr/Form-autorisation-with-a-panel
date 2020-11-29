import { all } from 'redux-saga/effects';
import { actionWatcher } from '../saga/sagas';

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
