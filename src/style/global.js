import React from 'react';
import { createGlobalStyle } from 'styled-components';

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

label{
  font-family: sans-serif;
}

`;

export default GlobalStyle;
