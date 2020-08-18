/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

import { container } from '../cssutils/container';

const headerStyle = css(
  {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem',
    paddingTop: '1rem',
    paddingBottom: '0.25rem',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #FFFFFF',
  },
  container,
);

const titleStyle = css({
  fontSize: '1.5rem',
  fontFamily: 'Alata, sans-serif',
});

const yearStyle = css({
  fontFamily: 'Alata, sans-serif',
});

export const Header: React.SFC = () => (
  <header css={headerStyle}>
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
        rel="stylesheet"
      />
      <div css={titleStyle}>Democratizing Data</div>
    </div>
    <div css={yearStyle}>2020-</div>
  </header>
);
