"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Experience/WorkExperienceStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Experience/WorkExperienceStyles.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExperienceContainer\": function() { return /* binding */ ExperienceContainer; },\n/* harmony export */   \"Timeline\": function() { return /* binding */ Timeline; },\n/* harmony export */   \"ExperienceCard\": function() { return /* binding */ ExperienceCard; },\n/* harmony export */   \"ArrowButton\": function() { return /* binding */ ArrowButton; },\n/* harmony export */   \"HeaderThree\": function() { return /* binding */ HeaderThree; },\n/* harmony export */   \"CompanyName\": function() { return /* binding */ CompanyName; },\n/* harmony export */   \"DateRange\": function() { return /* binding */ DateRange; },\n/* harmony export */   \"CardInfo\": function() { return /* binding */ CardInfo; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar ExperienceContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__ExperienceContainer\",\n  componentId: \"gifyr6-0\"\n})([\"display:flex;align-items:center;justify-content:space-between;position:relative;width:100%;padding:3rem 2rem;background-color:#0f1624;border-radius:10px;box-shadow:0px 4px 15px rgba(0,0,0,0.2);\"]);\nvar Timeline = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__Timeline\",\n  componentId: \"gifyr6-1\"\n})([\"display:flex;transition:transform 0.5s ease-in-out;transform:\", \";width:100%;\"], function (_ref) {\n  var current = _ref.current;\n  return \"translateX(-\".concat(current * 100, \"%)\");\n});\nvar ExperienceCard = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__ExperienceCard\",\n  componentId: \"gifyr6-2\"\n})([\"min-width:50%;max-width:50%;opacity:\", \";transition:opacity 0.3s ease-in-out;text-align:center;padding:20px;margin:0 10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);border-radius:10px;background-color:\", \";color:#e4e6e7;&:hover{transform:scale(1.05);background-color:#122b42;}\"], function (_ref2) {\n  var active = _ref2.active;\n  return active ? '1' : '0.5';\n}, function (_ref3) {\n  var active = _ref3.active;\n  return active ? '#112240' : '#1a2e47';\n});\nvar ArrowButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"WorkExperienceStyles__ArrowButton\",\n  componentId: \"gifyr6-3\"\n})([\"background-color:#5f9cbf;border:none;font-size:2.5rem;cursor:pointer;z-index:10;color:#ffffff;padding:10px;border-radius:50%;transition:background-color 0.3s ease-in-out;&:hover{background-color:#801414;}\"]);\nvar HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3.withConfig({\n  displayName: \"WorkExperienceStyles__HeaderThree\",\n  componentId: \"gifyr6-4\"\n})([\"font-weight:600;letter-spacing:2px;color:#e4e6e7;font-size:2.5rem;margin-bottom:10px;\"]);\nvar CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h4.withConfig({\n  displayName: \"WorkExperienceStyles__CompanyName\",\n  componentId: \"gifyr6-5\"\n})([\"color:#d0bb57;font-size:1.8rem;margin-bottom:10px;\"]);\nvar DateRange = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"WorkExperienceStyles__DateRange\",\n  componentId: \"gifyr6-6\"\n})([\"color:#a8b2d1;font-size:1.4rem;margin-bottom:10px;\"]);\nvar CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"WorkExperienceStyles__CardInfo\",\n  componentId: \"gifyr6-7\"\n})([\"font-size:1.4rem;color:#ccd6f6;line-height:1.7;margin-bottom:20px;\"]);\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL1dvcmtFeHBlcmllbmNlU3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUMsbUJBQW1CLEdBQUdELHdFQUFIO0FBQUE7QUFBQTtBQUFBLHlNQUF6QjtBQVlBLElBQU1HLFFBQVEsR0FBR0gsd0VBQUg7QUFBQTtBQUFBO0FBQUEsc0ZBR047QUFBQSxNQUFHSSxPQUFILFFBQUdBLE9BQUg7QUFBQSwrQkFBZ0NBLE9BQU8sR0FBRyxHQUExQztBQUFBLENBSE0sQ0FBZDtBQU9BLElBQU1DLGNBQWMsR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNlJBR2Q7QUFBQSxNQUFHTSxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxHQUFHLEdBQUgsR0FBUyxLQUFoQztBQUFBLENBSGMsRUFVTDtBQUFBLE1BQUdBLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdBQUcsU0FBSCxHQUFlLFNBQXRDO0FBQUEsQ0FWSyxDQUFwQjtBQWtCQSxJQUFNQyxXQUFXLEdBQUdQLDJFQUFIO0FBQUE7QUFBQTtBQUFBLG9OQUFqQjtBQWVBLElBQU1TLFdBQVcsR0FBR1QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNkZBQWpCO0FBUUEsSUFBTVcsV0FBVyxHQUFHWCx1RUFBSDtBQUFBO0FBQUE7QUFBQSwwREFBakI7QUFNQSxJQUFNYSxTQUFTLEdBQUdiLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDBEQUFmO0FBTUEsSUFBTWUsUUFBUSxHQUFHZixzRUFBSDtBQUFBO0FBQUE7QUFBQSwwRUFBZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL1dvcmtFeHBlcmllbmNlU3R5bGVzLmpzPzYwNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgRXhwZXJpZW5jZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MjQ7IC8qIERhcmsgYmFja2dyb3VuZCB0byBtYXRjaCBzaXRlIHRoZW1lICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogJHsoeyBjdXJyZW50IH0pID0+IGB0cmFuc2xhdGVYKC0ke2N1cnJlbnQgKiAxMDB9JSlgfTtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHBlcmllbmNlQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLXdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgb3BhY2l0eTogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZSA/ICcxJyA6ICcwLjUnKX07XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlID8gJyMxMTIyNDAnIDogJyMxYTJlNDcnKX07IC8qIEFkanVzdGVkIGJhY2tncm91bmQgY29sb3IgKi9cclxuICBjb2xvcjogI2U0ZTZlNzsgLyogVGV4dCBjb2xvciB0byBtYXRjaCB0aGUgdGhlbWUgKi9cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyYjQyOyAvKiBTbGlnaHRseSBkYXJrZXIgb24gaG92ZXIgKi9cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQXJyb3dCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjljYmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAxNDE0O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICNlNGU2ZTc7IC8qIEhlYWRpbmcgY29sb3IgKi9cclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbXBhbnlOYW1lID0gc3R5bGVkLmg0YFxyXG4gIGNvbG9yOiAjZDBiYjU3O1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0ZVJhbmdlID0gc3R5bGVkLnBgXHJcbiAgY29sb3I6ICNhOGIyZDE7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGNvbG9yOiAjY2NkNmY2O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkV4cGVyaWVuY2VDb250YWluZXIiLCJkaXYiLCJUaW1lbGluZSIsImN1cnJlbnQiLCJFeHBlcmllbmNlQ2FyZCIsImFjdGl2ZSIsIkFycm93QnV0dG9uIiwiYnV0dG9uIiwiSGVhZGVyVGhyZWUiLCJoMyIsIkNvbXBhbnlOYW1lIiwiaDQiLCJEYXRlUmFuZ2UiLCJwIiwiQ2FyZEluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Experience/WorkExperienceStyles.js\n");

/***/ })

});