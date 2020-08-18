/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

import { Header } from './Header';
import { Body } from './Body';

const appStyle = css({
  backgroundColor: '#111111',
  minHeight: '100vh',
  color: '#FFFFFF',
});

export const App: React.SFC = () => (
  <div css={appStyle}>
    <Header />
    <Body />
  </div>
);
