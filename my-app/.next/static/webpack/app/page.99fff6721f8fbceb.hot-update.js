"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/sidebar.jsx":
/*!************************************!*\
  !*** ./app/components/sidebar.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    props.chats.length > 0 && props.chats.map((cont, index)=>{\n                        var _props_cont;\n                        const groupName = (_props_cont = props.cont) === null || _props_cont === void 0 ? void 0 : _props_cont.groupName;\n                        if (!groupName) {\n                            const receiver = props.cont.participants.filter(p);\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-orange-300\",\n                            onClick: ()=>props.selectContact(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: \"/image4.jpg\",\n                                        width: 50,\n                                        height: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 22\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.msg\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 27\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQUNMO0FBRTFCLDZCQUFlLG9DQUFTRSxLQUFLO0lBQzdCLHdDQUF3QztJQUVwQyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1ELFdBQVU7d0JBQTJCRSxhQUFZOzs7Ozs7a0NBQ3hELDhEQUFDQzt3QkFBT0gsV0FBVTtrQ0FBbUQ7Ozs7Ozs7Ozs7OzswQkFHekUsOERBQUNJO2dCQUFHSixXQUFVOztvQkFDVEssUUFBUUMsR0FBRyxDQUFDUixNQUFNUyxLQUFLO29CQUN2QlQsTUFBTVMsS0FBSyxDQUFDQyxNQUFNLEdBQUMsS0FBTVYsTUFBTVMsS0FBSyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsTUFBS0M7NEJBQzlCYjt3QkFBaEIsTUFBTWMsYUFBVWQsY0FBQUEsTUFBTVksSUFBSSxjQUFWWixrQ0FBQUEsWUFBWWMsU0FBUzt3QkFDckMsSUFBRyxDQUFDQSxXQUFVOzRCQUNaLE1BQU1DLFdBQVNmLE1BQU1ZLElBQUksQ0FBQ0ksWUFBWSxDQUFDQyxNQUFNLENBQUVDO3dCQUNqRDt3QkFDQSxxQkFBUSw4REFBQ0M7NEJBQWdCakIsV0FBVTs0QkFBbUNrQixTQUFTLElBQUlwQixNQUFNcUIsYUFBYSxDQUFDUjtzQ0FDckcsNEVBQUNaO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ0osa0RBQUtBO3dDQUFFSSxXQUFVO3dDQUFlb0IsS0FBSTt3Q0FBY0MsT0FBTzt3Q0FBSUMsUUFBUTt3Q0FBSUMsS0FBSTs7Ozs7O2tEQUUvRSw4REFBQ0M7d0NBQUd4QixXQUFVO2tEQUFXVSxLQUFLZSxHQUFHOzs7Ozs7Ozs7Ozs7MkJBSmxCZDs7Ozs7b0JBUW5COzs7Ozs7Ozs7Ozs7O0FBT2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4P2RkNGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvcHMpe1xuLy8gICAgY29uc3QgbW9kQXJyYXk9cHJvcHMuY29udGFjdC5tYXAoKVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCB3LTEvNCBwLTIgbS0xIGgtZnVsbCByb3VuZGVkLW1kXCI+XG4gICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHAtMSBtLTIgdy0zLzRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC0yIG0tMiByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtMzAwXCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIFwiID5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMuY2hhdHMpfVxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGF0cy5sZW5ndGg+MCAmJiAgcHJvcHMuY2hhdHMubWFwKChjb250LGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBOYW1lPXByb3BzLmNvbnQ/Lmdyb3VwTmFtZTtcbiAgICAgICAgICAgICAgICAgIGlmKCFncm91cE5hbWUpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlcj1wcm9wcy5jb250LnBhcnRpY2lwYW50cy5maWx0ZXIoKHApKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICA8bGkga2V5PXtpbmRleH0gIGNsYXNzTmFtZT1cIm0tMiBwLTEgcm91bmRlZC1tZCBiZy1vcmFuZ2UtMzAwXCIgb25DbGljaz17KCk9PnByb3BzLnNlbGVjdENvbnRhY3QoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgPEltYWdlICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBzcmM9XCIvaW1hZ2U0LmpwZ1wiIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PVwiUHJvZmlsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e2NvbnQubXNnfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7LyogPGxpIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiQ29udGFjdCAxIGNsaWNrZWRcIil9PkNvbnRhY3QgMTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkNvbnRhY3QgMjwvbGk+ICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidWwiLCJjb25zb2xlIiwibG9nIiwiY2hhdHMiLCJsZW5ndGgiLCJtYXAiLCJjb250IiwiaW5kZXgiLCJncm91cE5hbWUiLCJyZWNlaXZlciIsInBhcnRpY2lwYW50cyIsImZpbHRlciIsInAiLCJsaSIsIm9uQ2xpY2siLCJzZWxlY3RDb250YWN0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMyIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});