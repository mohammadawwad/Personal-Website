import { ThemeProvider } from 'styled-components';
import {createTheme}  from '@mui/material/styles'

import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";
import GlobalStyles from './globals';
import CustomThemeHook from '../components/Header/CustomThemeHook';


const Theme = ({themeValue, children }) => {
  //cutom hook for changinh theme state
  console.log("Theme: " + themeValue);

  return(
    <ThemeProvider theme={themeValue ? createTheme(darkTheme) : createTheme(lightTheme)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
};


export default Theme;