import React from 'react';

import { Global, css } from '@emotion/core';

import { normalizeCSS } from './normalizeCSS';

const normalizeStyle = css(normalizeCSS);

export const RootStyling = () => <Global styles={normalizeStyle} />;
