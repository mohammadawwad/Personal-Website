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

/***/ "./src/components/Experience/WorkExperience.js":
/*!*****************************************************!*\
  !*** ./src/components/Experience/WorkExperience.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkExperienceStyles */ \"./src/components/Experience/WorkExperienceStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\Mohd-\\\\Documents\\\\GitHub\\\\Personal-Website\\\\src\\\\components\\\\Experience\\\\WorkExperience.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar WorkExperience = function WorkExperience() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      current = _useState[0],\n      setCurrent = _useState[1];\n\n  var handleDotClick = function handleDotClick(index) {\n    setCurrent(index);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    nopadding: true,\n    id: \"work-experience\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {\n      main: true,\n      children: \"Work Experience\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.ExperienceContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.VerticalBar, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.TimelineIndicator, {\n          children: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.Experiences.map(function (exp, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              style: {\n                position: 'relative'\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.IndicatorDot, {\n                active: index === current,\n                onClick: function onClick() {\n                  return handleDotClick(index);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.DateLabel, {\n                children: exp.dateRange\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 17\n              }, _this)]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        children: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.Experiences.map(function (exp, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.ExperienceCard, {\n            active: index === current,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.HeaderThree, {\n              children: exp.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.CompanyName, {\n              children: exp.company\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.DateRange, {\n              children: exp.dateRange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_WorkExperienceStyles__WEBPACK_IMPORTED_MODULE_1__.CardInfo, {\n              children: exp.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(WorkExperience, \"8+O75ArtRNvpQgzeZSk5wKohTHI=\");\n\n_c = WorkExperience;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkExperience);\n\nvar _c;\n\n$RefreshReg$(_c, \"WorkExperience\");\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL1dvcmtFeHBlcmllbmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBOzs7QUFFQSxJQUFNZSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDM0Isa0JBQThCZCwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFBQSxNQUFPZSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDRixJQUFBQSxVQUFVLENBQUNFLEtBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UsOERBQUMsNkRBQUQ7QUFBUyxhQUFTLE1BQWxCO0FBQW1CLE1BQUUsRUFBQyxpQkFBdEI7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFjLFVBQUksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHNFQUFEO0FBQUEsOEJBQ0UsOERBQUMsOERBQUQ7QUFBQSwrQkFDRSw4REFBQyxvRUFBRDtBQUFBLG9CQUNHTCxpRUFBQSxDQUFnQixVQUFDTyxHQUFELEVBQU1GLEtBQU47QUFBQSxnQ0FDZjtBQUFpQixtQkFBSyxFQUFFO0FBQUVHLGdCQUFBQSxRQUFRLEVBQUU7QUFBWixlQUF4QjtBQUFBLHNDQUNFLDhEQUFDLCtEQUFEO0FBQ0Usc0JBQU0sRUFBRUgsS0FBSyxLQUFLSCxPQURwQjtBQUVFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTUUsY0FBYyxDQUFDQyxLQUFELENBQXBCO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBS0UsOERBQUMsNERBQUQ7QUFBQSwwQkFBWUUsR0FBRyxDQUFDRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGO0FBQUEsZUFBVUosS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURlO0FBQUEsV0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBY0U7QUFBQSxrQkFDR0wsaUVBQUEsQ0FBZ0IsVUFBQ08sR0FBRCxFQUFNRixLQUFOO0FBQUEsOEJBQ2YsOERBQUMsaUVBQUQ7QUFBNEIsa0JBQU0sRUFBRUEsS0FBSyxLQUFLSCxPQUE5QztBQUFBLG9DQUNFLDhEQUFDLDhEQUFEO0FBQUEsd0JBQWNLLEdBQUcsQ0FBQ0c7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsd0JBQWNILEdBQUcsQ0FBQ0k7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLDREQUFEO0FBQUEsd0JBQVlKLEdBQUcsQ0FBQ0U7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFLDhEQUFDLDJEQUFEO0FBQUEsd0JBQVdGLEdBQUcsQ0FBQ0s7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUEsYUFBcUJQLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXJDRDs7R0FBTUo7O0tBQUFBO0FBdUNOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2UvV29ya0V4cGVyaWVuY2UuanM/YjFmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgRXhwZXJpZW5jZUNhcmQsXHJcbiAgRXhwZXJpZW5jZUNvbnRhaW5lcixcclxuICBWZXJ0aWNhbEJhcixcclxuICBUaW1lbGluZUluZGljYXRvcixcclxuICBJbmRpY2F0b3JEb3QsXHJcbiAgRGF0ZUxhYmVsLFxyXG4gIEhlYWRlclRocmVlLFxyXG4gIENvbXBhbnlOYW1lLFxyXG4gIERhdGVSYW5nZSxcclxuICBDYXJkSW5mbyxcclxufSBmcm9tICcuL1dvcmtFeHBlcmllbmNlU3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBFeHBlcmllbmNlcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgV29ya0V4cGVyaWVuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvdENsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRDdXJyZW50KGluZGV4KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gbm9wYWRkaW5nIGlkPVwid29yay1leHBlcmllbmNlXCI+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Xb3JrIEV4cGVyaWVuY2U8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgPEV4cGVyaWVuY2VDb250YWluZXI+XHJcbiAgICAgICAgPFZlcnRpY2FsQmFyPlxyXG4gICAgICAgICAgPFRpbWVsaW5lSW5kaWNhdG9yPlxyXG4gICAgICAgICAgICB7RXhwZXJpZW5jZXMubWFwKChleHAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxJbmRpY2F0b3JEb3RcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpbmRleCA9PT0gY3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRG90Q2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxEYXRlTGFiZWw+e2V4cC5kYXRlUmFuZ2V9PC9EYXRlTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UaW1lbGluZUluZGljYXRvcj5cclxuICAgICAgICA8L1ZlcnRpY2FsQmFyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7RXhwZXJpZW5jZXMubWFwKChleHAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxFeHBlcmllbmNlQ2FyZCBrZXk9e2luZGV4fSBhY3RpdmU9e2luZGV4ID09PSBjdXJyZW50fT5cclxuICAgICAgICAgICAgICA8SGVhZGVyVGhyZWU+e2V4cC50aXRsZX08L0hlYWRlclRocmVlPlxyXG4gICAgICAgICAgICAgIDxDb21wYW55TmFtZT57ZXhwLmNvbXBhbnl9PC9Db21wYW55TmFtZT5cclxuICAgICAgICAgICAgICA8RGF0ZVJhbmdlPntleHAuZGF0ZVJhbmdlfTwvRGF0ZVJhbmdlPlxyXG4gICAgICAgICAgICAgIDxDYXJkSW5mbz57ZXhwLmRlc2NyaXB0aW9ufTwvQ2FyZEluZm8+XHJcbiAgICAgICAgICAgIDwvRXhwZXJpZW5jZUNhcmQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9FeHBlcmllbmNlQ29udGFpbmVyPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrRXhwZXJpZW5jZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJFeHBlcmllbmNlQ2FyZCIsIkV4cGVyaWVuY2VDb250YWluZXIiLCJWZXJ0aWNhbEJhciIsIlRpbWVsaW5lSW5kaWNhdG9yIiwiSW5kaWNhdG9yRG90IiwiRGF0ZUxhYmVsIiwiSGVhZGVyVGhyZWUiLCJDb21wYW55TmFtZSIsIkRhdGVSYW5nZSIsIkNhcmRJbmZvIiwiU2VjdGlvbiIsIlNlY3Rpb25UaXRsZSIsIkV4cGVyaWVuY2VzIiwiV29ya0V4cGVyaWVuY2UiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImhhbmRsZURvdENsaWNrIiwiaW5kZXgiLCJtYXAiLCJleHAiLCJwb3NpdGlvbiIsImRhdGVSYW5nZSIsInRpdGxlIiwiY29tcGFueSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Experience/WorkExperience.js\n");

/***/ })

});