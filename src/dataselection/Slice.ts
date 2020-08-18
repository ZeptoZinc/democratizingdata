import { createSlice } from '@reduxjs/toolkit';

import { processData } from './ProcessData';

export const dataSelectionSlice = createSlice({
  name: 'dataSelection',
  initialState: {
    tickers: '',
    startDate: '',
    endDate: '',
    errorHtml: '',
    isLoading: false,
  },
  reducers: {
    updateTickers(state, action) {
      state.tickers = action.payload;
    },
    updateStartDate(state, action) {
      state.startDate = action.payload;
    },
    updateEndDate(state, action) {
      state.endDate = action.payload;
    },
    updateErrorHtml(state, action) {
      state.errorHtml = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(processData.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(processData.fulfilled, (state, _) => {
      state.isLoading = false;
    });
    builder.addCase(processData.rejected, (state, _) => {
      state.isLoading = false;
    });
  },
});

const { actions, reducer } = dataSelectionSlice;
export { reducer as dataSelectionReducer };

export const {
  updateTickers,
  updateStartDate,
  updateEndDate,
  updateErrorHtml,
} = actions;

export { processData };
