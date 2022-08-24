import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './favoritesSlice/favoritesSlice';

export default configureStore({
  reducer: { favorite: favoritesSlice },
});
