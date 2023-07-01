// Core
import axios from 'axios';

function createData(heroName) {
   return JSON.stringify({
      q: `${heroName}`,
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

export const api = Object.freeze({
   getPicture(heroName) {
      const heroPicture = createData(heroName);
      return googleInstance.post('', heroPicture);
   },
});
