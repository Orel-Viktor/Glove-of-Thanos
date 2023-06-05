// Core
import { put } from 'redux-saga/effects';
// Parts
import { addHero } from '../../slice';

export function* callAddHeroWorker(action) {
   const hero = action.payload;

   yield put(addHero(hero.thanosGlove));
}
