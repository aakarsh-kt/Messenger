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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LandingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./app/components/navbar.jsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.jsx\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat */ \"(app-pages-browser)/./app/components/chat.jsx\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/../node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the auth instance\n\n\n\n\n\nfunction LandingPage() {\n    _s();\n    const contact = [\n        {\n            name: \"Giga Don\",\n            msg: \"Peene Chale\",\n            time: Date()\n        },\n        {\n            name: \"Dimli\",\n            msg: \"Fookne Chale\",\n            time: Date()\n        },\n        {\n            name: \"Simlim\",\n            msg: \"Tahalne Chale\",\n            time: Date()\n        }\n    ];\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    // const userContext=useUser();\n    const [currChat, setCurrChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    // const [user, setUser] = useState(userContext);\n    // useEffect(()=>{\n    //   setUser(userContext);\n    // },[userContext])\n    // const {user,setUser}=useContext(UserContext);\n    const [chats, setChats] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [isRouterReady, setIsRouterReady] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    // const router = useRouter(); // Only safe to use inside useEffect\n    const [playerInfo, setPlayerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        var _user_user;\n        async function getDocumentsByQuery(collectionName, field, operator, value) {\n            if (value != undefined) {\n                console.log(value);\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, collectionName), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(field, operator, value));\n                console.log(firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query);\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setPlayerInfo(doc.data());\n                });\n            }\n        }\n        if (user != null) getDocumentsByQuery(\"Users\", \"email\", \"==\", user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email);\n    }, [\n        user\n    ]);\n    // console.log(user.uid)\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function getDocumentsWithUserId(userId) {\n            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"Chats\"); // Replace with your collection name\n            // Create a query to find documents where participants array contains the userId\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(collectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(\"participants\", \"array-contains\", userId));\n            try {\n                // Execute the query\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                // Get the total count of documents\n                const totalDocuments = querySnapshot.size;\n                console.log(\"Total documents with user ID \".concat(userId, \":\"), totalDocuments);\n                const newChats = [];\n                // Optionally, loop through documents if you need to access them\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    newChats.push({\n                        \"data\": doc.data(),\n                        \"chatId\": doc.id\n                    });\n                // setChats(...chats,doc.data().chat);\n                });\n                // setChats(querySnapshot);\n                setChats((prevChats)=>[\n                        ...prevChats,\n                        ...newChats\n                    ]);\n                return totalDocuments;\n            } catch (error) {\n                console.error(\"Error fetching documents:\", error);\n            }\n        }\n        const userId = user === null || user === void 0 ? void 0 : user.uid; // Replace with the user ID you're searching for\n        getDocumentsWithUserId(userId);\n    }, [\n        user\n    ]);\n    const [profileId, setProfileId] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(\"\");\n    function selectContact(id, chatId) {\n        setProfileId(id);\n        setCurrChat(chatId);\n    }\n    const [refinedChat, setRefinedChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    // useEffect(()=>{\n    //   if(chats!=null)\n    // {  \n    //   console.log(chats);\n    //   chats.map((obj)=>{\n    //   console.log(obj);\n    //   if(obj!==undefined)\n    //     setRefinedChat([...refinedChat,obj])\n    //   })\n    // }\n    // },[chats])\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();\n    // const [user, setUser] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)(auth, (currentUser)=>{\n            setUser(currentUser);\n        });\n        // console.log(userFirebase);\n        return ()=>unsubscribe();\n    }, []);\n    // const [playerInfo, setPlayerInfo] = useState(null);\n    // useEffect(() => {\n    //   async function getDocumentsByQuery(collectionName, field, operator, value) {\n    //     if (value != undefined) {\n    //       console.log(value);\n    //       const q = query(\n    //         collection(db, collectionName),\n    //         where(field, operator, value)\n    //       );\n    //       const querySnapshot = await getDocs(q);\n    //       querySnapshot.forEach((doc) => {\n    //         console.log(doc.id, \" => \", doc.data());\n    //         setPlayerInfo(doc.data());\n    //       });\n    //     }\n    //   }\n    //   getDocumentsByQuery(\"Users\", \"email\", \"==\", user?.email);\n    // }, [user]);\n    console.log(chats);\n    console.log(refinedChat);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex flex-col flex-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userContext__WEBPACK_IMPORTED_MODULE_9__.UserProvider, {\n            user: user,\n            setUser: setUser,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sizes: [\n                        30,\n                        70\n                    ],\n                    direction: \"horizontal\",\n                    className: \"flex h-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            contact: contact,\n                            selectContact: selectContact,\n                            chats: chats,\n                            userId: user != null ? user === null || user === void 0 ? void 0 : user.uid : \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 146,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            contact: contact,\n                            currChat: currChat,\n                            profileId: profileId,\n                            chats: chats,\n                            userId: user != null ? user === null || user === void 0 ? void 0 : user.uid : \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 147,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 145,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n            lineNumber: 141,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this);\n}\n_s(LandingPage, \"8GyThLQCFQy/pCGHq7w8Jy6JCNU=\");\n_c = LandingPage;\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkQscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixRQUFRO0lBQ1IsTUFBTTtJQUVOLDhEQUE4RDtJQUM5RCxjQUFjO0lBQ2R6QixRQUFRQyxHQUFHLENBQUNmO0lBQ1pjLFFBQVFDLEdBQUcsQ0FBQ3NCO0lBQ1oscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUMzRCxzREFBWUE7WUFBQ2EsTUFBTUE7WUFBTUMsU0FBU0E7OzhCQUNqQyw4REFBQzNCLDBEQUFNQTs7Ozs7OEJBR1AsOERBQUNHLG1EQUFLQTtvQkFBQ3NFLE9BQU87d0JBQUM7d0JBQUk7cUJBQUc7b0JBQUVDLFdBQVU7b0JBQWFGLFdBQVU7O3NDQUN2RCw4REFBQ3ZFLDJEQUFPQTs0QkFBQ29CLFNBQVNBOzRCQUFTNEMsZUFBZUE7NEJBQWVuQyxPQUFPQTs0QkFBT3dCLFFBQVE1QixRQUFRLE9BQU9BLGlCQUFBQSwyQkFBQUEsS0FBTW9DLEdBQUcsR0FBRzs7Ozs7O3NDQUMxRyw4REFBQzVELHdEQUFJQTs0QkFBQ21CLFNBQVNBOzRCQUNkTyxVQUFVQTs0QkFDVm1DLFdBQVdBOzRCQUNYakMsT0FBT0E7NEJBQU93QixRQUFRNUIsUUFBUSxPQUFPQSxpQkFBQUEsMkJBQUFBLEtBQU1vQyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVEO0dBaEp3QjFDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9BcHAuanN4P2MxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCBDaGF0IGZyb20gXCIuL2NvbXBvbmVudHMvY2hhdFwiO1xuaW1wb3J0IFNwbGl0IGZyb20gXCJyZWFjdC1zcGxpdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiOyAgLy8gSW1wb3J0IHRoZSBhdXRoIGluc3RhbmNlXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyLCB1c2VVc2VyIH0gZnJvbSBcIi4vdXNlckNvbnRleHRcIjtcblxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgcXVlcnksIHdoZXJlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBbXG4gICAgeyBuYW1lOiBcIkdpZ2EgRG9uXCIsIG1zZzogXCJQZWVuZSBDaGFsZVwiLCB0aW1lOiBEYXRlKCkgfSxcbiAgICB7IG5hbWU6IFwiRGltbGlcIiwgbXNnOiBcIkZvb2tuZSBDaGFsZVwiLCB0aW1lOiBEYXRlKCkgfSxcbiAgICB7IG5hbWU6IFwiU2ltbGltXCIsIG1zZzogXCJUYWhhbG5lIENoYWxlXCIsIHRpbWU6IERhdGUoKSB9XG4gIF07XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCB1c2VyQ29udGV4dD11c2VVc2VyKCk7XG4gIGNvbnN0IFtjdXJyQ2hhdCwgc2V0Q3VyckNoYXRdID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHVzZXJDb250ZXh0KTtcblxuICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgLy8gICBzZXRVc2VyKHVzZXJDb250ZXh0KTtcbiAgLy8gfSxbdXNlckNvbnRleHRdKVxuICAvLyBjb25zdCB7dXNlcixzZXRVc2VyfT11c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNSb3V0ZXJSZWFkeSwgc2V0SXNSb3V0ZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IC8vIE9ubHkgc2FmZSB0byB1c2UgaW5zaWRlIHVzZUVmZmVjdFxuICBjb25zdCBbcGxheWVySW5mbywgc2V0UGxheWVySW5mb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudHNCeVF1ZXJ5KGNvbGxlY3Rpb25OYW1lLCBmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgICAgICAgIGNvbGxlY3Rpb24oZGIsIGNvbGxlY3Rpb25OYW1lKSxcbiAgICAgICAgICB3aGVyZShmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAgICAgICAgIHNldFBsYXllckluZm8oZG9jLmRhdGEoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodXNlciAhPSBudWxsKVxuICAgICAgZ2V0RG9jdW1lbnRzQnlRdWVyeShcIlVzZXJzXCIsIFwiZW1haWxcIiwgXCI9PVwiLCB1c2VyPy51c2VyPy5lbWFpbCk7XG4gIH0sIFt1c2VyXSk7XG4gIC8vIGNvbnNvbGUubG9nKHVzZXIudWlkKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZW50c1dpdGhVc2VySWQodXNlcklkKSB7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJDaGF0c1wiKTsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgY29sbGVjdGlvbiBuYW1lXG5cbiAgICAgIC8vIENyZWF0ZSBhIHF1ZXJ5IHRvIGZpbmQgZG9jdW1lbnRzIHdoZXJlIHBhcnRpY2lwYW50cyBhcnJheSBjb250YWlucyB0aGUgdXNlcklkXG4gICAgICBjb25zdCBxID0gcXVlcnkoY29sbGVjdGlvblJlZiwgd2hlcmUoXCJwYXJ0aWNpcGFudHNcIiwgXCJhcnJheS1jb250YWluc1wiLCB1c2VySWQpKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgcXVlcnlcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSB0b3RhbCBjb3VudCBvZiBkb2N1bWVudHNcbiAgICAgICAgY29uc3QgdG90YWxEb2N1bWVudHMgPSBxdWVyeVNuYXBzaG90LnNpemU7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkb2N1bWVudHMgd2l0aCB1c2VyIElEICR7dXNlcklkfTpgLCB0b3RhbERvY3VtZW50cyk7XG4gICAgICAgIGNvbnN0IG5ld0NoYXRzID0gW107XG4gICAgICAgIC8vIE9wdGlvbmFsbHksIGxvb3AgdGhyb3VnaCBkb2N1bWVudHMgaWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZW1cbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAgICAgICBuZXdDaGF0cy5wdXNoKHsgXCJkYXRhXCI6IGRvYy5kYXRhKCksIFwiY2hhdElkXCI6IGRvYy5pZCB9KTtcbiAgICAgICAgICAvLyBzZXRDaGF0cyguLi5jaGF0cyxkb2MuZGF0YSgpLmNoYXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0Q2hhdHMocXVlcnlTbmFwc2hvdCk7XG4gICAgICAgIHNldENoYXRzKChwcmV2Q2hhdHMpID0+IFsuLi5wcmV2Q2hhdHMsIC4uLm5ld0NoYXRzXSk7XG4gICAgICAgIHJldHVybiB0b3RhbERvY3VtZW50cztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkb2N1bWVudHM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LnVpZDsgLy8gUmVwbGFjZSB3aXRoIHRoZSB1c2VyIElEIHlvdSdyZSBzZWFyY2hpbmcgZm9yXG4gICAgZ2V0RG9jdW1lbnRzV2l0aFVzZXJJZCh1c2VySWQpO1xuXG5cbiAgfSwgW3VzZXJdKVxuICBjb25zdCBbcHJvZmlsZUlkLCBzZXRQcm9maWxlSWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGZ1bmN0aW9uIHNlbGVjdENvbnRhY3QoaWQsIGNoYXRJZCkge1xuICAgIHNldFByb2ZpbGVJZChpZClcbiAgICBzZXRDdXJyQ2hhdChjaGF0SWQpO1xuICB9XG4gIGNvbnN0IFtyZWZpbmVkQ2hhdCwgc2V0UmVmaW5lZENoYXRdID0gdXNlU3RhdGUoW10pO1xuICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgLy8gICBpZihjaGF0cyE9bnVsbClcbiAgLy8geyAgXG4gIC8vICAgY29uc29sZS5sb2coY2hhdHMpO1xuICAvLyAgIGNoYXRzLm1hcCgob2JqKT0+e1xuICAvLyAgIGNvbnNvbGUubG9nKG9iaik7XG4gIC8vICAgaWYob2JqIT09dW5kZWZpbmVkKVxuICAvLyAgICAgc2V0UmVmaW5lZENoYXQoWy4uLnJlZmluZWRDaGF0LG9ial0pXG4gIC8vICAgfSlcbiAgLy8gfVxuICAvLyB9LFtjaGF0c10pXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gIC8vIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgICBzZXRVc2VyKGN1cnJlbnRVc2VyKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJGaXJlYmFzZSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcbiAgLy8gY29uc3QgW3BsYXllckluZm8sIHNldFBsYXllckluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRzQnlRdWVyeShjb2xsZWN0aW9uTmFtZSwgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSkge1xuICAvLyAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIC8vICAgICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgLy8gICAgICAgICBjb2xsZWN0aW9uKGRiLCBjb2xsZWN0aW9uTmFtZSksXG4gIC8vICAgICAgICAgd2hlcmUoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gIC8vICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gIC8vICAgICAgICAgc2V0UGxheWVySW5mbyhkb2MuZGF0YSgpKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgZ2V0RG9jdW1lbnRzQnlRdWVyeShcIlVzZXJzXCIsIFwiZW1haWxcIiwgXCI9PVwiLCB1c2VyPy5lbWFpbCk7XG4gIC8vIH0sIFt1c2VyXSk7XG4gIGNvbnNvbGUubG9nKGNoYXRzKTtcbiAgY29uc29sZS5sb2cocmVmaW5lZENoYXQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBmbGV4LWNvbCBmbGV4LTFcIj5cbiAgICAgIDxVc2VyUHJvdmlkZXIgdXNlcj17dXNlcn0gc2V0VXNlcj17c2V0VXNlcn0+XG4gICAgICAgIDxOYXZiYXIgLz5cblxuXG4gICAgICAgIDxTcGxpdCBzaXplcz17WzMwLCA3MF19IGRpcmVjdGlvbj1cImhvcml6b250YWxcIiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBcIj5cbiAgICAgICAgICA8U2lkZWJhciBjb250YWN0PXtjb250YWN0fSBzZWxlY3RDb250YWN0PXtzZWxlY3RDb250YWN0fSBjaGF0cz17Y2hhdHN9IHVzZXJJZD17dXNlciAhPSBudWxsID8gdXNlcj8udWlkIDogXCJcIn0gLz5cbiAgICAgICAgICA8Q2hhdCBjb250YWN0PXtjb250YWN0fSBcbiAgICAgICAgICAgY3VyckNoYXQ9e2N1cnJDaGF0fVxuICAgICAgICAgICBwcm9maWxlSWQ9e3Byb2ZpbGVJZH1cbiAgICAgICAgICAgY2hhdHM9e2NoYXRzfSB1c2VySWQ9e3VzZXIgIT0gbnVsbCA/IHVzZXI/LnVpZCA6IFwiXCJ9IFxuICAgICAgICAgICBcbiAgICAgICAgICAgLz5cbiAgICAgICAgPC9TcGxpdD5cblxuICAgICAgPC9Vc2VyUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiU2lkZWJhciIsIkNoYXQiLCJTcGxpdCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXV0aCIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VSb3V0ZXIiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsInVzZVVzZXIiLCJkYiIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwicXVlcnkiLCJ3aGVyZSIsIkxhbmRpbmdQYWdlIiwiY29udGFjdCIsIm5hbWUiLCJtc2ciLCJ0aW1lIiwiRGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiY3VyckNoYXQiLCJzZXRDdXJyQ2hhdCIsImNoYXRzIiwic2V0Q2hhdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzUm91dGVyUmVhZHkiLCJzZXRJc1JvdXRlclJlYWR5IiwicGxheWVySW5mbyIsInNldFBsYXllckluZm8iLCJnZXREb2N1bWVudHNCeVF1ZXJ5IiwiY29sbGVjdGlvbk5hbWUiLCJmaWVsZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwicSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiaWQiLCJkYXRhIiwiZW1haWwiLCJnZXREb2N1bWVudHNXaXRoVXNlcklkIiwidXNlcklkIiwiY29sbGVjdGlvblJlZiIsInRvdGFsRG9jdW1lbnRzIiwic2l6ZSIsIm5ld0NoYXRzIiwicHVzaCIsInByZXZDaGF0cyIsImVycm9yIiwidWlkIiwicHJvZmlsZUlkIiwic2V0UHJvZmlsZUlkIiwic2VsZWN0Q29udGFjdCIsImNoYXRJZCIsInJlZmluZWRDaGF0Iiwic2V0UmVmaW5lZENoYXQiLCJ1bnN1YnNjcmliZSIsImN1cnJlbnRVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZXMiLCJkaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.jsx\n"));

/***/ })

});