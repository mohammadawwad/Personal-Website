import { ThemeProvider } from 'styled-components';
import {createTheme}  from '@mui/material/styles'

import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";
import GlobalStyles from './globals';
import CustomThemeHook from '../components/Header/CustomThemeHook';


const Theme = ({themeValue, children }) => {

  return(
    <ThemeProvider theme={createTheme(darkTheme)}  /*theme={themeValue ? createTheme(darkTheme) : createTheme(lightTheme)} */ >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
};


export default Theme;