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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dot\": function() { return /* binding */ Dot; },\n/* harmony export */   \"ExperienceContainer\": function() { return /* binding */ ExperienceContainer; },\n/* harmony export */   \"TimelineWrapper\": function() { return /* binding */ TimelineWrapper; },\n/* harmony export */   \"VerticalTimeline\": function() { return /* binding */ VerticalTimeline; },\n/* harmony export */   \"TimelineItem\": function() { return /* binding */ TimelineItem; },\n/* harmony export */   \"ExperienceCard\": function() { return /* binding */ ExperienceCard; },\n/* harmony export */   \"HeaderThree\": function() { return /* binding */ HeaderThree; },\n/* harmony export */   \"CompanyLogo\": function() { return /* binding */ CompanyLogo; },\n/* harmony export */   \"CompanyName\": function() { return /* binding */ CompanyName; },\n/* harmony export */   \"DateRange\": function() { return /* binding */ DateRange; },\n/* harmony export */   \"CardInfo\": function() { return /* binding */ CardInfo; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n // Define Dot component first\n\nvar Dot = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__Dot\",\n  componentId: \"gifyr6-0\"\n})([\"width:12px;height:12px;background-color:\", \";border:2px solid #9cc9e3;border-radius:50%;position:relative;left:20.1%;transform:translateX(-50%);transition:background-color 0.3s ease;&::after{content:'';display:\", \";width:6px;height:6px;background-color:#8A2BE2;border-radius:50%;position:absolute;top:53.5%;left:53.5%;transform:translate(-50%,-50%);}\"], function (_ref) {\n  var active = _ref.active;\n  return active ? '#9cc9e3' : '#0f1624';\n}, function (_ref2) {\n  var active = _ref2.active;\n  return active ? 'none' : 'block';\n}); // Define other components that use Dot\n\nvar ExperienceContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__ExperienceContainer\",\n  componentId: \"gifyr6-1\"\n})([\"display:flex;flex-direction:column;align-items:flex-start;justify-content:center;position:relative;width:100%;padding:50px 0;\"]);\nvar TimelineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__TimelineWrapper\",\n  componentId: \"gifyr6-2\"\n})([\"position:relative;width:100%;display:flex;flex-direction:column;\"]);\nvar VerticalTimeline = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__VerticalTimeline\",\n  componentId: \"gifyr6-3\"\n})([\"position:absolute;left:20%;width:2px;height:100%;background-color:#9cc9e3;\"]);\nvar TimelineItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__TimelineItem\",\n  componentId: \"gifyr6-4\"\n})([\"position:relative;display:flex;align-items:center;margin-bottom:50px;\"]);\nvar ExperienceCard = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"WorkExperienceStyles__ExperienceCard\",\n  componentId: \"gifyr6-5\"\n})([\"position:relative;width:500px;margin-left:40px;padding:30px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);border-radius:10px;background-color:#0f1624;text-align:left;transition:transform 0.3s ease-in-out;left:23%;&:hover{transform:scale(1.05);}\"]);\nvar HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3.withConfig({\n  displayName: \"WorkExperienceStyles__HeaderThree\",\n  componentId: \"gifyr6-6\"\n})([\"font-weight:600;letter-spacing:2px;color:#9cc9e3;font-size:2rem;\"]);\nvar CompanyLogo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"WorkExperienceStyles__CompanyLogo\",\n  componentId: \"gifyr6-7\"\n})([\"max-width:80px;max-height:50px;margin-bottom:10px;position:absolute;right:10px;top:20px;\"]);\nvar CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h4.withConfig({\n  displayName: \"WorkExperienceStyles__CompanyName\",\n  componentId: \"gifyr6-8\"\n})([\"color:#8A2BE2;font-size:1.6rem;\"]);\nvar DateRange = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"WorkExperienceStyles__DateRange\",\n  componentId: \"gifyr6-9\"\n})([\"color:#888;font-size:1.4rem;\"]);\nvar CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"WorkExperienceStyles__CardInfo\",\n  componentId: \"gifyr6-10\"\n})([\"font-size:1.2rem;color:#e4e6e7;line-height:1.5;margin-top:10px;\"]);\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL1dvcmtFeHBlcmllbmNlU3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNPLElBQU1DLEdBQUcsR0FBR0Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsdVdBR007QUFBQSxNQUFHRyxNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxHQUFHLFNBQUgsR0FBZSxTQUF0QztBQUFBLENBSE4sRUFhRDtBQUFBLE1BQUdBLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BQW5DO0FBQUEsQ0FiQyxDQUFULEVBeUJQOztBQUNPLElBQU1DLG1CQUFtQixHQUFHSix3RUFBSDtBQUFBO0FBQUE7QUFBQSxxSUFBekI7QUFVQSxJQUFNSyxlQUFlLEdBQUdMLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHdFQUFyQjtBQU9BLElBQU1NLGdCQUFnQixHQUFHTix3RUFBSDtBQUFBO0FBQUE7QUFBQSxrRkFBdEI7QUFRQSxJQUFNTyxZQUFZLEdBQUdQLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDZFQUFsQjtBQU9BLElBQU1RLGNBQWMsR0FBR1Isd0VBQUg7QUFBQTtBQUFBO0FBQUEseVBBQXBCO0FBaUJBLElBQU1TLFdBQVcsR0FBR1QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsd0VBQWpCO0FBT0EsSUFBTVcsV0FBVyxHQUFHWCx3RUFBSDtBQUFBO0FBQUE7QUFBQSxnR0FBakI7QUFTQSxJQUFNYSxXQUFXLEdBQUdiLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVDQUFqQjtBQUtBLElBQU1lLFNBQVMsR0FBR2Ysc0VBQUg7QUFBQTtBQUFBO0FBQUEsb0NBQWY7QUFLQSxJQUFNaUIsUUFBUSxHQUFHakIsc0VBQUg7QUFBQTtBQUFBO0FBQUEsdUVBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZS9Xb3JrRXhwZXJpZW5jZVN0eWxlcy5qcz82MDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuLy8gRGVmaW5lIERvdCBjb21wb25lbnQgZmlyc3RcclxuZXhwb3J0IGNvbnN0IERvdCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmUgPyAnIzljYzllMycgOiAnIzBmMTYyNCcpfTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGRvdCAqL1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5Y2M5ZTM7IC8qIEJsdWUgcmluZyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIENoYW5nZSBmcm9tIGFic29sdXRlIHRvIHJlbGF0aXZlIGZvciBwcm9wZXIgY2VudGVyaW5nIG9mIHRoZSBpbm5lciBjaXJjbGUgKi9cclxuICBsZWZ0OiAyMC4xJTsgLyogQ2VudGVyZWQgb24gdGhlIGxpbmUgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZSA/ICdub25lJyA6ICdibG9jaycpfTsgLyogSGlkZSB0aGUgaW5uZXIgcHVycGxlIGNpcmNsZSBmb3IgdGhlIGxhdGVzdCAqL1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhBMkJFMjsgLyogUHVycGxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUzLjUlOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xyXG4gICAgbGVmdDogNTMuNSU7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBDZW50ZXIgdGhlIGlubmVyIGNpcmNsZSAqL1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIERlZmluZSBvdGhlciBjb21wb25lbnRzIHRoYXQgdXNlIERvdFxyXG5leHBvcnQgY29uc3QgRXhwZXJpZW5jZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGltZWxpbmVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZlcnRpY2FsVGltZWxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMCU7IC8qIEFkanVzdGVkIGZvciBjZW50ZXIgYWxpZ25tZW50IHdpdGggZG90cyAqL1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2M5ZTM7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGltZWxpbmVJdGVtID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7IC8qIEFkanVzdCBzcGFjaW5nIGJldHdlZW4gaXRlbXMgKi9cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHBlcmllbmNlQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXJnaW4tbGVmdDogNDBweDsgLyogQWRqdXN0IGRpc3RhbmNlIGJldHdlZW4gdGhlIGRvdCBhbmQgdGhlIGNhcmQgKi9cclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNjI0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgbGVmdDogMjMlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzljYzllMztcclxuICBmb250LXNpemU6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGFueUxvZ28gPSBzdHlsZWQuaW1nYFxyXG4gIG1heC13aWR0aDogODBweDtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wYW55TmFtZSA9IHN0eWxlZC5oNGBcclxuICBjb2xvcjogIzhBMkJFMjsgIC8qIFB1cnBsZSBjb2xvciBmb3IgdGhlIGNvbXBhbnkgbmFtZSAqL1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGVSYW5nZSA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICNlNGU2ZTc7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiRG90IiwiZGl2IiwiYWN0aXZlIiwiRXhwZXJpZW5jZUNvbnRhaW5lciIsIlRpbWVsaW5lV3JhcHBlciIsIlZlcnRpY2FsVGltZWxpbmUiLCJUaW1lbGluZUl0ZW0iLCJFeHBlcmllbmNlQ2FyZCIsIkhlYWRlclRocmVlIiwiaDMiLCJDb21wYW55TG9nbyIsImltZyIsIkNvbXBhbnlOYW1lIiwiaDQiLCJEYXRlUmFuZ2UiLCJwIiwiQ2FyZEluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Experience/WorkExperienceStyles.js\n");

/***/ })

});