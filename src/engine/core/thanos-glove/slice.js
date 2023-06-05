import { createSlice } from '@reduxjs/toolkit';

const thanosGlove = createSlice({
   name: 'thanosGlove',
   initialState: {
      heroes: JSON.parse(localStorage.getItem('hero')) || [],
      loading: false,
   },
   reducers: {
      addHero: (state, action) => {
         state.heroes = action.payload;
         localStorage.setItem('hero', JSON.stringify(state.heroes));
      },
   },
});

export const { addHero } = thanosGlove.actions;
export const thanosGloveReducer = thanosGlove.reducer;
