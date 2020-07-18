import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration: none;
    color: inherit;
    }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0
    }
  body{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
    }
`;

export default GlobalStyle;
