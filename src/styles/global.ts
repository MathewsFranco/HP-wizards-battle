import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  *:focus {
    outline: 0
  }


  html, body, #root {
    width: 100%;
    background:  ${({ theme }) => theme.colors.background};
    color:  ${({ theme }) => theme.colors.text};
  }


  body { -webkit-font-smoothing: antialiased; }

  a { text-decoration: none; }
  ul { list-style: none; }

`;
