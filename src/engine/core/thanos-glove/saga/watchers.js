// Core
import { takeEvery } from 'redux-saga/effects';
// Engine
import { addHeroAsync, killHalfHeroes } from './asyncActions';
import { callAddHeroWorker } from './worker/callAddHeroWorker';
import { callKillHalfHeroesWorker } from './worker/callKillHalfHeroesWorker';

export function* thanosGloveWatcher() {
   yield takeEvery(addHeroAsync.type, callAddHeroWorker);
   yield takeEvery(killHalfHeroes.type, callKillHalfHeroesWorker);
}
