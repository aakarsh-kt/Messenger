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

/***/ "(app-pages-browser)/./app/components/chat.jsx":
/*!*********************************!*\
  !*** ./app/components/chat.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.jsx */ \"(app-pages-browser)/./app/components/profile.jsx\");\n/* harmony import */ var _userContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userContext.jsx */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var _barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _messages_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.jsx */ \"(app-pages-browser)/./app/components/messages.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase.js */ \"(app-pages-browser)/./app/firebase.js\");\n\"use-client\";\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const userContext = (0,_userContext_jsx__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userContext);\n    const otherUser = props.otherUser;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setUser(userContext);\n    }, [\n        userContext\n    ]);\n    // const {user,setUser}=useContext(UserContext);\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase_js__WEBPACK_IMPORTED_MODULE_8__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userDoc.id;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"id\": id,\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const userId = props.userId;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const pair = await getUserNameById(receiver);\n                    // console.log(profilePic)\n                    return {\n                        \"id\": pair.id,\n                        \"name\": pair.name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": pair.pic\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    const [currDisplayUser, setCurrDisplayUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const tempDisp = getUserNameById(props.profileId);\n    }, [\n        props.profileId\n    ]);\n    const [messages, setMessages] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        }\n    ]);\n    const [currMsg, setCurrMsg] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    function handleChange(event) {\n        setCurrMsg(event.target.value);\n    }\n    function handleSubmit(e) {\n        if (currMsg.length > 0) {\n            const temp = {\n                \"msg\": currMsg,\n                \"id\": 1\n            };\n            setMessages(messages.concat(temp));\n            setCurrMsg(\"\");\n        }\n    }\n    function handleKeyDown(event) {\n        if (event.key === \"Enter\") handleSubmit();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-800 flex flex-col h-full p-1 m-1 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                profileId: props.profileId\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_messages_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    messages: messages\n                }, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 mt-auto p-2 bg-slate-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        className: \"bg-slate-200 rounded-full w-full drop-shadow-md\",\n                        id: \"outlined-basic\",\n                        label: \"Message\",\n                        value: currMsg,\n                        variant: \"outlined\",\n                        onChange: handleChange,\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-500 rounded-full p-2 m-2\",\n                        onClick: handleSubmit,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 131,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NoYXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFMEM7QUFDTjtBQUNzQjtBQUNoQjtBQUNKO0FBQ2lCO0FBQ0Y7QUFDbkI7QUFDZTtBQUNiO0FBRXBDLDZCQUFlLG9DQUFTWSxLQUFLO0lBQ3pCLE1BQU1DLGNBQWNULHlEQUFPQTtJQUMzQixNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR2YscURBQWMsQ0FBQ2E7SUFDdkMsTUFBTUksWUFBVUwsTUFBTUssU0FBUztJQUMvQmpCLHNEQUFlLENBQUM7UUFDWmUsUUFBUUY7SUFDWixHQUFHO1FBQUNBO0tBQVk7SUFDaEIsZ0RBQWdEO0lBQ2hELGVBQWVLLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0EsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVYLHVEQUFHQSxDQUFDRSw0Q0FBRUEsRUFBRSxTQUFTUTtZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNWCwwREFBTUEsQ0FBQ1U7WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNsQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNMLFFBQVFNLEVBQUU7Z0JBQ3RCLE1BQU1BLEtBQUtOLFFBQVFNLEVBQUU7Z0JBQ3JCLE1BQU1DLE9BQU9MLFNBQVNLLElBQUk7Z0JBQzFCLE1BQU1DLE1BQU1OLFNBQVNPLGNBQWM7Z0JBQ25DLE1BQU1DLE9BQU87b0JBQUMsTUFBS0o7b0JBQUksUUFBUUM7b0JBQU0sT0FBT0M7Z0JBQUk7Z0JBQ2hESixRQUFRQyxHQUFHLENBQUNHO2dCQUNaLE9BQU9FO1lBQ1gsT0FBTztnQkFDSE4sUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtRQUNKLEVBQUUsT0FBT00sT0FBTztZQUNaUCxRQUFRTyxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNKO0lB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U0FBU2Q7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03RiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jaGF0LmpzeD9kODliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlLWNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9wcm9maWxlLmpzeFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQsIHVzZVVzZXIgfSBmcm9tIFwiLi4vdXNlckNvbnRleHQuanN4XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzLmpzeFwiO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0ICdyZWFjdC1wZXJmZWN0LXNjcm9sbGJhci9kaXN0L2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9wcykge1xuICAgIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlVXNlcigpO1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKHVzZXJDb250ZXh0KTtcbiAgICBjb25zdCBvdGhlclVzZXI9cHJvcHMub3RoZXJVc2VyO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFVzZXIodXNlckNvbnRleHQpO1xuICAgIH0sIFt1c2VyQ29udGV4dF0pO1xuICAgIC8vIGNvbnN0IHt1c2VyLHNldFVzZXJ9PXVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCB3aXRoIHRoZSBnaXZlbiB1c2VySWQgaW4gdGhlIFwidXNlcnNcIiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCBcIlVzZXJzXCIsIHJlY2VpdmVyKTtcblxuICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIGRvY3VtZW50XG4gICAgICAgICAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0RG9jKHVzZXJSZWYpO1xuXG4gICAgICAgICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgYW5kIHJldHVybiB0aGUgdXNlcidzIG5hbWUgZnJvbSB0aGUgZG9jdW1lbnQgZGF0YVxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlckRvYy5kYXRhKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRvYy5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB1c2VyRG9jLmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB1c2VyRGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpYyA9IHVzZXJEYXRhLnByb2ZpbGVQaWN0dXJlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSB7XCJpZFwiOmlkLCBcIm5hbWVcIjogbmFtZSwgXCJwaWNcIjogcGljIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGljKVxuICAgICAgICAgICAgICAgIHJldHVybiBwYWlyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggdXNlciFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHVzZXJJZD1wcm9wcy51c2VySWQ7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kaWZ5Q2hhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIFVzaW5nIFByb21pc2UuYWxsIHRvIGhhbmRsZSBhc3luYyBtYXAgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZENoYXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoYXRzLm1hcChhc3luYyAoY29udCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjZWl2ZXJBcnJheSA9IGNvbnQucGFydGljaXBhbnRzLmZpbHRlcihwaWQgPT4gcGlkICE9PSB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjZWl2ZXIgPSByZWNlaXZlckFycmF5WzBdOyAvLyBBc3N1bWluZyBvbmx5IG9uZSByZWNlaXZlclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBnZXRVc2VyTmFtZUJ5SWQgaXMgYXN5bmMgYW5kIGZldGNoZXMgdGhlIHVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0gYXdhaXQgZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2ZpbGVQaWMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBcImlkXCI6cGFpci5pZCxcIm5hbWVcIjogcGFpci5uYW1lLCBcImNoYXRcIjogY29udC5jaGF0LCBcInByb2ZpbGVQaWNcIjogcGFpci5waWMgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIG1vZGlmaWVkIGNoYXRzXG4gICAgICAgICAgICAgICAgc2V0UHJvY2Vzc2VkQ2hhdHModXBkYXRlZENoYXRzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1vZGlmeWluZyBjaGF0czpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGlmeUNoYXRzKCk7XG4gICAgfSwgW3Byb3BzLmNoYXRzLCB1c2VySWRdKTtcbiAgICBjb25zdCBbY3VyckRpc3BsYXlVc2VyLHNldEN1cnJEaXNwbGF5VXNlcl09UmVhY3QudXNlU3RhdGUoXCJcIik7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHRlbXBEaXNwPWdldFVzZXJOYW1lQnlJZChwcm9wcy5wcm9maWxlSWQpXG5cbiAgICB9LFtwcm9wcy5wcm9maWxlSWRdKVxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gUmVhY3QudXNlU3RhdGUoW1xuICAgICAgICB7IFwibXNnXCI6IFwiSGkgTXkgTWFpbiBtYW5cIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiSGkgbXkgTmlnZ2FcIiwgXCJpZFwiOiBcIjJcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiV2hvIHlvdSBjYWxsaW5nIE5pZ2dhXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIE15IE1haW4gbWFuXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIG15IE5pZ2dhXCIsIFwiaWRcIjogXCIyXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIldobyB5b3UgY2FsbGluZyBOaWdnYVwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBNeSBNYWluIG1hblwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICB7IFwibXNnXCI6IFwiV2hvIHlvdSBjYWxsaW5nIE5pZ2dhXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIE15IE1haW4gbWFuXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIG15IE5pZ2dhXCIsIFwiaWRcIjogXCIyXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIldobyB5b3UgY2FsbGluZyBOaWdnYVwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIC8vIEFkZCBtb3JlIG1lc3NhZ2VzIGhlcmUuLi5cbiAgICBdKTtcblxuICAgIGNvbnN0IFtjdXJyTXNnLCBzZXRDdXJyTXNnXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldEN1cnJNc2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBpZihjdXJyTXNnLmxlbmd0aD4wKVxuICAgICAgIHsgY29uc3QgdGVtcCA9IHsgXCJtc2dcIjogY3Vyck1zZywgXCJpZFwiOiAxIH07XG4gICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VzLmNvbmNhdCh0ZW1wKSk7XG4gICAgICAgIHNldEN1cnJNc2coXCJcIik7fVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSBoYW5kbGVTdWJtaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTgwMCBmbGV4IGZsZXgtY29sIGgtZnVsbCBwLTEgbS0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxQcm9maWxlIHByb2ZpbGVJZD17cHJvcHMucHJvZmlsZUlkfSAvPlxuICAgICAgICAgICAgey8qIDxQZXJmZWN0U2Nyb2xsYmFyPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17bWVzc2FnZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8L1BlcmZlY3RTY3JvbGxiYXI+ICAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbXQtYXV0byBwLTIgYmctc2xhdGUtNzAwXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtMjAwIHJvdW5kZWQtZnVsbCB3LWZ1bGwgZHJvcC1zaGFkb3ctbWRcIiBcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiIFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3Vyck1zZ31cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCByb3VuZGVkLWZ1bGwgcC0yIG0tMlwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIlByb2ZpbGUiLCJVc2VyQ29udGV4dCIsInVzZVVzZXIiLCJUZXh0RmllbGQiLCJNZXNzYWdlcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCJ1c2VFZmZlY3QiLCJkb2MiLCJnZXREb2MiLCJkYiIsInByb3BzIiwidXNlckNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwib3RoZXJVc2VyIiwiZ2V0VXNlck5hbWVCeUlkIiwicmVjZWl2ZXIiLCJ1c2VyUmVmIiwidXNlckRvYyIsImV4aXN0cyIsInVzZXJEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJwaWMiLCJwcm9maWxlUGljdHVyZSIsInBhaXIiLCJlcnJvciIsInVzZXJJZCIsIm1vZGlmeUNoYXRzIiwidXBkYXRlZENoYXRzIiwiUHJvbWlzZSIsImFsbCIsImNoYXRzIiwibWFwIiwiY29udCIsInJlY2VpdmVyQXJyYXkiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwaWQiLCJjaGF0Iiwic2V0UHJvY2Vzc2VkQ2hhdHMiLCJjdXJyRGlzcGxheVVzZXIiLCJzZXRDdXJyRGlzcGxheVVzZXIiLCJ0ZW1wRGlzcCIsInByb2ZpbGVJZCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjdXJyTXNnIiwic2V0Q3Vyck1zZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwibGVuZ3RoIiwidGVtcCIsImNvbmNhdCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInZhcmlhbnQiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/chat.jsx\n"));

/***/ })

});