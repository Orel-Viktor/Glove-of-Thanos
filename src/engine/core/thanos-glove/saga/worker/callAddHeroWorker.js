// Core
import { call, put } from 'redux-saga/effects';

// Parts
import { addHero, setLoading } from '../../slice';
//Config
// import { api } from '../../../../config/axios';
async function getImagesList(hero) {
   let response = await fetch(
      `https://pixabay.com/api/?key=38041739-984e774dcd52012e65ce54005&q=${hero}&image_type=illustration&category=comics`,
      {
         method: 'GET',
         // image_type: 'photo',
         // q: `${hero.thanosGlove}`,
      }
   );

   return await response.json();
}
export function* callAddHeroWorker(action) {
   yield put(setLoading(true));
   const hero = action.payload;
   // const response = yield call(api.getPicture, hero.thanosGlove);
   // const data = response.data.organic[0];
   // console.log('dataOrganic', data);

   // console.log('url', heroUrlPicture);
   // console.log('response', response);

   // const responseGoogle = yield call(api.getPictureGoogle, hero.thanosGlove);
   // console.log(responseGoogle);
   // yield fetch(`https://www.google.com/search?q=${hero.thanosGlove}&tbm=isch`)
   //    .then((res) => res.json)
   //    .then((data) => console.log(data));

   const imageList = yield call(getImagesList, hero.thanosGlove);
   // console.log(imageList.hits.find((elem, i) => elem[i] === elem[0]));
   const imageHero = imageList.hits.find((elem, i) => elem[i] === elem[0])
      .webformatURL
      ? imageList.hits.find((elem, i) => elem[i] === elem[0]).webformatURL
      : null;

   console.log(imageHero);

   // const heroUrlPicture = data.hits[0].largeImageURL;
   const dataHero = {
      heroName: hero.thanosGlove,
      heroPicture: imageHero,
   };

   yield put(addHero(dataHero));
   console.log(dataHero);
   yield put(setLoading(false));
}
// imghp?hl=EN
