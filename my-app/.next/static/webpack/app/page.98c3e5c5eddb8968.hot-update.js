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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LandingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./app/components/navbar.jsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.jsx\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat */ \"(app-pages-browser)/./app/components/chat.jsx\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/../node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the auth instance\n\n\n\n\n\nfunction LandingPage() {\n    _s();\n    const contact = [\n        {\n            name: \"Giga Don\",\n            msg: \"Peene Chale\",\n            time: Date()\n        },\n        {\n            name: \"Dimli\",\n            msg: \"Fookne Chale\",\n            time: Date()\n        },\n        {\n            name: \"Simlim\",\n            msg: \"Tahalne Chale\",\n            time: Date()\n        }\n    ];\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    // const userContext=useUser();\n    const [currChat, setCurrChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    // const [user, setUser] = useState(userContext);\n    // useEffect(()=>{\n    //   setUser(userContext);\n    // },[userContext])\n    // const {user,setUser}=useContext(UserContext);\n    const [chats, setChats] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [isRouterReady, setIsRouterReady] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    // const router = useRouter(); // Only safe to use inside useEffect\n    const [playerInfo, setPlayerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        var _user_user;\n        async function getDocumentsByQuery(collectionName, field, operator, value) {\n            if (value != undefined) {\n                console.log(value);\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, collectionName), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(field, operator, value));\n                console.log(firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query);\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setPlayerInfo(doc.data());\n                });\n            }\n        }\n        getDocumentsByQuery(\"Users\", \"email\", \"==\", user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email);\n    }, [\n        user\n    ]);\n    console.log(user.uid);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function getDocumentsWithUserId(userId) {\n            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"Chats\"); // Replace with your collection name\n            // Create a query to find documents where participants array contains the userId\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(collectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(\"participants\", \"array-contains\", userId));\n            try {\n                // Execute the query\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                // Get the total count of documents\n                const totalDocuments = querySnapshot.size;\n                console.log(\"Total documents with user ID \".concat(userId, \":\"), totalDocuments);\n                // Optionally, loop through documents if you need to access them\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setChats({\n                        ...chats,\n                        doc\n                    });\n                });\n                // setChats(querySnapshot);\n                return totalDocuments;\n            } catch (error) {\n                console.error(\"Error fetching documents:\", error);\n            }\n        }\n        // Example usage\n        const userId = user === null || user === void 0 ? void 0 : user.uid; // Replace with the user ID you're searching for\n        getDocumentsWithUserId(userId);\n    // async function getChats(collectionName, field, operator, value) {\n    //   if (value != undefined) {\n    //     console.log(value);\n    //     const q = query(\n    //       collection(db, collectionName),\n    //       where(field, operator, value)\n    //     );\n    //     console.log(query);\n    //     const querySnapshot = await getDocs(q);\n    //     querySnapshot.forEach((doc) => {\n    //       console.log(doc.id, \" => \", doc.data());\n    //       setPlayerInfo(doc.data());\n    //     });\n    //   }\n    // }\n    // getChats(\"Chats\", \"participants\", \"==\", user?.user?.email);\n    }, [\n        user\n    ]);\n    function selectContact(index) {\n        setCurrChat(index);\n    }\n    const [refinedChat, setRefinedChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (chats != null) {\n            chats.chat.map((obj)=>{\n                console.log(obj);\n                setRefinedChat({\n                    ...refinedChat,\n                    obj\n                });\n            });\n        }\n    }, [\n        chats\n    ]);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();\n    // const [user, setUser] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)(auth, (currentUser)=>{\n            setUser(currentUser);\n        });\n        // console.log(userFirebase);\n        return ()=>unsubscribe();\n    }, []);\n    // const [playerInfo, setPlayerInfo] = useState(null);\n    // useEffect(() => {\n    //   async function getDocumentsByQuery(collectionName, field, operator, value) {\n    //     if (value != undefined) {\n    //       console.log(value);\n    //       const q = query(\n    //         collection(db, collectionName),\n    //         where(field, operator, value)\n    //       );\n    //       const querySnapshot = await getDocs(q);\n    //       querySnapshot.forEach((doc) => {\n    //         console.log(doc.id, \" => \", doc.data());\n    //         setPlayerInfo(doc.data());\n    //       });\n    //     }\n    //   }\n    //   getDocumentsByQuery(\"Users\", \"email\", \"==\", user?.email);\n    // }, [user]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex flex-col flex-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userContext__WEBPACK_IMPORTED_MODULE_9__.UserProvider, {\n            user: user,\n            setUser: setUser,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 152,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sizes: [\n                        30,\n                        70\n                    ],\n                    direction: \"horizontal\",\n                    className: \"flex h-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            contact: contact,\n                            selectContact: selectContact\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 155,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            contact: contact,\n                            currChat: currChat\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 156,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 154,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n            lineNumber: 151,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n        lineNumber: 150,\n        columnNumber: 5\n    }, this);\n}\n_s(LandingPage, \"JAueemd5EP56nuc7bdh9kE5TfCo=\");\n_c = LandingPage;\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsZ0RBQWdEO0lBQ2hELHlDQUF5QztJQUN6QyxtREFBbUQ7SUFDbkQscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixRQUFRO0lBQ1IsTUFBTTtJQUVOLDhEQUE4RDtJQUM5RCxjQUFjO0lBRWQscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUN6RCxzREFBWUE7WUFBQ2EsTUFBTUE7WUFBTUMsU0FBU0E7OzhCQUNuQyw4REFBQzNCLDBEQUFNQTs7Ozs7OEJBRVAsOERBQUNHLG1EQUFLQTtvQkFBQ29FLE9BQU87d0JBQUM7d0JBQUk7cUJBQUc7b0JBQUVDLFdBQVU7b0JBQWFGLFdBQVU7O3NDQUN2RCw4REFBQ3JFLDJEQUFPQTs0QkFBQ29CLFNBQVNBOzRCQUFTdUMsZUFBZUE7Ozs7OztzQ0FDMUMsOERBQUMxRCx3REFBSUE7NEJBQUNtQixTQUFTQTs0QkFBU08sVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFDO0dBbkp3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0FwcC5qc3g/YzEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vY29tcG9uZW50cy9jaGF0XCI7XG5pbXBvcnQgU3BsaXQgZnJvbSBcInJlYWN0LXNwbGl0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL2ZpcmViYXNlXCI7ICAvLyBJbXBvcnQgdGhlIGF1dGggaW5zdGFuY2VcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIsIHVzZVVzZXIgfSBmcm9tIFwiLi91c2VyQ29udGV4dFwiO1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcbiAgY29uc3QgY29udGFjdCA9IFtcbiAgICB7IG5hbWU6IFwiR2lnYSBEb25cIiwgbXNnOiBcIlBlZW5lIENoYWxlXCIsdGltZTpEYXRlKCkgfSxcbiAgICB7IG5hbWU6IFwiRGltbGlcIiwgbXNnOiBcIkZvb2tuZSBDaGFsZVwiICx0aW1lOkRhdGUoKX0sXG4gICAgeyBuYW1lOiBcIlNpbWxpbVwiLCBtc2c6IFwiVGFoYWxuZSBDaGFsZVwiICx0aW1lOkRhdGUoKX1cbiAgXTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGNvbnN0IHVzZXJDb250ZXh0PXVzZVVzZXIoKTtcbiAgY29uc3QgW2N1cnJDaGF0LCBzZXRDdXJyQ2hhdF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodXNlckNvbnRleHQpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAvLyAgIHNldFVzZXIodXNlckNvbnRleHQpO1xuICAvLyB9LFt1c2VyQ29udGV4dF0pXG4gIC8vIGNvbnN0IHt1c2VyLHNldFVzZXJ9PXVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCBbY2hhdHMsc2V0Q2hhdHNdPVJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzUm91dGVyUmVhZHksIHNldElzUm91dGVyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvLyBPbmx5IHNhZmUgdG8gdXNlIGluc2lkZSB1c2VFZmZlY3RcbiAgY29uc3QgW3BsYXllckluZm8sIHNldFBsYXllckluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRzQnlRdWVyeShjb2xsZWN0aW9uTmFtZSwgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCBjb2xsZWN0aW9uTmFtZSksXG4gICAgICAgICAgd2hlcmUoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnkpO1xuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAgICAgICBzZXRQbGF5ZXJJbmZvKGRvYy5kYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREb2N1bWVudHNCeVF1ZXJ5KFwiVXNlcnNcIiwgXCJlbWFpbFwiLCBcIj09XCIsIHVzZXI/LnVzZXI/LmVtYWlsKTtcbiAgfSwgW3VzZXJdKTtcbmNvbnNvbGUubG9nKHVzZXIudWlkKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudHNXaXRoVXNlcklkKHVzZXJJZCkge1xuICAgICAgY29uc3QgY29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwiQ2hhdHNcIik7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvbGxlY3Rpb24gbmFtZVxuICAgICAgXG4gICAgICAvLyBDcmVhdGUgYSBxdWVyeSB0byBmaW5kIGRvY3VtZW50cyB3aGVyZSBwYXJ0aWNpcGFudHMgYXJyYXkgY29udGFpbnMgdGhlIHVzZXJJZFxuICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb25SZWYsIHdoZXJlKFwicGFydGljaXBhbnRzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgdXNlcklkKSk7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIHF1ZXJ5XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHRoZSB0b3RhbCBjb3VudCBvZiBkb2N1bWVudHNcbiAgICAgICAgY29uc3QgdG90YWxEb2N1bWVudHMgPSBxdWVyeVNuYXBzaG90LnNpemU7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkb2N1bWVudHMgd2l0aCB1c2VyIElEICR7dXNlcklkfTpgLCB0b3RhbERvY3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICAvLyBPcHRpb25hbGx5LCBsb29wIHRocm91Z2ggZG9jdW1lbnRzIGlmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGVtXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgc2V0Q2hhdHMoey4uLmNoYXRzLGRvY30pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0Q2hhdHMocXVlcnlTbmFwc2hvdCk7XG4gICAgXG4gICAgICAgIHJldHVybiB0b3RhbERvY3VtZW50cztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkb2N1bWVudHM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gRXhhbXBsZSB1c2FnZVxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LnVpZDsgLy8gUmVwbGFjZSB3aXRoIHRoZSB1c2VyIElEIHlvdSdyZSBzZWFyY2hpbmcgZm9yXG4gICAgZ2V0RG9jdW1lbnRzV2l0aFVzZXJJZCh1c2VySWQpO1xuICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGdldENoYXRzKGNvbGxlY3Rpb25OYW1lLCBmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKSB7XG4gICAgLy8gICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAvLyAgICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgIC8vICAgICAgIGNvbGxlY3Rpb24oZGIsIGNvbGxlY3Rpb25OYW1lKSxcbiAgICAvLyAgICAgICB3aGVyZShmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICAgIC8vICAgICApO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgIC8vICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAgIC8vICAgICAgIHNldFBsYXllckluZm8oZG9jLmRhdGEoKSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGdldENoYXRzKFwiQ2hhdHNcIiwgXCJwYXJ0aWNpcGFudHNcIiwgXCI9PVwiLCB1c2VyPy51c2VyPy5lbWFpbCk7XG4gICAgXG4gIH0sW3VzZXJdKVxuXG4gIGZ1bmN0aW9uIHNlbGVjdENvbnRhY3QoaW5kZXgpIHtcbiAgICBzZXRDdXJyQ2hhdChpbmRleCk7XG4gIH1cbiAgY29uc3QgW3JlZmluZWRDaGF0LHNldFJlZmluZWRDaGF0XT11c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoY2hhdHMhPW51bGwpXG4gIHsgIFxuICAgIGNoYXRzLmNoYXQubWFwKChvYmopPT57XG4gICAgY29uc29sZS5sb2cob2JqKTtcbiAgICAgIHNldFJlZmluZWRDaGF0KHsuLi5yZWZpbmVkQ2hhdCxvYmp9KVxuICAgIH0pfVxuICB9LFtjaGF0c10pXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gIC8vIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgICBzZXRVc2VyKGN1cnJlbnRVc2VyKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJGaXJlYmFzZSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcbiAgLy8gY29uc3QgW3BsYXllckluZm8sIHNldFBsYXllckluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRzQnlRdWVyeShjb2xsZWN0aW9uTmFtZSwgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSkge1xuICAvLyAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIC8vICAgICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgLy8gICAgICAgICBjb2xsZWN0aW9uKGRiLCBjb2xsZWN0aW9uTmFtZSksXG4gIC8vICAgICAgICAgd2hlcmUoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gIC8vICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gIC8vICAgICAgICAgc2V0UGxheWVySW5mbyhkb2MuZGF0YSgpKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgZ2V0RG9jdW1lbnRzQnlRdWVyeShcIlVzZXJzXCIsIFwiZW1haWxcIiwgXCI9PVwiLCB1c2VyPy5lbWFpbCk7XG4gIC8vIH0sIFt1c2VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZsZXggZmxleC1jb2wgZmxleC0xXCI+XG4gICAgICA8VXNlclByb3ZpZGVyIHVzZXI9e3VzZXJ9IHNldFVzZXI9e3NldFVzZXJ9PlxuICAgICAgPE5hdmJhciAvPlxuXG4gICAgICA8U3BsaXQgc2l6ZXM9e1szMCwgNzBdfSBkaXJlY3Rpb249XCJob3Jpem9udGFsXCIgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgXCI+XG4gICAgICAgIDxTaWRlYmFyIGNvbnRhY3Q9e2NvbnRhY3R9IHNlbGVjdENvbnRhY3Q9e3NlbGVjdENvbnRhY3R9IC8+XG4gICAgICAgIDxDaGF0IGNvbnRhY3Q9e2NvbnRhY3R9IGN1cnJDaGF0PXtjdXJyQ2hhdH0gLz5cbiAgICAgIDwvU3BsaXQ+XG4gICAgPC9Vc2VyUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiU2lkZWJhciIsIkNoYXQiLCJTcGxpdCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXV0aCIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VSb3V0ZXIiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsInVzZVVzZXIiLCJkYiIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwicXVlcnkiLCJ3aGVyZSIsIkxhbmRpbmdQYWdlIiwiY29udGFjdCIsIm5hbWUiLCJtc2ciLCJ0aW1lIiwiRGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiY3VyckNoYXQiLCJzZXRDdXJyQ2hhdCIsImNoYXRzIiwic2V0Q2hhdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzUm91dGVyUmVhZHkiLCJzZXRJc1JvdXRlclJlYWR5IiwicGxheWVySW5mbyIsInNldFBsYXllckluZm8iLCJnZXREb2N1bWVudHNCeVF1ZXJ5IiwiY29sbGVjdGlvbk5hbWUiLCJmaWVsZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwicSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiaWQiLCJkYXRhIiwiZW1haWwiLCJ1aWQiLCJnZXREb2N1bWVudHNXaXRoVXNlcklkIiwidXNlcklkIiwiY29sbGVjdGlvblJlZiIsInRvdGFsRG9jdW1lbnRzIiwic2l6ZSIsImVycm9yIiwic2VsZWN0Q29udGFjdCIsImluZGV4IiwicmVmaW5lZENoYXQiLCJzZXRSZWZpbmVkQ2hhdCIsImNoYXQiLCJtYXAiLCJvYmoiLCJ1bnN1YnNjcmliZSIsImN1cnJlbnRVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZXMiLCJkaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.jsx\n"));

/***/ })

});