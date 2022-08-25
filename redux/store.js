import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice/favoritesSlice';
import submitsReducer from './submitsSlice/submitsSlice';

export default configureStore({
  reducer: { favorites: favoritesReducer, submits: submitsReducer },
});
