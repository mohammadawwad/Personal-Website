import { ThemeProvider } from 'styled-components';

import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={value ? darkTheme : lightTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);


export default Theme;