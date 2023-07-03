// Core
import axios from 'axios';

function createData(heroName) {
   return JSON.stringify({
      q: `${heroName}`,
   });
}
function createDataGoogle(heroName) {
   return JSON.stringify({
      q: `${heroName}`,
      tbm: 'isch',
      hl: 'EN',
   });
}

const googleInstance = axios.create({
   // method: 'post',
   baseURL: 'https://google.serper.dev/search',
   headers: {
      'X-API-KEY': '72f6cecb1d1000af430c97372113841b16448698',
      'Content-Type': 'application/json',
   },
   // data: data,
});

const googleSearch = axios.create({
   baseURL: `https://www.google.com/imghp`,
   headers: {
      'Content-Type': 'application/json',
   },
});

export const api = Object.freeze({
   getPicture(heroName) {
      const heroPicture = createData(heroName);
      return googleInstance.post('', heroPicture);
   },
   getPictureGoogle(heroName) {
      const heroPictureGoogle = createDataGoogle(heroName);
      return googleSearch.post('', heroPictureGoogle);
   },
});
