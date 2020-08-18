/** @jsx jsx */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { jsx, css } from '@emotion/core';

import { RootState } from '../redux/ReduxReducer';

import { updateTickers } from './Slice';

import { labelCSS } from './LabelCSS';
import { textInputCSS } from './TextInputCSS';

const tickerSelectionCSS = css({
  alignSelf: 'stretch',
});

export const TickerSelection: React.SFC = () => {
  const dispatch = useDispatch();
  const { tickers } = useSelector((state: RootState) => state.dataSelection);

  return (
    <div css={tickerSelectionCSS}>
      <label css={labelCSS}>
        Tickers
        <input
          css={textInputCSS}
          type="text"
          placeholder="SPY,AAPL,FB,MSFT"
          value={tickers}
          onChange={(event) => {
            event.preventDefault();
            dispatch(updateTickers(event.target.value));
          }}
        />
      </label>
    </div>
  );
};
