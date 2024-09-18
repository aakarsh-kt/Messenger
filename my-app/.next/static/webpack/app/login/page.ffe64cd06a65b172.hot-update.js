"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/components/navbar.jsx":
/*!***********************************!*\
  !*** ./app/components/navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    var _user_user;\n    // const {user,setUser}=useContext(UserContext);\n    const userContext = (0,_userContext__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userContext);\n    // if(useUser() && user==null)\n    //     setUser(useUser());\n    // else if(!useUser() && user?.user!=null)\n    //     setUser(null);\n    // function updateCurrentUser(){\n    //     const temp=useUser();\n    //     setUser(temp);\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setUser(userContext);\n    }, [\n        userContext\n    ]);\n    const [playerInfo, setPlayerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _user_user;\n        async function getDocumentsByQuery(collectionName, field, operator, value) {\n            if (value != undefined) {\n                // console.log(value);\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, collectionName), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(field, operator, value));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    // console.log(doc.id, \" => \", doc.data());\n                    setPlayerInfo(doc.data());\n                });\n            }\n        }\n        getDocumentsByQuery(\"Users\", \"email\", \"==\", user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email);\n    }, [\n        user\n    ]);\n    // React.useEffect(() => {\n    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {\n    //       // console.log(currentUser.email);\n    //       setUser(currentUser);\n    //     });\n    //     return () => unsubscribe();\n    //   }, []);\n    async function logout() {\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-400 dark:bg-orange-400 w-screen flex flex-row justify-between items-center my-0 p-2\",\n        children: [\n            user !== \"\" && user != undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"right-0  w-20 h-20 rounded-full p-2 cursor-pointer\",\n                src: playerInfo === null || playerInfo === void 0 ? void 0 : playerInfo.profilePicture,\n                width: 50,\n                height: 50,\n                alt: \"Profile\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                lineNumber: 77,\n                columnNumber: 48\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    playerInfo === null || playerInfo === void 0 ? void 0 : playerInfo.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mx-auto font-bold text-4xl font-mono \",\n                children: \"Texter\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-row justify-between gap-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"hover:bg-orange-500 rounded-md p-1\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this),\n                    user == null || (user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email) == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"hover:bg-orange-400 rounded-md p-1\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 18\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hover:bg-orange-400 rounded-md p-1\",\n                            onClick: logout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/navbar.jsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0Q7QUFDaEM7QUFDRjtBQUN5QjtBQUNlO0FBQ1Q7QUFDckI7QUFDZ0M7QUFJdkUsNkJBQWU7UUErRWdCbUI7SUE5RTNCLGdEQUFnRDtJQUNoRCxNQUFNQyxjQUFZYixxREFBT0E7SUFDekIsTUFBTSxDQUFDWSxNQUFLRSxRQUFRLEdBQUNsQiwrQ0FBUUEsQ0FBQ2lCO0lBQzlCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLHFCQUFxQjtJQUVyQixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0psQixnREFBU0EsQ0FBQztRQUNObUIsUUFBUUQ7SUFFWixHQUFFO1FBQUNBO0tBQVk7SUFDZixNQUFNLENBQUNFLFlBQVlDLGNBQWMsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQy9DRCxnREFBU0EsQ0FBQztZQWdCb0NpQjtRQWY1QyxlQUFlSyxvQkFBb0JDLGNBQWMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLEtBQUs7WUFDdkUsSUFBSUEsU0FBU0MsV0FBVztnQkFDdEIsc0JBQXNCO2dCQUN0QixNQUFNQyxJQUFJYix5REFBS0EsQ0FDYkYsOERBQVVBLENBQUNELHlDQUFFQSxFQUFHVyxpQkFDaEJQLHlEQUFLQSxDQUFDUSxPQUFPQyxVQUFVQztnQkFFekIsTUFBTUcsZ0JBQWdCLE1BQU1mLDJEQUFPQSxDQUFDYztnQkFDcENDLGNBQWNDLE9BQU8sQ0FBQyxDQUFDQztvQkFDckIsMkNBQTJDO29CQUMzQ1YsY0FBY1UsSUFBSUMsSUFBSTtnQkFDeEI7WUFDRjtRQUNGO1FBRUFWLG9CQUFvQixTQUFTLFNBQVMsTUFBTUwsaUJBQUFBLDRCQUFBQSxhQUFBQSxLQUFNQSxJQUFJLGNBQVZBLGlDQUFBQSxXQUFZZ0IsS0FBSztJQUMvRCxHQUFHO1FBQUNoQjtLQUFLO0lBRVAsMEJBQTBCO0lBQzFCLHNFQUFzRTtJQUN0RSwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBRTlCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsWUFBWTtJQUlaLGVBQWVpQjtRQUNYLE1BQU14QixzREFBT0EsQ0FBQ0MsMkNBQUlBO0lBQ3BCO0lBQ0YscUJBQ0ksOERBQUN3QjtRQUFJQyxXQUFVOztZQVlSbkIsU0FBTyxNQUFNQSxRQUFNVSwyQkFBYSw4REFBRXpCLGtEQUFLQTtnQkFBQ2tDLFdBQVU7Z0JBQ2xEQyxHQUFHLEVBQUVqQix1QkFBQUEsaUNBQUFBLFdBQVlrQixjQUFjO2dCQUMvQkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSTs7Ozs7OzBCQUlQLDhEQUFDQzs7b0JBQUl0Qix1QkFBQUEsaUNBQUFBLFdBQVl1QixJQUFJO29CQUFDOzs7Ozs7OzBCQUN0Qiw4REFBQ0M7Z0JBQUdSLFdBQVU7MEJBQXdDOzs7Ozs7MEJBQ3RELDhEQUFDUztnQkFBR1QsV0FBVTs7a0NBQ1YsOERBQUNqQyxpREFBSUE7d0JBQUMyQyxNQUFLO2tDQUNQLDRFQUFDQztzQ0FBRyw0RUFBQ0M7Z0NBQU9aLFdBQVU7MENBQXFDOzs7Ozs7Ozs7Ozs7Ozs7O29CQUc5RG5CLFFBQU0sUUFBUUEsQ0FBQUEsaUJBQUFBLDRCQUFBQSxhQUFBQSxLQUFNQSxJQUFJLGNBQVZBLGlDQUFBQSxXQUFZZ0IsS0FBSyxLQUFFLHFCQUNqQyw4REFBQzlCLGlEQUFJQTt3QkFBQzJDLE1BQUs7a0NBQ1IsNEVBQUNDO3NDQUFHLDRFQUFDQztnQ0FBT1osV0FBVTswQ0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FJL0QsOERBQUNXO2tDQUFHLDRFQUFDQzs0QkFBT1osV0FBVTs0QkFBcUNhLFNBQVNmO3NDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9uYXZiYXIuanN4PzlmZWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgVXNlckNvbnRleHQsIHVzZVVzZXIgfSBmcm9tIFwiLi4vdXNlckNvbnRleHRcIjtcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyR3JvdXAsIEF2YXRhckljb24gfSBmcm9tIFwiQG5leHR1aS1vcmcvYXZhdGFyXCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zdCB7dXNlcixzZXRVc2VyfT11c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgICBjb25zdCB1c2VyQ29udGV4dD11c2VVc2VyKCk7XG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09dXNlU3RhdGUodXNlckNvbnRleHQpO1xuICAgIC8vIGlmKHVzZVVzZXIoKSAmJiB1c2VyPT1udWxsKVxuICAgIC8vICAgICBzZXRVc2VyKHVzZVVzZXIoKSk7XG4gICAgLy8gZWxzZSBpZighdXNlVXNlcigpICYmIHVzZXI/LnVzZXIhPW51bGwpXG4gICAgLy8gICAgIHNldFVzZXIobnVsbCk7XG5cbiAgICAvLyBmdW5jdGlvbiB1cGRhdGVDdXJyZW50VXNlcigpe1xuICAgIC8vICAgICBjb25zdCB0ZW1wPXVzZVVzZXIoKTtcbiAgICAvLyAgICAgc2V0VXNlcih0ZW1wKTtcbiAgICAvLyB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHNldFVzZXIodXNlckNvbnRleHQpO1xuICAgICAgXG4gICAgfSxbdXNlckNvbnRleHRdKVxuICAgIGNvbnN0IFtwbGF5ZXJJbmZvLCBzZXRQbGF5ZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50c0J5UXVlcnkoY29sbGVjdGlvbk5hbWUsIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBjb25zdCBxID0gcXVlcnkoXG4gICAgICAgICAgY29sbGVjdGlvbihkYiAsIGNvbGxlY3Rpb25OYW1lKSwgXG4gICAgICAgICAgd2hlcmUoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgc2V0UGxheWVySW5mbyhkb2MuZGF0YSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnRzQnlRdWVyeShcIlVzZXJzXCIsIFwiZW1haWxcIiwgXCI9PVwiLCB1c2VyPy51c2VyPy5lbWFpbCk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAoY3VycmVudFVzZXIpID0+IHtcbiAgICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VXNlci5lbWFpbCk7XG4gICAgLy8gICAgICAgc2V0VXNlcihjdXJyZW50VXNlcik7XG4gICAgXG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgICAvLyAgIH0sIFtdKTtcblxuXG4gIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgYXdhaXQgc2lnbk91dChhdXRoKTtcbiAgICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTQwMCBkYXJrOmJnLW9yYW5nZS00MDAgdy1zY3JlZW4gZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG15LTAgcC0yXCI+XG4gICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKHVzZXIpfVxuICAgICAgICAgICAge2NvbnNvbGUubG9nKHBsYXllckluZm8pfSAqL31cbiAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlMTAuanBnXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBtLTFcIlxuICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIHt1c2VyIT09XCJcIiAmJiB1c2VyIT11bmRlZmluZWQgJiYgPCBJbWFnZSBjbGFzc05hbWU9J3JpZ2h0LTAgIHctMjAgaC0yMCByb3VuZGVkLWZ1bGwgcC0yIGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgICAgc3JjPXtwbGF5ZXJJbmZvPy5wcm9maWxlUGljdHVyZX1cbiAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlXCJcbiAgICAgICAgICAgIC8vICAgIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpfVxuICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKHVzZXIpfSAqL31cbiAgICAgICAgICAgIDxoMz57cGxheWVySW5mbz8ubmFtZX0gPC9oMz4gXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXgtYXV0byBmb250LWJvbGQgdGV4dC00eGwgZm9udC1tb25vIFwiPlRleHRlcjwvaDE+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPVwiaG92ZXI6Ymctb3JhbmdlLTUwMCByb3VuZGVkLW1kIHAtMVwiPkhvbWU8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIHt1c2VyPT1udWxsIHx8IHVzZXI/LnVzZXI/LmVtYWlsPT1udWxsP1xuICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT1cImhvdmVyOmJnLW9yYW5nZS00MDAgcm91bmRlZC1tZCBwLTFcIj5Mb2dpbjwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9XCJob3ZlcjpiZy1vcmFuZ2UtNDAwIHJvdW5kZWQtbWQgcC0xXCIgb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsIlVzZXJDb250ZXh0IiwidXNlVXNlciIsIkF2YXRhciIsIkF2YXRhckdyb3VwIiwiQXZhdGFySWNvbiIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25PdXQiLCJhdXRoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJ1c2VyIiwidXNlckNvbnRleHQiLCJzZXRVc2VyIiwicGxheWVySW5mbyIsInNldFBsYXllckluZm8iLCJnZXREb2N1bWVudHNCeVF1ZXJ5IiwiY29sbGVjdGlvbk5hbWUiLCJmaWVsZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJxIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJkYXRhIiwiZW1haWwiLCJsb2dvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJwcm9maWxlUGljdHVyZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDMiLCJuYW1lIiwiaDEiLCJ1bCIsImhyZWYiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar.jsx\n"));

/***/ })

});