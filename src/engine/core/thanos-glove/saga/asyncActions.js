// Core
import { createAction } from '@reduxjs/toolkit';

const asyncActions = Object.freeze({
   addHeroAsync: createAction('ADD_HERO_ASYNC'),
   killHalfHeroes: createAction('KILL_HALF_HEROES'),
});

export const { addHeroAsync, killHalfHeroes } = asyncActions;
