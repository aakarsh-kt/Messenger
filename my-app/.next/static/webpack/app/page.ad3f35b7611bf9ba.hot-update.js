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

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c81aa2539e67\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzRmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjODFhYTI1MzllNjdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/navbar.jsx":
/*!***********************************!*\
  !*** ./app/components/navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    var _user_user;\n    const userContext = (0,_userContext__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setUser(userContext);\n    }, [\n        userContext\n    ]);\n    const [playerInfo, setPlayerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _user_user;\n        async function getDocumentsByQuery(collectionName, field, operator, value) {\n            if (value != undefined) {\n                // console.log(value);\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, collectionName), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(field, operator, value));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    // console.log(doc.id, \" => \", doc.data());\n                    setPlayerInfo(doc.data());\n                });\n            }\n        }\n        getDocumentsByQuery(\"Users\", \"email\", \"==\", user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email);\n    }, [\n        user\n    ]);\n    async function logout() {\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-orange-400 w-screen flex flex-row justify-between items-center my-0 p-2\",\n        children: [\n            user !== \"\" && user != undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"right-0  w-20 h-20 rounded-full p-2 cursor-pointer\",\n                src: playerInfo === null || playerInfo === void 0 ? void 0 : playerInfo.profilePicture,\n                width: 50,\n                height: 50,\n                alt: \"Profile\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                lineNumber: 52,\n                columnNumber: 48\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-2xl\",\n                children: [\n                    playerInfo === null || playerInfo === void 0 ? void 0 : playerInfo.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mx-auto font-bold text-4xl font-mono \",\n                children: \"Texter\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-row justify-between gap-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"hover:bg-orange-300 rounded-md p-1\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    user == null || (user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email) == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"hover:bg-orange-300 rounded-md p-1\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 18\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hover:bg-orange-300 rounded-md p-1\",\n                            onClick: logout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0Q7QUFDaEM7QUFDRjtBQUN5QjtBQUVNO0FBQ3JCO0FBQ2dDO0FBSXZFLDZCQUFlO1FBdURnQmdCO0lBckQzQixNQUFNQyxjQUFZVixxREFBT0E7SUFDekIsTUFBTSxDQUFDUyxNQUFLRSxRQUFRLEdBQUNmLCtDQUFRQSxDQUFDYztJQUU5QmYsZ0RBQVNBLENBQUM7UUFDTmdCLFFBQVFEO0lBRVosR0FBRTtRQUFDQTtLQUFZO0lBQ2YsTUFBTSxDQUFDRSxZQUFZQyxjQUFjLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7WUFnQm9DYztRQWY1QyxlQUFlSyxvQkFBb0JDLGNBQWMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLEtBQUs7WUFDdkUsSUFBSUEsU0FBU0MsV0FBVztnQkFDdEIsc0JBQXNCO2dCQUN0QixNQUFNQyxJQUFJYix5REFBS0EsQ0FDYkYsOERBQVVBLENBQUNELHlDQUFFQSxFQUFHVyxpQkFDaEJQLHlEQUFLQSxDQUFDUSxPQUFPQyxVQUFVQztnQkFFekIsTUFBTUcsZ0JBQWdCLE1BQU1mLDJEQUFPQSxDQUFDYztnQkFDcENDLGNBQWNDLE9BQU8sQ0FBQyxDQUFDQztvQkFDckIsMkNBQTJDO29CQUMzQ1YsY0FBY1UsSUFBSUMsSUFBSTtnQkFDeEI7WUFDRjtRQUNGO1FBRUFWLG9CQUFvQixTQUFTLFNBQVMsTUFBTUwsaUJBQUFBLDRCQUFBQSxhQUFBQSxLQUFNQSxJQUFJLGNBQVZBLGlDQUFBQSxXQUFZZ0IsS0FBSztJQUMvRCxHQUFHO1FBQUNoQjtLQUFLO0lBSVAsZUFBZWlCO1FBQ1gsTUFBTXhCLHNEQUFPQSxDQUFDQywyQ0FBSUE7SUFDcEI7SUFDRixxQkFDSSw4REFBQ3dCO1FBQUlDLFdBQVU7O1lBR1JuQixTQUFPLE1BQU1BLFFBQU1VLDJCQUFhLDhEQUFFdEIsa0RBQUtBO2dCQUFDK0IsV0FBVTtnQkFDbERDLEdBQUcsRUFBRWpCLHVCQUFBQSxpQ0FBQUEsV0FBWWtCLGNBQWM7Z0JBQy9CQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFJOzs7Ozs7MEJBS1AsOERBQUNDO2dCQUFHTixXQUFVOztvQkFBWWhCLHVCQUFBQSxpQ0FBQUEsV0FBWXVCLElBQUk7b0JBQUM7Ozs7Ozs7MEJBQzNDLDhEQUFDQztnQkFBR1IsV0FBVTswQkFBd0M7Ozs7OzswQkFDdEQsOERBQUNTO2dCQUFHVCxXQUFVOztrQ0FDViw4REFBQzlCLGlEQUFJQTt3QkFBQ3dDLE1BQUs7a0NBQ1AsNEVBQUNDO3NDQUFHLDRFQUFDQztnQ0FBT1osV0FBVTswQ0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRzlEbkIsUUFBTSxRQUFRQSxDQUFBQSxpQkFBQUEsNEJBQUFBLGFBQUFBLEtBQU1BLElBQUksY0FBVkEsaUNBQUFBLFdBQVlnQixLQUFLLEtBQUUscUJBQ2pDLDhEQUFDM0IsaURBQUlBO3dCQUFDd0MsTUFBSztrQ0FDUiw0RUFBQ0M7c0NBQUcsNEVBQUNDO2dDQUFPWixXQUFVOzBDQUFxQzs7Ozs7Ozs7Ozs7Ozs7OzZDQUkvRCw4REFBQ1c7a0NBQUcsNEVBQUNDOzRCQUFPWixXQUFVOzRCQUFxQ2EsU0FBU2Y7c0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL25hdmJhci5qc3g/OWZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCwgdXNlVXNlciB9IGZyb20gXCIuLi91c2VyQ29udGV4dFwiO1xuXG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgIFxuICAgIGNvbnN0IHVzZXJDb250ZXh0PXVzZVVzZXIoKTtcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT11c2VTdGF0ZSh1c2VyQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgc2V0VXNlcih1c2VyQ29udGV4dCk7XG4gICAgICBcbiAgICB9LFt1c2VyQ29udGV4dF0pXG4gICAgY29uc3QgW3BsYXllckluZm8sIHNldFBsYXllckluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50c0J5UXVlcnkoY29sbGVjdGlvbk5hbWUsIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBjb25zdCBxID0gcXVlcnkoXG4gICAgICAgICAgY29sbGVjdGlvbihkYiAsIGNvbGxlY3Rpb25OYW1lKSwgXG4gICAgICAgICAgd2hlcmUoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgc2V0UGxheWVySW5mbyhkb2MuZGF0YSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnRzQnlRdWVyeShcIlVzZXJzXCIsIFwiZW1haWxcIiwgXCI9PVwiLCB1c2VyPy51c2VyPy5lbWFpbCk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgXG4gIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgYXdhaXQgc2lnbk91dChhdXRoKTtcbiAgICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW9yYW5nZS00MDAgdy1zY3JlZW4gZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG15LTAgcC0yXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICB7dXNlciE9PVwiXCIgJiYgdXNlciE9dW5kZWZpbmVkICYmIDwgSW1hZ2UgY2xhc3NOYW1lPSdyaWdodC0wICB3LTIwIGgtMjAgcm91bmRlZC1mdWxsIHAtMiBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgIHNyYz17cGxheWVySW5mbz8ucHJvZmlsZVBpY3R1cmV9XG4gICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgYWx0PVwiUHJvZmlsZVwiXG4gICAgICAgICAgICAvLyAgICBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKX1cbiAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyh1c2VyKX1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwbGF5ZXJJbmZvKX0gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj57cGxheWVySW5mbz8ubmFtZX0gPC9oMz4gXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXgtYXV0byBmb250LWJvbGQgdGV4dC00eGwgZm9udC1tb25vIFwiPlRleHRlcjwvaDE+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPVwiaG92ZXI6Ymctb3JhbmdlLTMwMCByb3VuZGVkLW1kIHAtMVwiPkhvbWU8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIHt1c2VyPT1udWxsIHx8IHVzZXI/LnVzZXI/LmVtYWlsPT1udWxsP1xuICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT1cImhvdmVyOmJnLW9yYW5nZS0zMDAgcm91bmRlZC1tZCBwLTFcIj5Mb2dpbjwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9XCJob3ZlcjpiZy1vcmFuZ2UtMzAwIHJvdW5kZWQtbWQgcC0xXCIgb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsIlVzZXJDb250ZXh0IiwidXNlVXNlciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25PdXQiLCJhdXRoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJ1c2VyIiwidXNlckNvbnRleHQiLCJzZXRVc2VyIiwicGxheWVySW5mbyIsInNldFBsYXllckluZm8iLCJnZXREb2N1bWVudHNCeVF1ZXJ5IiwiY29sbGVjdGlvbk5hbWUiLCJmaWVsZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJxIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJkYXRhIiwiZW1haWwiLCJsb2dvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJwcm9maWxlUGljdHVyZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDMiLCJuYW1lIiwiaDEiLCJ1bCIsImhyZWYiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar.jsx\n"));

/***/ })

});