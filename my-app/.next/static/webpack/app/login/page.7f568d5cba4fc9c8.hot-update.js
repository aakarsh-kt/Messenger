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

/***/ "(app-pages-browser)/./app/login/page.jsx":
/*!****************************!*\
  !*** ./app/login/page.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _contexts_userContext_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/userContext.jsx */ \"(app-pages-browser)/./app/contexts/userContext.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _components_navbar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar.jsx */ \"(app-pages-browser)/./app/components/navbar.jsx\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase.js */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router.js */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n// import { useNavigate } from \"react-router-dom\";\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    // const navigate = useNavigate();\n    // const {user, setUser} = React.useContext(UserContext);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    if ((0,_userContext__WEBPACK_IMPORTED_MODULE_6__.useUser)() && user == null) setUser((0,_userContext__WEBPACK_IMPORTED_MODULE_6__.useUser)());\n    const signInWithGoogle = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebase_js__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase_js__WEBPACK_IMPORTED_MODULE_5__.provider).then((result)=>{\n            const tempUser = result.user;\n            console.log(\"User info:\", tempUser);\n            next_router_js__WEBPACK_IMPORTED_MODULE_7__.Router.push(\"/\");\n        // navigate(\"/landing?user=\");\n        }).catch((error)=>{\n            console.error(\"Error during sign-in:\", error);\n        });\n    };\n    async function login(event) {\n        event.preventDefault();\n        try {\n            const user = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase_js__WEBPACK_IMPORTED_MODULE_5__.auth, info.username, info.password);\n            // navigate(\"/landing?user=\" + user.user.email);\n            console.log(user.user.email);\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    const [info, setInfo] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        username: \"\",\n        password: \"\"\n    });\n    function handleChange(event) {\n        const { name, value } = event.target;\n        setInfo((prev)=>{\n            return {\n                ...prev,\n                [name]: value\n            };\n        });\n    }\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase_js__WEBPACK_IMPORTED_MODULE_5__.auth, (currentUser)=>{\n            // console.log(currentUser.email);\n            setUser(currentUser);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    async function logout() {\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase_js__WEBPACK_IMPORTED_MODULE_5__.auth);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen  items-center flex flex-col justify-between h-screen bg-slate-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \"my-0 \"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                lineNumber: 74,\n                columnNumber: 2\n            }, this),\n            console.log(user),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl text-center font-bold text-white\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                lineNumber: 79,\n                columnNumber: 2\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        className: \"text-white\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"size-10 w-60 h-10 bg-white  rounded-md\",\n                        type: \"text\",\n                        id: \"username\",\n                        name: \"username\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        className: \"text-white\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"size-10 w-60 h-10 bg-white  rounded-md\",\n                        type: \"password\",\n                        id: \"password\",\n                        name: \"password\",\n                        // onChange={handleChange}\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"size-8 w-40 ml-10 h-10 bg-cyan-500  rounded-md\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-white font-bold\",\n                        children: \"Sign In with Google\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/googleSignInLogo.png\",\n                        onClick: signInWithGoogle,\n                        className: \"bg-white w-10 h-10 cursor-pointer border rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col text-white items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Don't have an account, Sign up now\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        //  to=\"/register\"\n                        className: \"text-cyan-400\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Outlet, {}, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/login/page.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ2E7QUFDbUI7QUFNbkM7QUFDdkIsa0RBQWtEO0FBQ0o7QUFDRTtBQUNBO0FBQ1A7QUFDRDtBQUN4Qyw2QkFBZTtJQUNiLGtDQUFrQztJQUNsQyx5REFBeUQ7SUFDekQsTUFBTSxDQUFDYyxNQUFLQyxRQUFRLEdBQUNmLHFEQUFjLENBQUM7SUFDbEMsSUFBR1kscURBQU9BLE1BQU1FLFFBQU0sTUFDbEJDLFFBQVFILHFEQUFPQTtJQUVyQixNQUFNSyxtQkFBbUI7UUFDdkJYLDhEQUFlQSxDQUFDRSw4Q0FBSUEsRUFBRUMsa0RBQVFBLEVBQzNCUyxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxNQUFNQyxXQUFXRCxPQUFPTCxJQUFJO1lBQzVCTyxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7WUFDMUJQLGtEQUFNQSxDQUFDVSxJQUFJLENBQUM7UUFDWiw4QkFBOEI7UUFDaEMsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ05KLFFBQVFJLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0o7SUFDQSxlQUFlQyxNQUFNQyxLQUFLO1FBQ3hCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUk7WUFDRixNQUFNZCxPQUFPLE1BQU1YLHlFQUEwQkEsQ0FDM0NLLDhDQUFJQSxFQUNKcUIsS0FBS0MsUUFBUSxFQUNiRCxLQUFLRSxRQUFRO1lBRWYsZ0RBQWdEO1lBQ2hEVixRQUFRQyxHQUFHLENBQUNSLEtBQUtBLElBQUksQ0FBQ2tCLEtBQUs7UUFDN0IsRUFBRSxPQUFPUCxPQUFPO1lBQ2RKLFFBQVFJLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUNBLE1BQU0sQ0FBQ0ksTUFBTUksUUFBUSxHQUFHakMscURBQWMsQ0FBQztRQUFFOEIsVUFBVTtRQUFJQyxVQUFVO0lBQUc7SUFDcEUsU0FBU0csYUFBYVAsS0FBSztRQUN6QixNQUFNLEVBQUVRLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdULE1BQU1VLE1BQU07UUFDcENKLFFBQVEsQ0FBQ0s7WUFDUCxPQUFPO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1AsQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO1FBQ0Y7SUFDRjtJQUNBcEMsc0RBQWUsQ0FBQztRQUNkLE1BQU13QyxjQUFjcEMsaUVBQWtCQSxDQUFDSSw4Q0FBSUEsRUFBRSxDQUFDaUM7WUFDNUMsa0NBQWtDO1lBQ2xDMUIsUUFBUTBCO1FBRVY7UUFDQSxPQUFPLElBQU1EO0lBQ2YsR0FBRyxFQUFFO0lBQ0wsZUFBZUU7UUFDYixNQUFNckMsc0RBQU9BLENBQUNHLDhDQUFJQTtJQUNwQjtJQUNBLHFCQUNFLDhEQUFDbUM7UUFBSUMsV0FBVTs7MEJBQ2xCLDhEQUFDckMsOERBQU1BO2dCQUFDcUMsV0FBVTs7Ozs7O1lBRWZ2QixRQUFRQyxHQUFHLENBQUNSOzBCQUdmLDhEQUFDK0I7Z0JBQUdELFdBQVU7MEJBQTRDOzs7Ozs7MEJBQ3JELDhEQUFDRTtnQkFBS0YsV0FBVTs7a0NBQ2QsOERBQUNHO3dCQUFNQyxTQUFRO3dCQUFXSixXQUFVO2tDQUFhOzs7Ozs7a0NBQ2pELDhEQUFDSzt3QkFDQ0wsV0FBVTt3QkFDVk0sTUFBSzt3QkFDTEMsSUFBRzt3QkFDSGhCLE1BQUs7d0JBQ0xpQixRQUFROzs7Ozs7a0NBR1YsOERBQUNDOzs7OztrQ0FDRCw4REFBQ047d0JBQU1DLFNBQVE7d0JBQVdKLFdBQVU7a0NBQWE7Ozs7OztrQ0FDakQsOERBQUNLO3dCQUNDTCxXQUFVO3dCQUNWTSxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIaEIsTUFBSzt3QkFDTCwwQkFBMEI7d0JBQzFCaUIsUUFBUTs7Ozs7O2tDQUVWLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNDO3dCQUFPSixNQUFLO3dCQUFTTixXQUFVO2tDQUFrRDs7Ozs7Ozs7Ozs7OzBCQUdwRiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBZ0M7Ozs7OztrQ0FFOUMsOERBQUNXO3dCQUNDQyxLQUFJO3dCQUNKQyxTQUFTeEM7d0JBQ1QyQixXQUFVOzs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNjO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUN6RCxrRkFBTUE7d0JBQ1Asa0JBQWtCO3dCQUNoQjJDLFdBQVU7a0NBQWlCOzs7Ozs7Ozs7Ozs7MEJBVWpDLDhEQUFDakMsb0RBQU1BOzs7Ozs7Ozs7OztBQUliIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLmpzeD83NzZhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL3VzZXJDb250ZXh0LmpzeCc7XG5pbXBvcnQge1xuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxuICBzaWduT3V0LFxuICBzaWduSW5XaXRoUG9wdXAsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhci5qc3hcIjtcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSBcIi4uL2ZpcmViYXNlLmpzXCI7XG5pbXBvcnQgeyBMaW5rLCBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uL3VzZXJDb250ZXh0JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIC8vIGNvbnN0IHt1c2VyLCBzZXRVc2VyfSA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgICBpZih1c2VVc2VyKCkgJiYgdXNlcj09bnVsbClcbiAgICAgICAgc2V0VXNlcih1c2VVc2VyKCkpO1xuICAgIFxuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gKCkgPT4ge1xuICAgIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcFVzZXIgPSByZXN1bHQudXNlcjtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGluZm86XCIsIHRlbXBVc2VyKTtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXG4gICAgICAgIC8vIG5hdmlnYXRlKFwiL2xhbmRpbmc/dXNlcj1cIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIHNpZ24taW46XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuICBhc3luYyBmdW5jdGlvbiBsb2dpbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgYXV0aCxcbiAgICAgICAgaW5mby51c2VybmFtZSxcbiAgICAgICAgaW5mby5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIC8vIG5hdmlnYXRlKFwiL2xhbmRpbmc/dXNlcj1cIiArIHVzZXIudXNlci5lbWFpbCk7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyLnVzZXIuZW1haWwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgW2luZm8sIHNldEluZm9dID0gUmVhY3QudXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXRJbmZvKChwcmV2KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChjdXJyZW50VXNlcikgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFVzZXIuZW1haWwpO1xuICAgICAgc2V0VXNlcihjdXJyZW50VXNlcik7XG5cbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pO1xuICBhc3luYyBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgYXdhaXQgc2lnbk91dChhdXRoKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gIGl0ZW1zLWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBoLXNjcmVlbiBiZy1zbGF0ZS02MDBcIj5cblx0PE5hdkJhciBjbGFzc05hbWU9XCJteS0wIFwiLz4gICAgIFxuICB7XG4gICAgY29uc29sZS5sb2codXNlcilcbiAgfVxuICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktZXZlbmx5IGl0ZW1zLWNlbnRlciBoLVwiPiAqL31cbiA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5Mb2dpbjwvaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLTEwIHctNjAgaC0xMCBiZy13aGl0ZSAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLTEwIHctNjAgaC0xMCBiZy13aGl0ZSAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzaXplLTggdy00MCBtbC0xMCBoLTEwIGJnLWN5YW4tNTAwICByb3VuZGVkLW1kXCIgPkxvZ2luPC9idXR0b24+XG4gICAgICAgIHsvKiB7dXNlcj8uZW1haWx9ICovfVxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPlNpZ24gSW4gd2l0aCBHb29nbGU8L2gxPlxuXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2dvb2dsZVNpZ25JbkxvZ28ucG5nXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LTEwIGgtMTAgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC13aGl0ZSBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8aDM+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50LCBTaWduIHVwIG5vdzwvaDM+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIC8vICB0bz1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWN5YW4tNDAwXCIgPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxCdXR0b24gXG4gICAgICAvLyBvbkNsaWNrPXtsb2dvdXR9XG4gICAgICAgdHlwZT1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgTG9nb3V0XG4gICAgICA8L0J1dHRvbj4gKi99XG5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiVXNlckNvbnRleHQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25PdXQiLCJzaWduSW5XaXRoUG9wdXAiLCJOYXZCYXIiLCJhdXRoIiwicHJvdmlkZXIiLCJMaW5rIiwiT3V0bGV0IiwidXNlVXNlciIsIlJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJzaWduSW5XaXRoR29vZ2xlIiwidGhlbiIsInJlc3VsdCIsInRlbXBVc2VyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjYXRjaCIsImVycm9yIiwibG9naW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5mbyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsInNldEluZm8iLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJjdXJyZW50VXNlciIsImxvZ291dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJiciIsImJ1dHRvbiIsImltZyIsInNyYyIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ })

});