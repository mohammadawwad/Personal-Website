import { ThemeProvider } from 'styled-components';
import {createTheme}  from '@mui/material/styles'

import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";
import GlobalStyles from './globals';
import CustomThemeHook from '../components/Header/CustomThemeHook';


const Theme = ({ children }) => {
  //cutom hook for changinh theme state
  const {value, setValue} = CustomThemeHook();

  return(
    <ThemeProvider theme={value ? createTheme(darkTheme) : createTheme(lightTheme)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
};


export default Theme;