import { createGlobalStyle } from 'styled-components';
import { device, colors, font } from './variaveis';

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
  font-family: 'Montserrat', sans-serif;
  color: ${colors.secondary}

}

button{
  background-color: transparent;
  border: 0;
  border-right: 0;
}

`;

export default GlobalStyle;
