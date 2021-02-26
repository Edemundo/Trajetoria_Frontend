import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
}

border-style, :-ms-input-placeholder, button {
  font: 16px Roboto, sans-serif;
}
`;
