import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = action.payload;
      state.list.push(newFavorite);
    },
    removeFavorite: (state, action) => {
      const item = action.payload;
      const index = state.list.findIndex(favorite => favorite.id === item.id);

      state.list.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
