// Core
import { createAction } from '@reduxjs/toolkit';

const asyncActions = Object.freeze({
   addHeroAsync: createAction('ADD_HERO_ASYNC'),
});

export const { addHeroAsync } = asyncActions;
