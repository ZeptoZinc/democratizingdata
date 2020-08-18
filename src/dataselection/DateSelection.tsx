/** @jsx jsx */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { css, jsx } from '@emotion/core';

import { labelCSS } from './LabelCSS';
import { textInputCSS } from './TextInputCSS';
import { RootState } from '../redux/ReduxReducer';
import { updateStartDate, updateEndDate } from './Slice';

const dateSelectionCSS = css({
  alignSelf: 'stretch',
  display: 'flex',
  flexDirection: 'row',
});

const dateCSS = css({ flexBasis: '50%', padding: '20px 0px' });

export const DateSelection: React.SFC = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.dataSelection,
  );

  return (
    <div css={dateSelectionCSS}>
      <div css={dateCSS}>
        <label css={labelCSS}>
          Start Date
          <input
            type="text"
            css={textInputCSS}
            placeholder="YYYY-MM-DD"
            value={startDate}
            onChange={(event) => {
              event.preventDefault();
              dispatch(updateStartDate(event.target.value));
            }}
          />
        </label>
      </div>
      <div css={dateCSS}>
        <label css={labelCSS}>
          End Date
          <input
            type="text"
            css={textInputCSS}
            placeholder="YYYY-MM-DD"
            value={endDate}
            onChange={(event) => {
              event.preventDefault();
              dispatch(updateEndDate(event.target.value));
            }}
          />
        </label>
      </div>
    </div>
  );
};
