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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LandingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./app/components/navbar.jsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.jsx\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat */ \"(app-pages-browser)/./app/components/chat.jsx\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/../node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the auth instance\n\n\n\n\n\nfunction LandingPage() {\n    _s();\n    const contact = [\n        {\n            name: \"Giga Don\",\n            msg: \"Peene Chale\",\n            time: Date()\n        },\n        {\n            name: \"Dimli\",\n            msg: \"Fookne Chale\",\n            time: Date()\n        },\n        {\n            name: \"Simlim\",\n            msg: \"Tahalne Chale\",\n            time: Date()\n        }\n    ];\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    // const userContext=useUser();\n    const [currChat, setCurrChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    // const [user, setUser] = useState(userContext);\n    // useEffect(()=>{\n    //   setUser(userContext);\n    // },[userContext])\n    // const {user,setUser}=useContext(UserContext);\n    const [chats, setChats] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [isRouterReady, setIsRouterReady] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    // const router = useRouter(); // Only safe to use inside useEffect\n    const [playerInfo, setPlayerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        var _user_user;\n        async function getDocumentsByQuery(collectionName, field, operator, value) {\n            if (value != undefined) {\n                console.log(value);\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, collectionName), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(field, operator, value));\n                console.log(firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query);\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setPlayerInfo(doc.data());\n                });\n            }\n        }\n        getDocumentsByQuery(\"Users\", \"email\", \"==\", user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email);\n    }, [\n        user\n    ]);\n    // console.log(user.uid)\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function getDocumentsWithUserId(userId) {\n            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"Chats\"); // Replace with your collection name\n            // Create a query to find documents where participants array contains the userId\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(collectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(\"participants\", \"array-contains\", userId));\n            try {\n                // Execute the query\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                // Get the total count of documents\n                const totalDocuments = querySnapshot.size;\n                console.log(\"Total documents with user ID \".concat(userId, \":\"), totalDocuments);\n                const newChats = [];\n                // Optionally, loop through documents if you need to access them\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    newChats.push(doc.data());\n                // setChats(...chats,doc.data().chat);\n                });\n                // setChats(querySnapshot);\n                setChats((prevChats)=>[\n                        ...prevChats,\n                        ...newChats\n                    ]);\n                return totalDocuments;\n            } catch (error) {\n                console.error(\"Error fetching documents:\", error);\n            }\n        }\n        const userId = user === null || user === void 0 ? void 0 : user.uid; // Replace with the user ID you're searching for\n        getDocumentsWithUserId(userId);\n    }, [\n        user\n    ]);\n    function selectContact(id) {\n        setCurrChat(index);\n    }\n    const [refinedChat, setRefinedChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    // useEffect(()=>{\n    //   if(chats!=null)\n    // {  \n    //   console.log(chats);\n    //   chats.map((obj)=>{\n    //   console.log(obj);\n    //   if(obj!==undefined)\n    //     setRefinedChat([...refinedChat,obj])\n    //   })\n    // }\n    // },[chats])\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();\n    // const [user, setUser] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)(auth, (currentUser)=>{\n            setUser(currentUser);\n        });\n        // console.log(userFirebase);\n        return ()=>unsubscribe();\n    }, []);\n    // const [playerInfo, setPlayerInfo] = useState(null);\n    // useEffect(() => {\n    //   async function getDocumentsByQuery(collectionName, field, operator, value) {\n    //     if (value != undefined) {\n    //       console.log(value);\n    //       const q = query(\n    //         collection(db, collectionName),\n    //         where(field, operator, value)\n    //       );\n    //       const querySnapshot = await getDocs(q);\n    //       querySnapshot.forEach((doc) => {\n    //         console.log(doc.id, \" => \", doc.data());\n    //         setPlayerInfo(doc.data());\n    //       });\n    //     }\n    //   }\n    //   getDocumentsByQuery(\"Users\", \"email\", \"==\", user?.email);\n    // }, [user]);\n    console.log(chats);\n    console.log(refinedChat);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex flex-col flex-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userContext__WEBPACK_IMPORTED_MODULE_9__.UserProvider, {\n            user: user,\n            setUser: setUser,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 141,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sizes: [\n                        30,\n                        70\n                    ],\n                    direction: \"horizontal\",\n                    className: \"flex h-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            contact: contact,\n                            selectContact: selectContact,\n                            chats: chats,\n                            userId: user.uid\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            contact: contact,\n                            currChat: currChat\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 146,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 144,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n            lineNumber: 140,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, this);\n}\n_s(LandingPage, \"np1ywWfLrzH4lILkwLLyuKarjv8=\");\n_c = LandingPage;\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDekQsc0RBQVlBO1lBQUNhLE1BQU1BO1lBQU1DLFNBQVNBOzs4QkFDbkMsOERBQUMzQiwwREFBTUE7Ozs7OzhCQUdQLDhEQUFDRyxtREFBS0E7b0JBQUNvRSxPQUFPO3dCQUFDO3dCQUFJO3FCQUFHO29CQUFFQyxXQUFVO29CQUFhRixXQUFVOztzQ0FDdkQsOERBQUNyRSwyREFBT0E7NEJBQUNvQixTQUFTQTs0QkFBUzBDLGVBQWVBOzRCQUFlakMsT0FBT0E7NEJBQU93QixRQUFRNUIsS0FBS29DLEdBQUc7Ozs7OztzQ0FDdkYsOERBQUM1RCx3REFBSUE7NEJBQUNtQixTQUFTQTs0QkFBU08sVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDO0dBMUl3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0FwcC5qc3g/YzEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vY29tcG9uZW50cy9jaGF0XCI7XG5pbXBvcnQgU3BsaXQgZnJvbSBcInJlYWN0LXNwbGl0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL2ZpcmViYXNlXCI7ICAvLyBJbXBvcnQgdGhlIGF1dGggaW5zdGFuY2VcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIsIHVzZVVzZXIgfSBmcm9tIFwiLi91c2VyQ29udGV4dFwiO1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcbiAgY29uc3QgY29udGFjdCA9IFtcbiAgICB7IG5hbWU6IFwiR2lnYSBEb25cIiwgbXNnOiBcIlBlZW5lIENoYWxlXCIsdGltZTpEYXRlKCkgfSxcbiAgICB7IG5hbWU6IFwiRGltbGlcIiwgbXNnOiBcIkZvb2tuZSBDaGFsZVwiICx0aW1lOkRhdGUoKX0sXG4gICAgeyBuYW1lOiBcIlNpbWxpbVwiLCBtc2c6IFwiVGFoYWxuZSBDaGFsZVwiICx0aW1lOkRhdGUoKX1cbiAgXTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGNvbnN0IHVzZXJDb250ZXh0PXVzZVVzZXIoKTtcbiAgY29uc3QgW2N1cnJDaGF0LCBzZXRDdXJyQ2hhdF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodXNlckNvbnRleHQpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAvLyAgIHNldFVzZXIodXNlckNvbnRleHQpO1xuICAvLyB9LFt1c2VyQ29udGV4dF0pXG4gIC8vIGNvbnN0IHt1c2VyLHNldFVzZXJ9PXVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCBbY2hhdHMsc2V0Q2hhdHNdPVJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc1JvdXRlclJlYWR5LCBzZXRJc1JvdXRlclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gT25seSBzYWZlIHRvIHVzZSBpbnNpZGUgdXNlRWZmZWN0XG4gIGNvbnN0IFtwbGF5ZXJJbmZvLCBzZXRQbGF5ZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50c0J5UXVlcnkoY29sbGVjdGlvbk5hbWUsIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBjb25zdCBxID0gcXVlcnkoXG4gICAgICAgICAgY29sbGVjdGlvbihkYiwgY29sbGVjdGlvbk5hbWUpLFxuICAgICAgICAgIHdoZXJlKGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgc2V0UGxheWVySW5mbyhkb2MuZGF0YSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnRzQnlRdWVyeShcIlVzZXJzXCIsIFwiZW1haWxcIiwgXCI9PVwiLCB1c2VyPy51c2VyPy5lbWFpbCk7XG4gIH0sIFt1c2VyXSk7XG4vLyBjb25zb2xlLmxvZyh1c2VyLnVpZClcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRzV2l0aFVzZXJJZCh1c2VySWQpIHtcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKGRiLCBcIkNoYXRzXCIpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb2xsZWN0aW9uIG5hbWVcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGEgcXVlcnkgdG8gZmluZCBkb2N1bWVudHMgd2hlcmUgcGFydGljaXBhbnRzIGFycmF5IGNvbnRhaW5zIHRoZSB1c2VySWRcbiAgICAgIGNvbnN0IHEgPSBxdWVyeShjb2xsZWN0aW9uUmVmLCB3aGVyZShcInBhcnRpY2lwYW50c1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIHVzZXJJZCkpO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHRoZSBxdWVyeVxuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCB0aGUgdG90YWwgY291bnQgb2YgZG9jdW1lbnRzXG4gICAgICAgIGNvbnN0IHRvdGFsRG9jdW1lbnRzID0gcXVlcnlTbmFwc2hvdC5zaXplO1xuICAgICAgICBjb25zb2xlLmxvZyhgVG90YWwgZG9jdW1lbnRzIHdpdGggdXNlciBJRCAke3VzZXJJZH06YCwgdG90YWxEb2N1bWVudHMpO1xuICAgICAgICBjb25zdCBuZXdDaGF0cyA9IFtdO1xuICAgICAgICAvLyBPcHRpb25hbGx5LCBsb29wIHRocm91Z2ggZG9jdW1lbnRzIGlmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGVtXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgbmV3Q2hhdHMucHVzaChkb2MuZGF0YSgpKTtcbiAgICAgICAgICAvLyBzZXRDaGF0cyguLi5jaGF0cyxkb2MuZGF0YSgpLmNoYXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0Q2hhdHMocXVlcnlTbmFwc2hvdCk7XG4gICAgICAgIHNldENoYXRzKChwcmV2Q2hhdHMpID0+IFsuLi5wcmV2Q2hhdHMsIC4uLm5ld0NoYXRzXSk7XG4gICAgICAgIHJldHVybiB0b3RhbERvY3VtZW50cztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkb2N1bWVudHM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIFxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LnVpZDsgLy8gUmVwbGFjZSB3aXRoIHRoZSB1c2VyIElEIHlvdSdyZSBzZWFyY2hpbmcgZm9yXG4gICAgZ2V0RG9jdW1lbnRzV2l0aFVzZXJJZCh1c2VySWQpO1xuICAgIFxuICAgIFxuICB9LFt1c2VyXSlcblxuICBmdW5jdGlvbiBzZWxlY3RDb250YWN0KGlkKSB7XG4gICAgc2V0Q3VyckNoYXQoaW5kZXgpO1xuICB9XG4gIGNvbnN0IFtyZWZpbmVkQ2hhdCxzZXRSZWZpbmVkQ2hhdF09dXNlU3RhdGUoW10pO1xuICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgLy8gICBpZihjaGF0cyE9bnVsbClcbiAgLy8geyAgXG4gIC8vICAgY29uc29sZS5sb2coY2hhdHMpO1xuICAvLyAgIGNoYXRzLm1hcCgob2JqKT0+e1xuICAvLyAgIGNvbnNvbGUubG9nKG9iaik7XG4gIC8vICAgaWYob2JqIT09dW5kZWZpbmVkKVxuICAvLyAgICAgc2V0UmVmaW5lZENoYXQoWy4uLnJlZmluZWRDaGF0LG9ial0pXG4gIC8vICAgfSlcbiAgLy8gfVxuICAvLyB9LFtjaGF0c10pXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gIC8vIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgICBzZXRVc2VyKGN1cnJlbnRVc2VyKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJGaXJlYmFzZSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcbiAgLy8gY29uc3QgW3BsYXllckluZm8sIHNldFBsYXllckluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRzQnlRdWVyeShjb2xsZWN0aW9uTmFtZSwgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSkge1xuICAvLyAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIC8vICAgICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgLy8gICAgICAgICBjb2xsZWN0aW9uKGRiLCBjb2xsZWN0aW9uTmFtZSksXG4gIC8vICAgICAgICAgd2hlcmUoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gIC8vICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gIC8vICAgICAgICAgc2V0UGxheWVySW5mbyhkb2MuZGF0YSgpKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgZ2V0RG9jdW1lbnRzQnlRdWVyeShcIlVzZXJzXCIsIFwiZW1haWxcIiwgXCI9PVwiLCB1c2VyPy5lbWFpbCk7XG4gIC8vIH0sIFt1c2VyXSk7XG4gIGNvbnNvbGUubG9nKGNoYXRzKTtcbiAgY29uc29sZS5sb2cocmVmaW5lZENoYXQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBmbGV4LWNvbCBmbGV4LTFcIj5cbiAgICAgIDxVc2VyUHJvdmlkZXIgdXNlcj17dXNlcn0gc2V0VXNlcj17c2V0VXNlcn0+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgIFxuICAgICAgPFNwbGl0IHNpemVzPXtbMzAsIDcwXX0gZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIFwiPlxuICAgICAgICA8U2lkZWJhciBjb250YWN0PXtjb250YWN0fSBzZWxlY3RDb250YWN0PXtzZWxlY3RDb250YWN0fSBjaGF0cz17Y2hhdHN9IHVzZXJJZD17dXNlci51aWR9Lz5cbiAgICAgICAgPENoYXQgY29udGFjdD17Y29udGFjdH0gY3VyckNoYXQ9e2N1cnJDaGF0fSAvPlxuICAgICAgPC9TcGxpdD5cbiAgICAgICBcbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJTaWRlYmFyIiwiQ2hhdCIsIlNwbGl0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhdXRoIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwidXNlVXNlciIsImRiIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiTGFuZGluZ1BhZ2UiLCJjb250YWN0IiwibmFtZSIsIm1zZyIsInRpbWUiLCJEYXRlIiwidXNlciIsInNldFVzZXIiLCJjdXJyQ2hhdCIsInNldEN1cnJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNSb3V0ZXJSZWFkeSIsInNldElzUm91dGVyUmVhZHkiLCJwbGF5ZXJJbmZvIiwic2V0UGxheWVySW5mbyIsImdldERvY3VtZW50c0J5UXVlcnkiLCJjb2xsZWN0aW9uTmFtZSIsImZpZWxkIiwib3BlcmF0b3IiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJxIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJpZCIsImRhdGEiLCJlbWFpbCIsImdldERvY3VtZW50c1dpdGhVc2VySWQiLCJ1c2VySWQiLCJjb2xsZWN0aW9uUmVmIiwidG90YWxEb2N1bWVudHMiLCJzaXplIiwibmV3Q2hhdHMiLCJwdXNoIiwicHJldkNoYXRzIiwiZXJyb3IiLCJ1aWQiLCJzZWxlY3RDb250YWN0IiwiaW5kZXgiLCJyZWZpbmVkQ2hhdCIsInNldFJlZmluZWRDaGF0IiwidW5zdWJzY3JpYmUiLCJjdXJyZW50VXNlciIsImRpdiIsImNsYXNzTmFtZSIsInNpemVzIiwiZGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.jsx\n"));

/***/ })

});