import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #d0d0d0;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, button {
    font-family: 'Recursive', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
