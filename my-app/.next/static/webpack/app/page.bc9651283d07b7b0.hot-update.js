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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LandingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./app/components/navbar.jsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.jsx\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat */ \"(app-pages-browser)/./app/components/chat.jsx\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/../node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the auth instance\n\n\n\n\n\nfunction LandingPage() {\n    _s();\n    const contact = [\n        {\n            name: \"Giga Don\",\n            msg: \"Peene Chale\",\n            time: Date()\n        },\n        {\n            name: \"Dimli\",\n            msg: \"Fookne Chale\",\n            time: Date()\n        },\n        {\n            name: \"Simlim\",\n            msg: \"Tahalne Chale\",\n            time: Date()\n        }\n    ];\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    // const userContext=useUser();\n    const [currChat, setCurrChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    // const [user, setUser] = useState(userContext);\n    // useEffect(()=>{\n    //   setUser(userContext);\n    // },[userContext])\n    // const {user,setUser}=useContext(UserContext);\n    const [chats, setChats] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [isRouterReady, setIsRouterReady] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    // const router = useRouter(); // Only safe to use inside useEffect\n    const [playerInfo, setPlayerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        var _user_user;\n        async function getDocumentsByQuery(collectionName, field, operator, value) {\n            if (value != undefined) {\n                console.log(value);\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, collectionName), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(field, operator, value));\n                console.log(firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query);\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setPlayerInfo(doc.data());\n                });\n            }\n        }\n        getDocumentsByQuery(\"Users\", \"email\", \"==\", user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email);\n    }, [\n        user\n    ]);\n    // console.log(user.uid)\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function getDocumentsWithUserId(userId) {\n            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"Chats\"); // Replace with your collection name\n            // Create a query to find documents where participants array contains the userId\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(collectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(\"participants\", \"array-contains\", userId));\n            try {\n                // Execute the query\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                // Get the total count of documents\n                const totalDocuments = querySnapshot.size;\n                console.log(\"Total documents with user ID \".concat(userId, \":\"), totalDocuments);\n                // Optionally, loop through documents if you need to access them\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setChats(...chats, doc.data().chat);\n                });\n                // setChats(querySnapshot);\n                return totalDocuments;\n            } catch (error) {\n                console.error(\"Error fetching documents:\", error);\n            }\n        }\n        const userId = user === null || user === void 0 ? void 0 : user.uid; // Replace with the user ID you're searching for\n        getDocumentsWithUserId(userId);\n    }, [\n        user\n    ]);\n    function selectContact(index) {\n        setCurrChat(index);\n    }\n    const [refinedChat, setRefinedChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (chats != null) {\n            console.log(chats);\n        // chats.chat.map((obj)=>{\n        // console.log(obj);\n        //   setRefinedChat({...refinedChat,obj})\n        // })\n        }\n    }, [\n        chats\n    ]);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();\n    // const [user, setUser] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)(auth, (currentUser)=>{\n            setUser(currentUser);\n        });\n        // console.log(userFirebase);\n        return ()=>unsubscribe();\n    }, []);\n    // const [playerInfo, setPlayerInfo] = useState(null);\n    // useEffect(() => {\n    //   async function getDocumentsByQuery(collectionName, field, operator, value) {\n    //     if (value != undefined) {\n    //       console.log(value);\n    //       const q = query(\n    //         collection(db, collectionName),\n    //         where(field, operator, value)\n    //       );\n    //       const querySnapshot = await getDocs(q);\n    //       querySnapshot.forEach((doc) => {\n    //         console.log(doc.id, \" => \", doc.data());\n    //         setPlayerInfo(doc.data());\n    //       });\n    //     }\n    //   }\n    //   getDocumentsByQuery(\"Users\", \"email\", \"==\", user?.email);\n    // }, [user]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex flex-col flex-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userContext__WEBPACK_IMPORTED_MODULE_9__.UserProvider, {\n            user: user,\n            setUser: setUser,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 138,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sizes: [\n                        30,\n                        70\n                    ],\n                    direction: \"horizontal\",\n                    className: \"flex h-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            contact: contact,\n                            selectContact: selectContact\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 141,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            contact: contact,\n                            currChat: currChat\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 142,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 140,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n            lineNumber: 137,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, this);\n}\n_s(LandingPage, \"FDJFqPBwUYTNYTB0uC3WHVLRExU=\");\n_c = LandingPage;\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7cUJBQUc7b0JBQUVDLFdBQVU7b0JBQWFGLFdBQVU7O3NDQUN2RCw4REFBQ25FLDJEQUFPQTs0QkFBQ29CLFNBQVNBOzRCQUFTd0MsZUFBZUE7Ozs7OztzQ0FDMUMsOERBQUMzRCx3REFBSUE7NEJBQUNtQixTQUFTQTs0QkFBU08sVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFDO0dBckl3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0FwcC5qc3g/YzEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vY29tcG9uZW50cy9jaGF0XCI7XG5pbXBvcnQgU3BsaXQgZnJvbSBcInJlYWN0LXNwbGl0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL2ZpcmViYXNlXCI7ICAvLyBJbXBvcnQgdGhlIGF1dGggaW5zdGFuY2VcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIsIHVzZVVzZXIgfSBmcm9tIFwiLi91c2VyQ29udGV4dFwiO1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcbiAgY29uc3QgY29udGFjdCA9IFtcbiAgICB7IG5hbWU6IFwiR2lnYSBEb25cIiwgbXNnOiBcIlBlZW5lIENoYWxlXCIsdGltZTpEYXRlKCkgfSxcbiAgICB7IG5hbWU6IFwiRGltbGlcIiwgbXNnOiBcIkZvb2tuZSBDaGFsZVwiICx0aW1lOkRhdGUoKX0sXG4gICAgeyBuYW1lOiBcIlNpbWxpbVwiLCBtc2c6IFwiVGFoYWxuZSBDaGFsZVwiICx0aW1lOkRhdGUoKX1cbiAgXTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGNvbnN0IHVzZXJDb250ZXh0PXVzZVVzZXIoKTtcbiAgY29uc3QgW2N1cnJDaGF0LCBzZXRDdXJyQ2hhdF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodXNlckNvbnRleHQpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAvLyAgIHNldFVzZXIodXNlckNvbnRleHQpO1xuICAvLyB9LFt1c2VyQ29udGV4dF0pXG4gIC8vIGNvbnN0IHt1c2VyLHNldFVzZXJ9PXVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCBbY2hhdHMsc2V0Q2hhdHNdPVJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzUm91dGVyUmVhZHksIHNldElzUm91dGVyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvLyBPbmx5IHNhZmUgdG8gdXNlIGluc2lkZSB1c2VFZmZlY3RcbiAgY29uc3QgW3BsYXllckluZm8sIHNldFBsYXllckluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRzQnlRdWVyeShjb2xsZWN0aW9uTmFtZSwgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCBjb2xsZWN0aW9uTmFtZSksXG4gICAgICAgICAgd2hlcmUoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnkpO1xuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAgICAgICBzZXRQbGF5ZXJJbmZvKGRvYy5kYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREb2N1bWVudHNCeVF1ZXJ5KFwiVXNlcnNcIiwgXCJlbWFpbFwiLCBcIj09XCIsIHVzZXI/LnVzZXI/LmVtYWlsKTtcbiAgfSwgW3VzZXJdKTtcbi8vIGNvbnNvbGUubG9nKHVzZXIudWlkKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudHNXaXRoVXNlcklkKHVzZXJJZCkge1xuICAgICAgY29uc3QgY29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwiQ2hhdHNcIik7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvbGxlY3Rpb24gbmFtZVxuICAgICAgXG4gICAgICAvLyBDcmVhdGUgYSBxdWVyeSB0byBmaW5kIGRvY3VtZW50cyB3aGVyZSBwYXJ0aWNpcGFudHMgYXJyYXkgY29udGFpbnMgdGhlIHVzZXJJZFxuICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb25SZWYsIHdoZXJlKFwicGFydGljaXBhbnRzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgdXNlcklkKSk7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIHF1ZXJ5XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHRoZSB0b3RhbCBjb3VudCBvZiBkb2N1bWVudHNcbiAgICAgICAgY29uc3QgdG90YWxEb2N1bWVudHMgPSBxdWVyeVNuYXBzaG90LnNpemU7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkb2N1bWVudHMgd2l0aCB1c2VyIElEICR7dXNlcklkfTpgLCB0b3RhbERvY3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICAvLyBPcHRpb25hbGx5LCBsb29wIHRocm91Z2ggZG9jdW1lbnRzIGlmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGVtXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgc2V0Q2hhdHMoLi4uY2hhdHMsZG9jLmRhdGEoKS5jaGF0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNldENoYXRzKHF1ZXJ5U25hcHNob3QpO1xuICAgIFxuICAgICAgICByZXR1cm4gdG90YWxEb2N1bWVudHM7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZG9jdW1lbnRzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICBcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyPy51aWQ7IC8vIFJlcGxhY2Ugd2l0aCB0aGUgdXNlciBJRCB5b3UncmUgc2VhcmNoaW5nIGZvclxuICAgIGdldERvY3VtZW50c1dpdGhVc2VySWQodXNlcklkKTtcbiAgICBcbiAgICBcbiAgfSxbdXNlcl0pXG5cbiAgZnVuY3Rpb24gc2VsZWN0Q29udGFjdChpbmRleCkge1xuICAgIHNldEN1cnJDaGF0KGluZGV4KTtcbiAgfVxuICBjb25zdCBbcmVmaW5lZENoYXQsc2V0UmVmaW5lZENoYXRdPXVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZihjaGF0cyE9bnVsbClcbiAgeyAgXG4gICAgY29uc29sZS5sb2coY2hhdHMpO1xuICAgIC8vIGNoYXRzLmNoYXQubWFwKChvYmopPT57XG4gICAgLy8gY29uc29sZS5sb2cob2JqKTtcbiAgICAvLyAgIHNldFJlZmluZWRDaGF0KHsuLi5yZWZpbmVkQ2hhdCxvYmp9KVxuICAgIC8vIH0pXG4gIH1cbiAgfSxbY2hhdHNdKVxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAvLyBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChjdXJyZW50VXNlcikgPT4ge1xuICAgICAgc2V0VXNlcihjdXJyZW50VXNlcik7XG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyRmlyZWJhc2UpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG4gIC8vIGNvbnN0IFtwbGF5ZXJJbmZvLCBzZXRQbGF5ZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50c0J5UXVlcnkoY29sbGVjdGlvbk5hbWUsIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpIHtcbiAgLy8gICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgLy8gICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAvLyAgICAgICBjb25zdCBxID0gcXVlcnkoXG4gIC8vICAgICAgICAgY29sbGVjdGlvbihkYiwgY29sbGVjdGlvbk5hbWUpLFxuICAvLyAgICAgICAgIHdoZXJlKGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpXG4gIC8vICAgICAgICk7XG4gIC8vICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAvLyAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAvLyAgICAgICAgIHNldFBsYXllckluZm8oZG9jLmRhdGEoKSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIGdldERvY3VtZW50c0J5UXVlcnkoXCJVc2Vyc1wiLCBcImVtYWlsXCIsIFwiPT1cIiwgdXNlcj8uZW1haWwpO1xuICAvLyB9LCBbdXNlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGZsZXgtY29sIGZsZXgtMVwiPlxuICAgICAgPFVzZXJQcm92aWRlciB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfT5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgPFNwbGl0IHNpemVzPXtbMzAsIDcwXX0gZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIFwiPlxuICAgICAgICA8U2lkZWJhciBjb250YWN0PXtjb250YWN0fSBzZWxlY3RDb250YWN0PXtzZWxlY3RDb250YWN0fSAvPlxuICAgICAgICA8Q2hhdCBjb250YWN0PXtjb250YWN0fSBjdXJyQ2hhdD17Y3VyckNoYXR9IC8+XG4gICAgICA8L1NwbGl0PlxuICAgIDwvVXNlclByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIlNpZGViYXIiLCJDaGF0IiwiU3BsaXQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGgiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJ1c2VVc2VyIiwiZGIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJMYW5kaW5nUGFnZSIsImNvbnRhY3QiLCJuYW1lIiwibXNnIiwidGltZSIsIkRhdGUiLCJ1c2VyIiwic2V0VXNlciIsImN1cnJDaGF0Iiwic2V0Q3VyckNoYXQiLCJjaGF0cyIsInNldENoYXRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc1JvdXRlclJlYWR5Iiwic2V0SXNSb3V0ZXJSZWFkeSIsInBsYXllckluZm8iLCJzZXRQbGF5ZXJJbmZvIiwiZ2V0RG9jdW1lbnRzQnlRdWVyeSIsImNvbGxlY3Rpb25OYW1lIiwiZmllbGQiLCJvcGVyYXRvciIsInZhbHVlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInEiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsImlkIiwiZGF0YSIsImVtYWlsIiwiZ2V0RG9jdW1lbnRzV2l0aFVzZXJJZCIsInVzZXJJZCIsImNvbGxlY3Rpb25SZWYiLCJ0b3RhbERvY3VtZW50cyIsInNpemUiLCJjaGF0IiwiZXJyb3IiLCJ1aWQiLCJzZWxlY3RDb250YWN0IiwiaW5kZXgiLCJyZWZpbmVkQ2hhdCIsInNldFJlZmluZWRDaGF0IiwidW5zdWJzY3JpYmUiLCJjdXJyZW50VXNlciIsImRpdiIsImNsYXNzTmFtZSIsInNpemVzIiwiZGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.jsx\n"));

/***/ })

});