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
  background-color: #F5F5F5;
}

body, html {
  height:100%;
  width: 100%;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}
`;
