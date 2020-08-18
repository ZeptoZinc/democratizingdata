/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

import { container } from '../cssutils/container';

import { Description } from './Description';
import { DataSelection } from '../dataselection/DataSelection';

const bodyStyle = css({ marginLeft: 'auto', marginRight: 'auto' }, container);
export const Body: React.SFC = () => (
  <div css={bodyStyle}>
    <Description />
    <DataSelection />
  </div>
);
