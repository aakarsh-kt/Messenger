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

/***/ "(app-pages-browser)/./app/App.jsx":
/*!*********************!*\
  !*** ./app/App.jsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./app/components/navbar.jsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.jsx\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat */ \"(app-pages-browser)/./app/components/chat.jsx\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/../node_modules/react-split/dist/react-split.es.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n// import './globals.css'\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const contact = [\n        {\n            \"name\": \"Giga Don\",\n            \"msg\": \"Peene CHale\"\n        },\n        {\n            \"name\": \"Dimli\",\n            \"msg\": \"Fookne CHale\"\n        },\n        {\n            \"name\": \"Simlim\",\n            \"msg\": \"Tahalne CHale\"\n        }\n    ];\n    const [currChat, setCurrChar] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    function selectContact(index) {\n        setCurrChar(index);\n    // console.log(cont.name);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex flex-col flex-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sizes: [\n                    30,\n                    70\n                ],\n                direction: \"horizontal\",\n                className: \"flex h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        contact: contact,\n                        selectContact: selectContact\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        contact: contact,\n                        currChat: currChat\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN5QjtBQUNlO0FBQ0U7QUFDTDtBQUNMO0FBQ2hDLHlCQUF5QjtBQUN6Qiw2QkFBZTtJQUNiLE1BQU1LLFVBQVE7UUFDWjtZQUNFLFFBQU87WUFDUCxPQUFNO1FBQ1I7UUFDQTtZQUNFLFFBQU87WUFDUCxPQUFNO1FBQ1I7UUFDQTtZQUNFLFFBQU87WUFDUCxPQUFNO1FBQ1I7S0FDRDtJQUNELE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFDUCxxREFBYyxDQUFDO0lBQzVDLFNBQVNTLGNBQWNDLEtBQUs7UUFDMUJILFlBQVlHO0lBQ1osMEJBQTBCO0lBQzlCO0lBQ0UscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWCwwREFBTUE7Ozs7OzBCQUVQLDhEQUFDRyxtREFBS0E7Z0JBQUNTLE9BQU87b0JBQUM7b0JBQUc7aUJBQUc7Z0JBQUVDLFdBQVU7Z0JBQWFGLFdBQVU7O2tDQUN4RCw4REFBQ1YsMkRBQU9BO3dCQUFDRyxTQUFTQTt3QkFDaEJJLGVBQWVBOzs7Ozs7a0NBRWpCLDhEQUFDTix3REFBSUE7d0JBQUNFLFNBQVNBO3dCQUNiQyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9BcHAuanN4P2MxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhclwiXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXJcIlxuaW1wb3J0IENoYXQgZnJvbSBcIi4vY29tcG9uZW50cy9jaGF0XCI7XG5pbXBvcnQgU3BsaXQgZnJvbSBcInJlYWN0LXNwbGl0XCI7XG4vLyBpbXBvcnQgJy4vZ2xvYmFscy5jc3MnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICBjb25zdCBjb250YWN0PVtcbiAgICB7XG4gICAgICBcIm5hbWVcIjpcIkdpZ2EgRG9uXCIsXG4gICAgICBcIm1zZ1wiOlwiUGVlbmUgQ0hhbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6XCJEaW1saVwiLFxuICAgICAgXCJtc2dcIjpcIkZvb2tuZSBDSGFsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjpcIlNpbWxpbVwiLFxuICAgICAgXCJtc2dcIjpcIlRhaGFsbmUgQ0hhbGVcIlxuICAgIH1cbiAgXTtcbiAgY29uc3QgW2N1cnJDaGF0LHNldEN1cnJDaGFyXT1SZWFjdC51c2VTdGF0ZSgwKTtcbiAgZnVuY3Rpb24gc2VsZWN0Q29udGFjdChpbmRleCl7XG4gICAgc2V0Q3VyckNoYXIoaW5kZXgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbnQubmFtZSk7XG59XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2wgZmxleC0xXCI+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIFxuICAgICAgPFNwbGl0IHNpemVzPXtbMzAsNzBdfSBkaXJlY3Rpb249XCJob3Jpem9udGFsXCIgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGxcIj5cbiAgICAgIDxTaWRlYmFyIGNvbnRhY3Q9e2NvbnRhY3R9XG4gICAgICAgIHNlbGVjdENvbnRhY3Q9e3NlbGVjdENvbnRhY3R9XG4gICAgICAgIC8+XG4gICAgICA8Q2hhdCBjb250YWN0PXtjb250YWN0fVxuICAgICAgICBjdXJyQ2hhdD17Y3VyckNoYXR9Lz5cbiAgICAgXG4gICAgIDwvU3BsaXQ+XG4gICAgIFxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2YmFyIiwiU2lkZWJhciIsIkNoYXQiLCJTcGxpdCIsImNvbnRhY3QiLCJjdXJyQ2hhdCIsInNldEN1cnJDaGFyIiwidXNlU3RhdGUiLCJzZWxlY3RDb250YWN0IiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplcyIsImRpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.jsx\n"));

/***/ })

});