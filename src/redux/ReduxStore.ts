import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './ReduxReducer';

export const store = configureStore({
  reducer: rootReducer,
});
