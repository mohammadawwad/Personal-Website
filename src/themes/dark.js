

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default {

  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
    sectionText: "rgba(255, 255, 255, 0.5)",
    sectionSubText: "rgba(255, 255, 255, 0.75)",
    icons: "rgba(255, 255, 255, 0.5)",
    blackAndWhite: "rgba(255, 255, 255, 0.5)",
    sectionTitle: "rgba(255, 255, 255, 0.66)",
    header: "rgba(255, 255, 255, 0.75)",
    headerHover: "#fff",
    linkTitle: "rgba(255, 255, 255, 0.4)",
    cardInfo: "#e4e6e7",
    cardColor: "#0F1624",
    navBar: "#0F1624",

  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}

