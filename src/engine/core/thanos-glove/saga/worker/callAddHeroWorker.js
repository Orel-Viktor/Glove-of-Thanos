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
   // console.log('dataOrganic', data);
   const heroUrlPicture = data.imageUrl;
   // console.log('url', heroUrlPicture);
   // console.log('response', response);
   const dataHero = {
      heroName: hero.thanosGlove,
      heroPicture: heroUrlPicture,
   };
   // const responseGoogle = yield call(api.getPictureGoogle, hero.thanosGlove);
   // console.log(responseGoogle);
   // yield fetch(`https://www.google.com/search?q=${hero.thanosGlove}&tbm=isch`)
   //    .then((res) => res.json)
   //    .then((data) => console.log(data));

   fetch(
      `https://pixabay.com/api/?key=38041739-984e774dcd52012e65ce54005&q=${hero.thanosGlove}&image_type=photo`,
      {
         method: 'GET',
         // image_type: 'photo',
         // q: `${hero.thanosGlove}`,
      }
   )
      .then((res) => console.log(res.json()))

      .then((hits) => console.log(hits));

   yield put(addHero(dataHero));
   console.log(dataHero);
   yield put(setLoading(false));
}
// imghp?hl=EN
