import { combineReducers } from '@reduxjs/toolkit';

import { dataSelectionReducer } from '../dataselection/Slice';

export const rootReducer = combineReducers({
  dataSelection: dataSelectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
