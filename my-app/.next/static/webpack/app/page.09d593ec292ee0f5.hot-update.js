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

/***/ "(app-pages-browser)/./app/components/profile.jsx":
/*!************************************!*\
  !*** ./app/components/profile.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    var _props_currDisplayUser, _props_currDisplayUser1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-orange-400 w-auto p-2 m-1 max-h-12 rounded-full flex items-center gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                \"max-he\": true,\n                src: props === null || props === void 0 ? void 0 : (_props_currDisplayUser = props.currDisplayUser) === null || _props_currDisplayUser === void 0 ? void 0 : _props_currDisplayUser.pic,\n                width: 50,\n                height: 50,\n                alt: \"Profile Picture\",\n                className: \"rounded-full\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/profile.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: props === null || props === void 0 ? void 0 : (_props_currDisplayUser1 = props.currDisplayUser) === null || _props_currDisplayUser1 === void 0 ? void 0 : _props_currDisplayUser1.name\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/profile.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            console.log(props === null || props === void 0 ? void 0 : props.currDisplayUser)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/profile.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQjtBQUNLO0FBQy9CLDZCQUFlLG9DQUFTRSxLQUFLO1FBR0FBLHdCQUNaQTtJQUhiLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUlDLFFBQU07Z0JBQUNDLEdBQUcsRUFBRUwsa0JBQUFBLDZCQUFBQSx5QkFBQUEsTUFBT00sZUFBZSxjQUF0Qk4sNkNBQUFBLHVCQUF3Qk8sR0FBRztnQkFBR0MsT0FBTztnQkFBSUMsUUFBUTtnQkFBS0MsS0FBSTtnQkFBa0JSLFdBQVU7Ozs7OzswQkFDdkcsOERBQUNTOzBCQUFJWCxrQkFBQUEsNkJBQUFBLDBCQUFBQSxNQUFPTSxlQUFlLGNBQXRCTiw4Q0FBQUEsd0JBQXdCWSxJQUFJOzs7Ozs7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQ2Qsa0JBQUFBLDRCQUFBQSxNQUFPTSxlQUFlOzs7Ozs7O0FBRy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUuanN4P2I4M2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNDAwIHctYXV0byBwLTIgbS0xIG1heC1oLTEyIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGltZyBtYXgtaGUgc3JjPXtwcm9wcz8uY3VyckRpc3BsYXlVc2VyPy5waWN9ICB3aWR0aD17NTB9IGhlaWdodD17NTB9ICBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIi8+XG4gICAgICAgICAgICA8aDI+e3Byb3BzPy5jdXJyRGlzcGxheVVzZXI/Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcz8uY3VyckRpc3BsYXlVc2VyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsIm1heC1oZSIsInNyYyIsImN1cnJEaXNwbGF5VXNlciIsInBpYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDIiLCJuYW1lIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/profile.jsx\n"));

/***/ })

});