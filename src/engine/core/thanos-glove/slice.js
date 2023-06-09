import { createSlice } from '@reduxjs/toolkit';

const thanosGlove = createSlice({
   name: 'thanosGlove',
   initialState: {
      heroes: JSON.parse(localStorage.getItem('heroes')) || [],
      loading: false,
      aliveHero: JSON.parse(localStorage.getItem('aliveHero')) || [],
   },
   reducers: {
      addHero: (state, action) => {
         state.aliveHero = [];
         localStorage.setItem('aliveHero', JSON.stringify(state.aliveHero));
         let hero = action.payload;
         let heroes = [...state.heroes];
         heroes.includes(hero) ? (hero = hero + `[${heroes.length}]`) : null;

         state.heroes = [hero, ...heroes];
         localStorage.setItem('heroes', JSON.stringify(state.heroes));
      },
      killHeroes: (state, action) => {
         const heroes = action.payload;
         state.heroes = heroes;
         localStorage.setItem('heroes', JSON.stringify(state.heroes));
         if (heroes.length === 1) {
            state.aliveHero = state.heroes;
            localStorage.setItem('aliveHero', JSON.stringify(state.aliveHero));
            state.heroes = [];
            localStorage.setItem('heroes', JSON.stringify(state.heroes));
         }
      },
   },
});

export const { addHero, killHeroes } = thanosGlove.actions;
export const thanosGloveReducer = thanosGlove.reducer;
