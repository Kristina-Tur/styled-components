import {createGlobalStyle} from 'styled-components';
import {myTheme} from './Theme.styled';

export const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${myTheme.color.grey.light};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`