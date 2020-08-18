/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

const descriptionStyle = css({ marginBottom: '1rem' });

const paragraphStyle = css({ paddingBottom: '0.5rem' });

const linkStyle = css({
  color: '#00B4D8',
});

const codeStyle = css({
  fontFamily: "'IBM Plex Mono', monospace",
  backgroundColor: '#333333',
  paddingLeft: '0.15rem',
  paddingRight: '0.15rem',
  marginLeft: '0.2rem',
  marginRight: '0.2rem',
  display: 'inline',
  borderRadius: '0.2rem',
});

export const Description: React.SFC = () => (
  <div css={descriptionStyle}>
    <div css={paragraphStyle}>
      We wish to democratize access to US Stock Market data. As stated by the
      one and only Andy Pavlo, it{' '}
      <a href="https://www.cs.cmu.edu/~pavlo/datasets/stocks/" css={linkStyle}>
        "is not trivial to find all this information for free."
      </a>{' '}
      The internet is about making data free and open to the masses. Help us and
      join the cause by adding data on{' '}
      <a href="https://github.com/ZeptoZinc/democratizingdata" css={linkStyle}>
        GitHub
      </a>
      . If you do not wish to use the data selector, you may also go straight to
      GitHub to browse the raw CSVs.
    </div>
    <div css={paragraphStyle}>
      Data takes the form of{' '}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
        rel="stylesheet"
      ></link>
      <div css={codeStyle}>
        &lt;QUOTE TIME BY MINUTE, TICKER, OPEN, HIGH, LOW, CLOSE, VOLUME&gt;
      </div>
      .
    </div>
  </div>
);
