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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LandingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./app/components/navbar.jsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.jsx\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat */ \"(app-pages-browser)/./app/components/chat.jsx\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/../node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the auth instance\n\n\n\n\n\nfunction LandingPage() {\n    _s();\n    const contact = [\n        {\n            name: \"Giga Don\",\n            msg: \"Peene Chale\",\n            time: Date()\n        },\n        {\n            name: \"Dimli\",\n            msg: \"Fookne Chale\",\n            time: Date()\n        },\n        {\n            name: \"Simlim\",\n            msg: \"Tahalne Chale\",\n            time: Date()\n        }\n    ];\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    // const userContext=useUser();\n    const [currChat, setCurrChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    // const [user, setUser] = useState(userContext);\n    // useEffect(()=>{\n    //   setUser(userContext);\n    // },[userContext])\n    // const {user,setUser}=useContext(UserContext);\n    const [chats, setChats] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [isRouterReady, setIsRouterReady] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    // const router = useRouter(); // Only safe to use inside useEffect\n    const [playerInfo, setPlayerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        var _user_user;\n        async function getDocumentsByQuery(collectionName, field, operator, value) {\n            if (value != undefined) {\n                console.log(value);\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, collectionName), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(field, operator, value));\n                console.log(firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query);\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setPlayerInfo(doc.data());\n                });\n            }\n        }\n        getDocumentsByQuery(\"Users\", \"email\", \"==\", user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email);\n    }, [\n        user\n    ]);\n    // console.log(user.uid)\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function getDocumentsWithUserId(userId) {\n            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"Chats\"); // Replace with your collection name\n            // Create a query to find documents where participants array contains the userId\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(collectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(\"participants\", \"array-contains\", userId));\n            try {\n                // Execute the query\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                // Get the total count of documents\n                const totalDocuments = querySnapshot.size;\n                console.log(\"Total documents with user ID \".concat(userId, \":\"), totalDocuments);\n                const newChats = [];\n                // Optionally, loop through documents if you need to access them\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    newChats.push(doc.data().chat);\n                // setChats(...chats,doc.data().chat);\n                });\n                // setChats(querySnapshot);\n                setChats((prevChats)=>[\n                        ...prevChats,\n                        ...newChats\n                    ]);\n                return totalDocuments;\n            } catch (error) {\n                console.error(\"Error fetching documents:\", error);\n            }\n        }\n        const userId = user === null || user === void 0 ? void 0 : user.uid; // Replace with the user ID you're searching for\n        getDocumentsWithUserId(userId);\n    }, [\n        user\n    ]);\n    function selectContact(index) {\n        setCurrChat(index);\n    }\n    const [refinedChat, setRefinedChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (chats != null) {\n            console.log(chats);\n        // chats.chat.map((obj)=>{\n        // console.log(obj);\n        //   setRefinedChat({...refinedChat,obj})\n        // })\n        }\n    }, [\n        chats\n    ]);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();\n    // const [user, setUser] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)(auth, (currentUser)=>{\n            setUser(currentUser);\n        });\n        // console.log(userFirebase);\n        return ()=>unsubscribe();\n    }, []);\n    // const [playerInfo, setPlayerInfo] = useState(null);\n    // useEffect(() => {\n    //   async function getDocumentsByQuery(collectionName, field, operator, value) {\n    //     if (value != undefined) {\n    //       console.log(value);\n    //       const q = query(\n    //         collection(db, collectionName),\n    //         where(field, operator, value)\n    //       );\n    //       const querySnapshot = await getDocs(q);\n    //       querySnapshot.forEach((doc) => {\n    //         console.log(doc.id, \" => \", doc.data());\n    //         setPlayerInfo(doc.data());\n    //       });\n    //     }\n    //   }\n    //   getDocumentsByQuery(\"Users\", \"email\", \"==\", user?.email);\n    // }, [user]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex flex-col flex-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userContext__WEBPACK_IMPORTED_MODULE_9__.UserProvider, {\n            user: user,\n            setUser: setUser,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 139,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sizes: [\n                        30,\n                        70\n                    ],\n                    direction: \"horizontal\",\n                    className: \"flex h-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            contact: contact,\n                            selectContact: selectContact\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 142,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            contact: contact,\n                            currChat: currChat\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 143,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 141,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n            lineNumber: 138,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n}\n_s(LandingPage, \"FDJFqPBwUYTNYTB0uC3WHVLRExU=\");\n_c = LandingPage;\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1BO1lBQU1DLFNBQVNBOzs4QkFDbkMsOERBQUMzQiwwREFBTUE7Ozs7OzhCQUVQLDhEQUFDRyxtREFBS0E7b0JBQUNxRSxPQUFPO3dCQUFDO3dCQUFJO3FCQUFHO29CQUFFQyxXQUFVO29CQUFhRixXQUFVOztzQ0FDdkQsOERBQUN0RSwyREFBT0E7NEJBQUNvQixTQUFTQTs0QkFBUzJDLGVBQWVBOzs7Ozs7c0NBQzFDLDhEQUFDOUQsd0RBQUlBOzRCQUFDbUIsU0FBU0E7NEJBQVNPLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQXRJd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9BcHAuanN4P2MxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCBDaGF0IGZyb20gXCIuL2NvbXBvbmVudHMvY2hhdFwiO1xuaW1wb3J0IFNwbGl0IGZyb20gXCJyZWFjdC1zcGxpdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiOyAgLy8gSW1wb3J0IHRoZSBhdXRoIGluc3RhbmNlXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyLCB1c2VVc2VyIH0gZnJvbSBcIi4vdXNlckNvbnRleHRcIjtcblxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgcXVlcnksIHdoZXJlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBbXG4gICAgeyBuYW1lOiBcIkdpZ2EgRG9uXCIsIG1zZzogXCJQZWVuZSBDaGFsZVwiLHRpbWU6RGF0ZSgpIH0sXG4gICAgeyBuYW1lOiBcIkRpbWxpXCIsIG1zZzogXCJGb29rbmUgQ2hhbGVcIiAsdGltZTpEYXRlKCl9LFxuICAgIHsgbmFtZTogXCJTaW1saW1cIiwgbXNnOiBcIlRhaGFsbmUgQ2hhbGVcIiAsdGltZTpEYXRlKCl9XG4gIF07XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCB1c2VyQ29udGV4dD11c2VVc2VyKCk7XG4gIGNvbnN0IFtjdXJyQ2hhdCwgc2V0Q3VyckNoYXRdID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHVzZXJDb250ZXh0KTtcblxuICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgLy8gICBzZXRVc2VyKHVzZXJDb250ZXh0KTtcbiAgLy8gfSxbdXNlckNvbnRleHRdKVxuICAvLyBjb25zdCB7dXNlcixzZXRVc2VyfT11c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3QgW2NoYXRzLHNldENoYXRzXT1SZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc1JvdXRlclJlYWR5LCBzZXRJc1JvdXRlclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gT25seSBzYWZlIHRvIHVzZSBpbnNpZGUgdXNlRWZmZWN0XG4gIGNvbnN0IFtwbGF5ZXJJbmZvLCBzZXRQbGF5ZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50c0J5UXVlcnkoY29sbGVjdGlvbk5hbWUsIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBjb25zdCBxID0gcXVlcnkoXG4gICAgICAgICAgY29sbGVjdGlvbihkYiwgY29sbGVjdGlvbk5hbWUpLFxuICAgICAgICAgIHdoZXJlKGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgc2V0UGxheWVySW5mbyhkb2MuZGF0YSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnRzQnlRdWVyeShcIlVzZXJzXCIsIFwiZW1haWxcIiwgXCI9PVwiLCB1c2VyPy51c2VyPy5lbWFpbCk7XG4gIH0sIFt1c2VyXSk7XG4vLyBjb25zb2xlLmxvZyh1c2VyLnVpZClcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRzV2l0aFVzZXJJZCh1c2VySWQpIHtcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKGRiLCBcIkNoYXRzXCIpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb2xsZWN0aW9uIG5hbWVcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGEgcXVlcnkgdG8gZmluZCBkb2N1bWVudHMgd2hlcmUgcGFydGljaXBhbnRzIGFycmF5IGNvbnRhaW5zIHRoZSB1c2VySWRcbiAgICAgIGNvbnN0IHEgPSBxdWVyeShjb2xsZWN0aW9uUmVmLCB3aGVyZShcInBhcnRpY2lwYW50c1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIHVzZXJJZCkpO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHRoZSBxdWVyeVxuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCB0aGUgdG90YWwgY291bnQgb2YgZG9jdW1lbnRzXG4gICAgICAgIGNvbnN0IHRvdGFsRG9jdW1lbnRzID0gcXVlcnlTbmFwc2hvdC5zaXplO1xuICAgICAgICBjb25zb2xlLmxvZyhgVG90YWwgZG9jdW1lbnRzIHdpdGggdXNlciBJRCAke3VzZXJJZH06YCwgdG90YWxEb2N1bWVudHMpO1xuICAgICAgICBjb25zdCBuZXdDaGF0cyA9IFtdO1xuICAgICAgICAvLyBPcHRpb25hbGx5LCBsb29wIHRocm91Z2ggZG9jdW1lbnRzIGlmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGVtXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgbmV3Q2hhdHMucHVzaChkb2MuZGF0YSgpLmNoYXQpO1xuICAgICAgICAgIC8vIHNldENoYXRzKC4uLmNoYXRzLGRvYy5kYXRhKCkuY2hhdCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBzZXRDaGF0cyhxdWVyeVNuYXBzaG90KTtcbiAgICAgICAgc2V0Q2hhdHMoKHByZXZDaGF0cykgPT4gWy4uLnByZXZDaGF0cywgLi4ubmV3Q2hhdHNdKTtcbiAgICAgICAgcmV0dXJuIHRvdGFsRG9jdW1lbnRzO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRvY3VtZW50czpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgXG4gICAgY29uc3QgdXNlcklkID0gdXNlcj8udWlkOyAvLyBSZXBsYWNlIHdpdGggdGhlIHVzZXIgSUQgeW91J3JlIHNlYXJjaGluZyBmb3JcbiAgICBnZXREb2N1bWVudHNXaXRoVXNlcklkKHVzZXJJZCk7XG4gICAgXG4gICAgXG4gIH0sW3VzZXJdKVxuXG4gIGZ1bmN0aW9uIHNlbGVjdENvbnRhY3QoaW5kZXgpIHtcbiAgICBzZXRDdXJyQ2hhdChpbmRleCk7XG4gIH1cbiAgY29uc3QgW3JlZmluZWRDaGF0LHNldFJlZmluZWRDaGF0XT11c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoY2hhdHMhPW51bGwpXG4gIHsgIFxuICAgIGNvbnNvbGUubG9nKGNoYXRzKTtcbiAgICAvLyBjaGF0cy5jaGF0Lm1hcCgob2JqKT0+e1xuICAgIC8vIGNvbnNvbGUubG9nKG9iaik7XG4gICAgLy8gICBzZXRSZWZpbmVkQ2hhdCh7Li4ucmVmaW5lZENoYXQsb2JqfSlcbiAgICAvLyB9KVxuICB9XG4gIH0sW2NoYXRzXSlcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgLy8gY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAoY3VycmVudFVzZXIpID0+IHtcbiAgICAgIHNldFVzZXIoY3VycmVudFVzZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2codXNlckZpcmViYXNlKTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pO1xuICAvLyBjb25zdCBbcGxheWVySW5mbywgc2V0UGxheWVySW5mb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudHNCeVF1ZXJ5KGNvbGxlY3Rpb25OYW1lLCBmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKSB7XG4gIC8vICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgLy8gICAgICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAvLyAgICAgICAgIGNvbGxlY3Rpb24oZGIsIGNvbGxlY3Rpb25OYW1lKSxcbiAgLy8gICAgICAgICB3aGVyZShmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICAvLyAgICAgICApO1xuICAvLyAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgLy8gICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgLy8gICAgICAgICBzZXRQbGF5ZXJJbmZvKGRvYy5kYXRhKCkpO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gICBnZXREb2N1bWVudHNCeVF1ZXJ5KFwiVXNlcnNcIiwgXCJlbWFpbFwiLCBcIj09XCIsIHVzZXI/LmVtYWlsKTtcbiAgLy8gfSwgW3VzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBmbGV4LWNvbCBmbGV4LTFcIj5cbiAgICAgIDxVc2VyUHJvdmlkZXIgdXNlcj17dXNlcn0gc2V0VXNlcj17c2V0VXNlcn0+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIDxTcGxpdCBzaXplcz17WzMwLCA3MF19IGRpcmVjdGlvbj1cImhvcml6b250YWxcIiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBcIj5cbiAgICAgICAgPFNpZGViYXIgY29udGFjdD17Y29udGFjdH0gc2VsZWN0Q29udGFjdD17c2VsZWN0Q29udGFjdH0gLz5cbiAgICAgICAgPENoYXQgY29udGFjdD17Y29udGFjdH0gY3VyckNoYXQ9e2N1cnJDaGF0fSAvPlxuICAgICAgPC9TcGxpdD5cbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJTaWRlYmFyIiwiQ2hhdCIsIlNwbGl0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhdXRoIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwidXNlVXNlciIsImRiIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiTGFuZGluZ1BhZ2UiLCJjb250YWN0IiwibmFtZSIsIm1zZyIsInRpbWUiLCJEYXRlIiwidXNlciIsInNldFVzZXIiLCJjdXJyQ2hhdCIsInNldEN1cnJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNSb3V0ZXJSZWFkeSIsInNldElzUm91dGVyUmVhZHkiLCJwbGF5ZXJJbmZvIiwic2V0UGxheWVySW5mbyIsImdldERvY3VtZW50c0J5UXVlcnkiLCJjb2xsZWN0aW9uTmFtZSIsImZpZWxkIiwib3BlcmF0b3IiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJxIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJpZCIsImRhdGEiLCJlbWFpbCIsImdldERvY3VtZW50c1dpdGhVc2VySWQiLCJ1c2VySWQiLCJjb2xsZWN0aW9uUmVmIiwidG90YWxEb2N1bWVudHMiLCJzaXplIiwibmV3Q2hhdHMiLCJwdXNoIiwiY2hhdCIsInByZXZDaGF0cyIsImVycm9yIiwidWlkIiwic2VsZWN0Q29udGFjdCIsImluZGV4IiwicmVmaW5lZENoYXQiLCJzZXRSZWZpbmVkQ2hhdCIsInVuc3Vic2NyaWJlIiwiY3VycmVudFVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplcyIsImRpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.jsx\n"));

/***/ })

});