// Core;
import { put } from 'redux-saga/effects';

// Parts
import { killHeroes } from '../../slice';
// Engine;

export function* callKillHalfHeroesWorker(action) {
   let heroes = action.payload;

   function getRandomInt(max) {
      return Math.floor(Math.random() * max);
   }

   const killHalfHeroes = () => {
      let luckyHeroes = [];
      let condition = Math.floor(heroes.length / 2);
      do {
         let random = getRandomInt(heroes.length);
         let luckyHero = heroes[random];
         luckyHeroes.includes(luckyHero) ? null : luckyHeroes.push(luckyHero);
      } while (luckyHeroes.length < condition);
      heroes = luckyHeroes;
   };
   killHalfHeroes();

   yield put(killHeroes(heroes));
}
