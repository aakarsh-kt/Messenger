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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    props.chats.length > 0 && props.chats.map((cont, index)=>{\n                        const groupName = cont === null || cont === void 0 ? void 0 : cont.groupName;\n                        if (!groupName) {\n                            const receiver = cont.participants.filter((pid)=>pid != userId);\n                            const name = getName(receiver);\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-orange-300\",\n                            onClick: ()=>props.selectContact(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: \"/image4.jpg\",\n                                        width: 50,\n                                        height: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 22\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.msg\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 27\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQUNMO0FBRTFCLDZCQUFlLG9DQUFTRSxLQUFLO0lBQzdCLHdDQUF3QztJQUNwQyxNQUFNQyxTQUFPRCxNQUFNQyxNQUFNO0lBRXpCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBTUQsV0FBVTt3QkFBMkJFLGFBQVk7Ozs7OztrQ0FDeEQsOERBQUNDO3dCQUFPSCxXQUFVO2tDQUFtRDs7Ozs7Ozs7Ozs7OzBCQUd6RSw4REFBQ0k7Z0JBQUdKLFdBQVU7O29CQUNUSyxRQUFRQyxHQUFHLENBQUNULE1BQU1VLEtBQUs7b0JBQ3ZCVixNQUFNVSxLQUFLLENBQUNDLE1BQU0sR0FBQyxLQUFNWCxNQUFNVSxLQUFLLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQzt3QkFDOUMsTUFBTUMsWUFBVUYsaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTO3dCQUMvQixJQUFHLENBQUNBLFdBQVU7NEJBQ1osTUFBTUMsV0FBU0gsS0FBS0ksWUFBWSxDQUFDQyxNQUFNLENBQUNDLENBQUFBLE1BQUtBLE9BQUtsQjs0QkFDbEQsTUFBTW1CLE9BQUtDLFFBQVFMO3dCQUNyQjt3QkFDQSxxQkFBUSw4REFBQ007NEJBQWdCbkIsV0FBVTs0QkFBbUNvQixTQUFTLElBQUl2QixNQUFNd0IsYUFBYSxDQUFDVjtzQ0FDckcsNEVBQUNaO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ0wsa0RBQUtBO3dDQUFFSyxXQUFVO3dDQUFlc0IsS0FBSTt3Q0FBY0MsT0FBTzt3Q0FBSUMsUUFBUTt3Q0FBSUMsS0FBSTs7Ozs7O2tEQUUvRSw4REFBQ0M7d0NBQUcxQixXQUFVO2tEQUFXVSxLQUFLaUIsR0FBRzs7Ozs7Ozs7Ozs7OzJCQUpsQmhCOzs7OztvQkFRbkI7Ozs7Ozs7Ozs7Ozs7QUFPaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci5qc3g/ZGQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9wcyl7XG4vLyAgICBjb25zdCBtb2RBcnJheT1wcm9wcy5jb250YWN0Lm1hcCgpXG4gICAgY29uc3QgdXNlcklkPXByb3BzLnVzZXJJZDtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgdy0xLzQgcC0yIG0tMSBoLWZ1bGwgcm91bmRlZC1tZFwiPlxuICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBwLTEgbS0yIHctMy80XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMiBtLTIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTMwMFwiPkdvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBcIiA+XG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHByb3BzLmNoYXRzKX1cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hhdHMubGVuZ3RoPjAgJiYgIHByb3BzLmNoYXRzLm1hcCgoY29udCxpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwTmFtZT1jb250Py5ncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICBpZighZ3JvdXBOYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjZWl2ZXI9Y29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZD0+cGlkIT11c2VySWQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWU9Z2V0TmFtZShyZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gIDxsaSBrZXk9e2luZGV4fSAgY2xhc3NOYW1lPVwibS0yIHAtMSByb3VuZGVkLW1kIGJnLW9yYW5nZS0zMDBcIiBvbkNsaWNrPXsoKT0+cHJvcHMuc2VsZWN0Q29udGFjdChpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz1cIi9pbWFnZTQuanBnXCIgd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJQcm9maWxlXCIvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGxcIj57Y29udC5tc2d9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDb250YWN0IDEgY2xpY2tlZFwiKX0+Q29udGFjdCAxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCAyPC9saT4gKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJwcm9wcyIsInVzZXJJZCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ1bCIsImNvbnNvbGUiLCJsb2ciLCJjaGF0cyIsImxlbmd0aCIsIm1hcCIsImNvbnQiLCJpbmRleCIsImdyb3VwTmFtZSIsInJlY2VpdmVyIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGlkIiwibmFtZSIsImdldE5hbWUiLCJsaSIsIm9uQ2xpY2siLCJzZWxlY3RDb250YWN0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMyIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});