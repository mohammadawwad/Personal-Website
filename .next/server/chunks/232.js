"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const CustomThemeHook = () => {
  //radio button state
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return {
    value,
    setValue
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomThemeHook);

/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
// EXTERNAL MODULE: external "styled-normalize"
var external_styled_normalize_ = __webpack_require__(535);
;// CONCATENATED MODULE: ./src/themes/dark.js


/* harmony default export */ const dark = ({
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
    navBar: "#0F1624"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
});
;// CONCATENATED MODULE: ./src/themes/light.js
/* harmony default export */ const light = ({
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "#484b6a",
    background1: "rgba(195, 195, 195, 1)",
    accent1: "#484b6a",
    button: "#484b6a",
    background2: "#484b6a",
    sectionText: "rgba(222, 13, 13, 0.5)",
    sectionSubText: "rgba(222, 13, 13, 0.75)",
    icons: "rgb(0, 0, 0)",
    blackAndWhite: "rgba(0, 0, 0, 0)",
    sectionTitle: "rgba(0, 0, 0, 0.66)",
    header: "#484b6a",
    headerHover: "rgba(222, 13, 13, 0.5)",
    linkTitle: "rgba(222, 13, 13, 0.5)",
    cardInfo: "rgba(222, 13, 13, 0.5)",
    linearHeader: "222, 13, 13",
    cardColor: "rgb(250, 250, 250) !important",
    navBar: "#fffff"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
});
;// CONCATENATED MODULE: ./src/styles/globals.js


const GlobalStyles = external_styled_components_.createGlobalStyle`
  ${external_styled_normalize_.normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    transition: 0.4s;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;
/* harmony default export */ const globals = (GlobalStyles);
// EXTERNAL MODULE: ./src/components/Header/CustomThemeHook.js
var CustomThemeHook = __webpack_require__(334);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/styles/theme.js









const Theme = ({
  themeValue,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: themeValue ? (0,styles_.createTheme)(dark) : (0,styles_.createTheme)(light),
    children: [/*#__PURE__*/jsx_runtime_.jsx(globals, {}), children]
  });
};

/* harmony default export */ const theme = (Theme);

/***/ })

};
;