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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExperienceContainer\": function() { return /* binding */ ExperienceContainer; },\n/* harmony export */   \"VerticalTimeline\": function() { return /* binding */ VerticalTimeline; },\n/* harmony export */   \"Dot\": function() { return /* binding */ Dot; },\n/* harmony export */   \"ExperienceCard\": function() { return /* binding */ ExperienceCard; },\n/* harmony export */   \"HeaderThree\": function() { return /* binding */ HeaderThree; },\n/* harmony export */   \"CompanyLogo\": function() { return /* binding */ CompanyLogo; },\n/* harmony export */   \"CompanyName\": function() { return /* binding */ CompanyName; },\n/* harmony export */   \"DateRange\": function() { return /* binding */ DateRange; },\n/* harmony export */   \"CardInfo\": function() { return /* binding */ CardInfo; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar ExperienceContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__ExperienceContainer\",\n  componentId: \"gifyr6-0\"\n})([\"display:flex;flex-direction:column;align-items:flex-start;justify-content:center;position:relative;width:100%;padding:50px 0;\"]);\nvar VerticalTimeline = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__VerticalTimeline\",\n  componentId: \"gifyr6-1\"\n})([\"display:flex;flex-direction:column;position:absolute;left:20%;width:2px;height:90%;background-color:#9cc9e3;padding:50px 0;margin:50px 0;\"]);\nvar Dot = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__Dot\",\n  componentId: \"gifyr6-2\"\n})([\"width:12px;height:12px;background-color:\", \";border:2px solid #9cc9e3;border-radius:50%;position:absolute;left:-27px;top:50%;transform:translateY(-50%);transition:background-color 0.3s ease;\"], function (_ref) {\n  var active = _ref.active;\n  return active ? '#9cc9e3' : 'transparent';\n});\nvar ExperienceCard = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__ExperienceCard\",\n  componentId: \"gifyr6-3\"\n})([\"position:relative;left:22%;width:500px;margin:20px 0;padding:30px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);border-radius:10px;background-color:#0f1624;text-align:left;transition:transform 0.3s ease-in-out;&:hover{transform:scale(1.05);}&:hover \", \"{background-color:\", \";&::before{content:'';display:\", \";width:10px;height:10px;background-color:#9cc9e3;border-radius:50%;position:absolute;top:1px;left:1px;}}\"], Dot, function (_ref2) {\n  var active = _ref2.active;\n  return active ? '#9cc9e3' : 'transparent';\n}, function (_ref3) {\n  var active = _ref3.active;\n  return active ? 'none' : 'block';\n});\nvar HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3.withConfig({\n  displayName: \"WorkExperienceStyles__HeaderThree\",\n  componentId: \"gifyr6-4\"\n})([\"font-weight:600;letter-spacing:2px;color:#9cc9e3;font-size:2rem;\"]);\nvar CompanyLogo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"WorkExperienceStyles__CompanyLogo\",\n  componentId: \"gifyr6-5\"\n})([\"max-width:80px;max-height:50px;margin-bottom:10px;position:absolute;right:10px;top:20px;\"]);\nvar CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h4.withConfig({\n  displayName: \"WorkExperienceStyles__CompanyName\",\n  componentId: \"gifyr6-6\"\n})([\"color:#8A2BE2;font-size:1.6rem;\"]);\nvar DateRange = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"WorkExperienceStyles__DateRange\",\n  componentId: \"gifyr6-7\"\n})([\"color:#888;font-size:1.4rem;\"]);\nvar CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"WorkExperienceStyles__CardInfo\",\n  componentId: \"gifyr6-8\"\n})([\"font-size:1.2rem;color:#e4e6e7;line-height:1.5;margin-top:10px;\"]);\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL1dvcmtFeHBlcmllbmNlU3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLG1CQUFtQixHQUFHRCx3RUFBSDtBQUFBO0FBQUE7QUFBQSxxSUFBekI7QUFVQSxJQUFNRyxnQkFBZ0IsR0FBR0gsd0VBQUg7QUFBQTtBQUFBO0FBQUEsaUpBQXRCO0FBWUEsSUFBTUksR0FBRyxHQUFHSix3RUFBSDtBQUFBO0FBQUE7QUFBQSx1TUFHTTtBQUFBLE1BQUdLLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdBQUcsU0FBSCxHQUFlLGFBQXRDO0FBQUEsQ0FITixDQUFUO0FBYUEsSUFBTUMsY0FBYyxHQUFHTix3RUFBSDtBQUFBO0FBQUE7QUFBQSxtYUFnQmZJLEdBaEJlLEVBaUJIO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyxTQUFILEdBQWUsYUFBdEM7QUFBQSxDQWpCRyxFQW9CVjtBQUFBLE1BQUdBLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BQW5DO0FBQUEsQ0FwQlUsQ0FBcEI7QUFnQ0EsSUFBTUUsV0FBVyxHQUFHUCx1RUFBSDtBQUFBO0FBQUE7QUFBQSx3RUFBakI7QUFPQSxJQUFNUyxXQUFXLEdBQUdULHdFQUFIO0FBQUE7QUFBQTtBQUFBLGdHQUFqQjtBQVNBLElBQU1XLFdBQVcsR0FBR1gsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUNBQWpCO0FBS0EsSUFBTWEsU0FBUyxHQUFHYixzRUFBSDtBQUFBO0FBQUE7QUFBQSxvQ0FBZjtBQUtBLElBQU1lLFFBQVEsR0FBR2Ysc0VBQUg7QUFBQTtBQUFBO0FBQUEsdUVBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZS9Xb3JrRXhwZXJpZW5jZVN0eWxlcy5qcz82MDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4cGVyaWVuY2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZlcnRpY2FsVGltZWxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjAlOyAvKiBBZGp1c3RlZCBmb3IgY2VudGVyIGFsaWdubWVudCB3aXRoIGRvdHMgKi9cclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2M5ZTM7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIG1hcmdpbjogNTBweCAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERvdCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmUgPyAnIzljYzllMycgOiAndHJhbnNwYXJlbnQnKX07XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzljYzllMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0yN3B4OyAgLyogQ2VudGVyZWQgb24gdGhlIGxpbmUgKi9cclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7IC8qIENoYW5nZWQgdG8gb25seSBhZmZlY3QgdGhlIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHBlcmllbmNlQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDIyJTsgLyogQWRqdXN0ZWQgZm9yIG5ldyBjYXJkIHdpZHRoICovXHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoODAsIDc4LCA3OCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MjQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAke0RvdH0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZSA/ICcjOWNjOWUzJyA6ICd0cmFuc3BhcmVudCcpfTtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlID8gJ25vbmUnIDogJ2Jsb2NrJyl9O1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNjOWUzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxcHg7IC8qIENlbnRlciB0aGUgc21hbGxlciBkb3QgKi9cclxuICAgICAgbGVmdDogMXB4OyAvKiBDZW50ZXIgdGhlIHNtYWxsZXIgZG90ICovXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzljYzllMztcclxuICBmb250LXNpemU6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGFueUxvZ28gPSBzdHlsZWQuaW1nYFxyXG4gIG1heC13aWR0aDogODBweDtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMjBweDsgICAvKiBBZGp1c3RlZCBwb3NpdGlvbiB0byBhbGlnbiB3aXRoIHRleHQgKi9cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wYW55TmFtZSA9IHN0eWxlZC5oNGBcclxuICBjb2xvcjogIzhBMkJFMjsgIC8qIFB1cnBsZSBjb2xvciBmb3IgdGhlIGNvbXBhbnkgbmFtZSAqL1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGVSYW5nZSA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICNlNGU2ZTc7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiRXhwZXJpZW5jZUNvbnRhaW5lciIsImRpdiIsIlZlcnRpY2FsVGltZWxpbmUiLCJEb3QiLCJhY3RpdmUiLCJFeHBlcmllbmNlQ2FyZCIsIkhlYWRlclRocmVlIiwiaDMiLCJDb21wYW55TG9nbyIsImltZyIsIkNvbXBhbnlOYW1lIiwiaDQiLCJEYXRlUmFuZ2UiLCJwIiwiQ2FyZEluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Experience/WorkExperienceStyles.js\n");

/***/ })

});