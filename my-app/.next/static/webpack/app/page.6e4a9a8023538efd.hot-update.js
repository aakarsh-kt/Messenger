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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: console.log(props.refinedChat)\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQUNMO0FBRTFCLDZCQUFlLG9DQUFTRSxLQUFLO0lBQzdCLHdDQUF3QztJQUVwQyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1ELFdBQVU7d0JBQTJCRSxhQUFZOzs7Ozs7a0NBQ3hELDhEQUFDQzt3QkFBT0gsV0FBVTtrQ0FBbUQ7Ozs7Ozs7Ozs7OzswQkFHekUsOERBQUNJO2dCQUFHSixXQUFVOzBCQUNUSyxRQUFRQyxHQUFHLENBQUNSLE1BQU1TLFdBQVc7Ozs7Ozs7Ozs7OztBQWtCOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci5qc3g/ZGQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9wcyl7XG4vLyAgICBjb25zdCBtb2RBcnJheT1wcm9wcy5jb250YWN0Lm1hcCgpXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHctMS80IHAtMiBtLTEgaC1mdWxsIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgcC0xIG0tMiB3LTMvNFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBwLTIgbS0yIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS0zMDBcIj5HbzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgXCIgPlxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5yZWZpbmVkQ2hhdCl9XG4gICAgICAgICAgICAgICAgey8qIHtwcm9wcy5yZWZpbmVkQ2hhdFtdMC5tYXAoKGNvbnQsaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHJldHVybiAgPGxpIGtleT17aW5kZXh9ICBjbGFzc05hbWU9XCJtLTIgcC0xIHJvdW5kZWQtbWQgYmctb3JhbmdlLTMwMFwiIG9uQ2xpY2s9eygpPT5wcm9wcy5zZWxlY3RDb250YWN0KGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgc3JjPVwiL2ltYWdlNC5qcGdcIiB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD1cIlByb2ZpbGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bFwiPntjb250Lm1zZ308L2gzPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgfSl9ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDb250YWN0IDEgY2xpY2tlZFwiKX0+Q29udGFjdCAxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCAyPC9saT4gKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ1bCIsImNvbnNvbGUiLCJsb2ciLCJyZWZpbmVkQ2hhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});