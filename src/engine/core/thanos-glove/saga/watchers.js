// Core
import { takeEvery } from 'redux-saga/effects';
// Engine
import { addHeroAsync } from './asyncActions';
import { callAddHeroWorker } from './worker/callAddHeroWorker';

export function* thanosGloveWatcher() {
   yield takeEvery(addHeroAsync.type, callAddHeroWorker);
}
