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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LandingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./app/components/navbar.jsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.jsx\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat */ \"(app-pages-browser)/./app/components/chat.jsx\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/../node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the auth instance\n\n\n\n\n\nfunction LandingPage() {\n    _s();\n    const contact = [\n        {\n            name: \"Giga Don\",\n            msg: \"Peene Chale\",\n            time: Date()\n        },\n        {\n            name: \"Dimli\",\n            msg: \"Fookne Chale\",\n            time: Date()\n        },\n        {\n            name: \"Simlim\",\n            msg: \"Tahalne Chale\",\n            time: Date()\n        }\n    ];\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    // const userContext=useUser();\n    const [currChat, setCurrChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    // const [user, setUser] = useState(userContext);\n    // useEffect(()=>{\n    //   setUser(userContext);\n    // },[userContext])\n    // const {user,setUser}=useContext(UserContext);\n    const [chats, setChats] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [isRouterReady, setIsRouterReady] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    // const router = useRouter(); // Only safe to use inside useEffect\n    const [playerInfo, setPlayerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        var _user_user;\n        async function getDocumentsByQuery(collectionName, field, operator, value) {\n            if (value != undefined) {\n                console.log(value);\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, collectionName), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(field, operator, value));\n                console.log(firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query);\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setPlayerInfo(doc.data());\n                });\n            }\n        }\n        getDocumentsByQuery(\"Users\", \"email\", \"==\", user === null || user === void 0 ? void 0 : (_user_user = user.user) === null || _user_user === void 0 ? void 0 : _user_user.email);\n    }, [\n        user\n    ]);\n    // console.log(user.uid)\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function getDocumentsWithUserId(userId) {\n            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"Chats\"); // Replace with your collection name\n            // Create a query to find documents where participants array contains the userId\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(collectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(\"participants\", \"array-contains\", userId));\n            try {\n                // Execute the query\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);\n                // Get the total count of documents\n                const totalDocuments = querySnapshot.size;\n                console.log(\"Total documents with user ID \".concat(userId, \":\"), totalDocuments);\n                const newChats = [];\n                // Optionally, loop through documents if you need to access them\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    newChats.push(doc.data());\n                // setChats(...chats,doc.data().chat);\n                });\n                // setChats(querySnapshot);\n                setChats((prevChats)=>[\n                        ...prevChats,\n                        ...newChats\n                    ]);\n                return totalDocuments;\n            } catch (error) {\n                console.error(\"Error fetching documents:\", error);\n            }\n        }\n        const userId = user === null || user === void 0 ? void 0 : user.uid; // Replace with the user ID you're searching for\n        getDocumentsWithUserId(userId);\n    }, [\n        user\n    ]);\n    const [profileId, setProfileId] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(\"\");\n    function selectContact(id) {\n        setCurrChat(index);\n    }\n    const [refinedChat, setRefinedChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    // useEffect(()=>{\n    //   if(chats!=null)\n    // {  \n    //   console.log(chats);\n    //   chats.map((obj)=>{\n    //   console.log(obj);\n    //   if(obj!==undefined)\n    //     setRefinedChat([...refinedChat,obj])\n    //   })\n    // }\n    // },[chats])\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();\n    // const [user, setUser] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)(auth, (currentUser)=>{\n            setUser(currentUser);\n        });\n        // console.log(userFirebase);\n        return ()=>unsubscribe();\n    }, []);\n    // const [playerInfo, setPlayerInfo] = useState(null);\n    // useEffect(() => {\n    //   async function getDocumentsByQuery(collectionName, field, operator, value) {\n    //     if (value != undefined) {\n    //       console.log(value);\n    //       const q = query(\n    //         collection(db, collectionName),\n    //         where(field, operator, value)\n    //       );\n    //       const querySnapshot = await getDocs(q);\n    //       querySnapshot.forEach((doc) => {\n    //         console.log(doc.id, \" => \", doc.data());\n    //         setPlayerInfo(doc.data());\n    //       });\n    //     }\n    //   }\n    //   getDocumentsByQuery(\"Users\", \"email\", \"==\", user?.email);\n    // }, [user]);\n    console.log(chats);\n    console.log(refinedChat);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex flex-col flex-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userContext__WEBPACK_IMPORTED_MODULE_9__.UserProvider, {\n            user: user,\n            setUser: setUser,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 141,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sizes: [\n                        30,\n                        70\n                    ],\n                    direction: \"horizontal\",\n                    className: \"flex h-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            contact: contact,\n                            selectContact: selectContact,\n                            chats: chats,\n                            userId: user.uid\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            contact: contact,\n                            currChat: currChat\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                            lineNumber: 146,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n                    lineNumber: 144,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n            lineNumber: 140,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/App.jsx\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, this);\n}\n_s(LandingPage, \"M5w6KcDJQEL9XEMO7PfGXWmHf5Y=\");\n_c = LandingPage;\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNmO0lBQ1pjLFFBQVFDLEdBQUcsQ0FBQ3NCO0lBQ1oscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUMzRCxzREFBWUE7WUFBQ2EsTUFBTUE7WUFBTUMsU0FBU0E7OzhCQUNuQyw4REFBQzNCLDBEQUFNQTs7Ozs7OEJBR1AsOERBQUNHLG1EQUFLQTtvQkFBQ3NFLE9BQU87d0JBQUM7d0JBQUk7cUJBQUc7b0JBQUVDLFdBQVU7b0JBQWFGLFdBQVU7O3NDQUN2RCw4REFBQ3ZFLDJEQUFPQTs0QkFBQ29CLFNBQVNBOzRCQUFTNEMsZUFBZUE7NEJBQWVuQyxPQUFPQTs0QkFBT3dCLFFBQVE1QixLQUFLb0MsR0FBRzs7Ozs7O3NDQUN2Riw4REFBQzVELHdEQUFJQTs0QkFBQ21CLFNBQVNBOzRCQUFTTyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUM7R0ExSXdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQXBwLmpzeD9jMTA0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9jb21wb25lbnRzL2NoYXRcIjtcbmltcG9ydCBTcGxpdCBmcm9tIFwicmVhY3Qtc3BsaXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjsgIC8vIEltcG9ydCB0aGUgYXV0aCBpbnN0YW5jZVxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQsIFVzZXJQcm92aWRlciwgdXNlVXNlciB9IGZyb20gXCIuL3VzZXJDb250ZXh0XCI7XG5cbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKCkge1xuICBjb25zdCBjb250YWN0ID0gW1xuICAgIHsgbmFtZTogXCJHaWdhIERvblwiLCBtc2c6IFwiUGVlbmUgQ2hhbGVcIix0aW1lOkRhdGUoKSB9LFxuICAgIHsgbmFtZTogXCJEaW1saVwiLCBtc2c6IFwiRm9va25lIENoYWxlXCIgLHRpbWU6RGF0ZSgpfSxcbiAgICB7IG5hbWU6IFwiU2ltbGltXCIsIG1zZzogXCJUYWhhbG5lIENoYWxlXCIgLHRpbWU6RGF0ZSgpfVxuICBdO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gY29uc3QgdXNlckNvbnRleHQ9dXNlVXNlcigpO1xuICBjb25zdCBbY3VyckNoYXQsIHNldEN1cnJDaGF0XSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh1c2VyQ29udGV4dCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpPT57XG4gIC8vICAgc2V0VXNlcih1c2VyQ29udGV4dCk7XG4gIC8vIH0sW3VzZXJDb250ZXh0XSlcbiAgLy8gY29uc3Qge3VzZXIsc2V0VXNlcn09dXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IFtjaGF0cyxzZXRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzUm91dGVyUmVhZHksIHNldElzUm91dGVyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvLyBPbmx5IHNhZmUgdG8gdXNlIGluc2lkZSB1c2VFZmZlY3RcbiAgY29uc3QgW3BsYXllckluZm8sIHNldFBsYXllckluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdW1lbnRzQnlRdWVyeShjb2xsZWN0aW9uTmFtZSwgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCBjb2xsZWN0aW9uTmFtZSksXG4gICAgICAgICAgd2hlcmUoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnkpO1xuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAgICAgICBzZXRQbGF5ZXJJbmZvKGRvYy5kYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREb2N1bWVudHNCeVF1ZXJ5KFwiVXNlcnNcIiwgXCJlbWFpbFwiLCBcIj09XCIsIHVzZXI/LnVzZXI/LmVtYWlsKTtcbiAgfSwgW3VzZXJdKTtcbi8vIGNvbnNvbGUubG9nKHVzZXIudWlkKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudHNXaXRoVXNlcklkKHVzZXJJZCkge1xuICAgICAgY29uc3QgY29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwiQ2hhdHNcIik7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvbGxlY3Rpb24gbmFtZVxuICAgICAgXG4gICAgICAvLyBDcmVhdGUgYSBxdWVyeSB0byBmaW5kIGRvY3VtZW50cyB3aGVyZSBwYXJ0aWNpcGFudHMgYXJyYXkgY29udGFpbnMgdGhlIHVzZXJJZFxuICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb25SZWYsIHdoZXJlKFwicGFydGljaXBhbnRzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgdXNlcklkKSk7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIHF1ZXJ5XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHRoZSB0b3RhbCBjb3VudCBvZiBkb2N1bWVudHNcbiAgICAgICAgY29uc3QgdG90YWxEb2N1bWVudHMgPSBxdWVyeVNuYXBzaG90LnNpemU7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkb2N1bWVudHMgd2l0aCB1c2VyIElEICR7dXNlcklkfTpgLCB0b3RhbERvY3VtZW50cyk7XG4gICAgICAgIGNvbnN0IG5ld0NoYXRzID0gW107XG4gICAgICAgIC8vIE9wdGlvbmFsbHksIGxvb3AgdGhyb3VnaCBkb2N1bWVudHMgaWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZW1cbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAgICAgICBuZXdDaGF0cy5wdXNoKGRvYy5kYXRhKCkpO1xuICAgICAgICAgIC8vIHNldENoYXRzKC4uLmNoYXRzLGRvYy5kYXRhKCkuY2hhdCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBzZXRDaGF0cyhxdWVyeVNuYXBzaG90KTtcbiAgICAgICAgc2V0Q2hhdHMoKHByZXZDaGF0cykgPT4gWy4uLnByZXZDaGF0cywgLi4ubmV3Q2hhdHNdKTtcbiAgICAgICAgcmV0dXJuIHRvdGFsRG9jdW1lbnRzO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRvY3VtZW50czpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgXG4gICAgY29uc3QgdXNlcklkID0gdXNlcj8udWlkOyAvLyBSZXBsYWNlIHdpdGggdGhlIHVzZXIgSUQgeW91J3JlIHNlYXJjaGluZyBmb3JcbiAgICBnZXREb2N1bWVudHNXaXRoVXNlcklkKHVzZXJJZCk7XG4gICAgXG4gICAgXG4gIH0sW3VzZXJdKVxuICBjb25zdCBbcHJvZmlsZUlkLHNldFByb2ZpbGVJZF09UmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGZ1bmN0aW9uIHNlbGVjdENvbnRhY3QoaWQpIHtcbiAgICBzZXRDdXJyQ2hhdChpbmRleCk7XG4gIH1cbiAgY29uc3QgW3JlZmluZWRDaGF0LHNldFJlZmluZWRDaGF0XT11c2VTdGF0ZShbXSk7XG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAvLyAgIGlmKGNoYXRzIT1udWxsKVxuICAvLyB7ICBcbiAgLy8gICBjb25zb2xlLmxvZyhjaGF0cyk7XG4gIC8vICAgY2hhdHMubWFwKChvYmopPT57XG4gIC8vICAgY29uc29sZS5sb2cob2JqKTtcbiAgLy8gICBpZihvYmohPT11bmRlZmluZWQpXG4gIC8vICAgICBzZXRSZWZpbmVkQ2hhdChbLi4ucmVmaW5lZENoYXQsb2JqXSlcbiAgLy8gICB9KVxuICAvLyB9XG4gIC8vIH0sW2NoYXRzXSlcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgLy8gY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAoY3VycmVudFVzZXIpID0+IHtcbiAgICAgIHNldFVzZXIoY3VycmVudFVzZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2codXNlckZpcmViYXNlKTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pO1xuICAvLyBjb25zdCBbcGxheWVySW5mbywgc2V0UGxheWVySW5mb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBhc3luYyBmdW5jdGlvbiBnZXREb2N1bWVudHNCeVF1ZXJ5KGNvbGxlY3Rpb25OYW1lLCBmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKSB7XG4gIC8vICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgLy8gICAgICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAvLyAgICAgICAgIGNvbGxlY3Rpb24oZGIsIGNvbGxlY3Rpb25OYW1lKSxcbiAgLy8gICAgICAgICB3aGVyZShmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICAvLyAgICAgICApO1xuICAvLyAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgLy8gICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgLy8gICAgICAgICBzZXRQbGF5ZXJJbmZvKGRvYy5kYXRhKCkpO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gICBnZXREb2N1bWVudHNCeVF1ZXJ5KFwiVXNlcnNcIiwgXCJlbWFpbFwiLCBcIj09XCIsIHVzZXI/LmVtYWlsKTtcbiAgLy8gfSwgW3VzZXJdKTtcbiAgY29uc29sZS5sb2coY2hhdHMpO1xuICBjb25zb2xlLmxvZyhyZWZpbmVkQ2hhdCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGZsZXgtY29sIGZsZXgtMVwiPlxuICAgICAgPFVzZXJQcm92aWRlciB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfT5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgXG4gICAgICA8U3BsaXQgc2l6ZXM9e1szMCwgNzBdfSBkaXJlY3Rpb249XCJob3Jpem9udGFsXCIgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgXCI+XG4gICAgICAgIDxTaWRlYmFyIGNvbnRhY3Q9e2NvbnRhY3R9IHNlbGVjdENvbnRhY3Q9e3NlbGVjdENvbnRhY3R9IGNoYXRzPXtjaGF0c30gdXNlcklkPXt1c2VyLnVpZH0vPlxuICAgICAgICA8Q2hhdCBjb250YWN0PXtjb250YWN0fSBjdXJyQ2hhdD17Y3VyckNoYXR9IC8+XG4gICAgICA8L1NwbGl0PlxuICAgICAgIFxuICAgIDwvVXNlclByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIlNpZGViYXIiLCJDaGF0IiwiU3BsaXQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGgiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJ1c2VVc2VyIiwiZGIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJMYW5kaW5nUGFnZSIsImNvbnRhY3QiLCJuYW1lIiwibXNnIiwidGltZSIsIkRhdGUiLCJ1c2VyIiwic2V0VXNlciIsImN1cnJDaGF0Iiwic2V0Q3VyckNoYXQiLCJjaGF0cyIsInNldENoYXRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc1JvdXRlclJlYWR5Iiwic2V0SXNSb3V0ZXJSZWFkeSIsInBsYXllckluZm8iLCJzZXRQbGF5ZXJJbmZvIiwiZ2V0RG9jdW1lbnRzQnlRdWVyeSIsImNvbGxlY3Rpb25OYW1lIiwiZmllbGQiLCJvcGVyYXRvciIsInZhbHVlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInEiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsImlkIiwiZGF0YSIsImVtYWlsIiwiZ2V0RG9jdW1lbnRzV2l0aFVzZXJJZCIsInVzZXJJZCIsImNvbGxlY3Rpb25SZWYiLCJ0b3RhbERvY3VtZW50cyIsInNpemUiLCJuZXdDaGF0cyIsInB1c2giLCJwcmV2Q2hhdHMiLCJlcnJvciIsInVpZCIsInByb2ZpbGVJZCIsInNldFByb2ZpbGVJZCIsInNlbGVjdENvbnRhY3QiLCJpbmRleCIsInJlZmluZWRDaGF0Iiwic2V0UmVmaW5lZENoYXQiLCJ1bnN1YnNjcmliZSIsImN1cnJlbnRVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZXMiLCJkaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.jsx\n"));

/***/ })

});