import { css } from '@emotion/core';

import { breakpointMQ } from './breakpoints';

export const container = css({
  width: '100%',
  [breakpointMQ[0]]: {
    maxWidth: '640px',
  },
  [breakpointMQ[1]]: {
    maxWidth: '768px',
  },
  [breakpointMQ[2]]: {
    maxWidth: '1024px',
  },
  [breakpointMQ[3]]: {
    maxWidth: '1280px',
  },
});
