import { createSlice } from '@reduxjs/toolkit';

const thanosGlove = createSlice({
   name: 'thanosGlove',
   initialState: {
      heroes: JSON.parse(localStorage.getItem('hero')) || [],
      loading: false,
   },
   reducers: {
      addHero: (state, action) => {
         const hero = action.payload;
         let heroes = [...state.heroes];
         state.heroes = [hero, ...heroes];
         localStorage.setItem('hero', JSON.stringify(state.heroes));
      },
   },
});

export const { addHero } = thanosGlove.actions;
export const thanosGloveReducer = thanosGlove.reducer;
