/** @jsx jsx */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { css, jsx } from '@emotion/core';

import { DateSelection } from './DateSelection';
import { TickerSelection } from './TickerSelection';
import { RootState } from '../redux/ReduxReducer';
import { processData } from './Slice';

const dataSelectionStyle = css({
  border: 'solid',
  borderColor: '#FFFFFF',
  borderRadius: '0.25rem',
  borderWidth: '2px',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
});

const downloadButtonStyle = css({
  border: 'solid',
  borderColor: '#FFFFFF',
  borderRadius: '0.25rem',
  borderWidth: '1px',
  padding: '0.25rem 0.5rem',
  backgroundColor: '#023e8a',
  alignSelf: 'flex-end',
  cursor: 'pointer',
});
export const DataSelection: React.SFC = () => {
  const dispatch = useDispatch();
  const { tickers, startDate, endDate } = useSelector(
    (state: RootState) => state.dataSelection,
  );
  return (
    <div css={dataSelectionStyle}>
      <TickerSelection />
      <DateSelection />
      <div
        css={downloadButtonStyle}
        onClick={(event) => {
          event.preventDefault();
          dispatch(processData({ tickers, startDate, endDate }));
        }}
      >
        Download
      </div>
    </div>
  );
};
