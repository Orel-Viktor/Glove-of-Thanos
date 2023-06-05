// Core
import { all, call } from 'redux-saga/effects';
import { thanosGloveWatcher } from '../core/thanos-glove/saga/watchers';

export default function* rootSaga() {
   yield all([call(thanosGloveWatcher)]);
}
