// Core
import { put, call } from 'redux-saga/effects';

// Parts
import { addHero, setLoading } from '../../slice';
//Config
import { api } from '../../../../config/axios';

export function* callAddHeroWorker(action) {
   yield put(setLoading(true));
   const hero = action.payload;
   const response = yield call(api.getPicture, hero.thanosGlove);
   const data = response.data.organic[0];
   console.log('dataOrganic', data);
   const heroUrlPicture = data.imageUrl;
   console.log('url', heroUrlPicture);
   console.log('response', response);
   const dataHero = {
      heroName: hero.thanosGlove,
      heroPicture: heroUrlPicture,
   };
   yield put(addHero(dataHero));
   console.log(dataHero);
   yield put(setLoading(false));
}
