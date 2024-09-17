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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.jsx */ \"(app-pages-browser)/./app/components/profile.jsx\");\n/* harmony import */ var _userContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userContext.jsx */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var _barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _messages_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.jsx */ \"(app-pages-browser)/./app/components/messages.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase.js */ \"(app-pages-browser)/./app/firebase.js\");\n\"use-client\";\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const userContext = (0,_userContext_jsx__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userContext);\n    const otherUser = props.otherUser;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setUser(userContext);\n    }, [\n        userContext\n    ]);\n    // const {user,setUser}=useContext(UserContext);\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase_js__WEBPACK_IMPORTED_MODULE_8__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userDoc.id;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"id\": id,\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const userId = props.userId;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const pair = await getUserNameById(receiver);\n                    // console.log(profilePic)\n                    return {\n                        \"id\": pair.id,\n                        \"name\": pair.name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": pair.pic\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    const [currDisplayUser, setCurrDisplayUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{};\n        const tempDisp = getUserNameById(props.profileId);\n        setCurrDisplayUser(tempDisp);\n    }, [\n        props.profileId\n    ]);\n    const [messages, setMessages] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        }\n    ]);\n    const [currMsg, setCurrMsg] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    function handleChange(event) {\n        setCurrMsg(event.target.value);\n    }\n    function handleSubmit(e) {\n        if (currMsg.length > 0) {\n            const temp = {\n                \"msg\": currMsg,\n                \"id\": 1\n            };\n            setMessages(messages.concat(temp));\n            setCurrMsg(\"\");\n        }\n    }\n    function handleKeyDown(event) {\n        if (event.key === \"Enter\") handleSubmit();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-800 flex flex-col h-full p-1 m-1 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                currDisplayUser: currDisplayUser\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_messages_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    messages: messages\n                }, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 mt-auto p-2 bg-slate-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        className: \"bg-slate-200 rounded-full w-full drop-shadow-md\",\n                        id: \"outlined-basic\",\n                        label: \"Message\",\n                        value: currMsg,\n                        variant: \"outlined\",\n                        onChange: handleChange,\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-500 rounded-full p-2 m-2\",\n                        onClick: handleSubmit,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n        lineNumber: 118,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NoYXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFMEM7QUFDTjtBQUNzQjtBQUNoQjtBQUNKO0FBQ2lCO0FBQ0Y7QUFDbkI7QUFDZTtBQUNiO0FBRXBDLDZCQUFlLG9DQUFTWSxLQUFLO0lBQ3pCLE1BQU1DLGNBQWNULHlEQUFPQTtJQUMzQixNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR2YscURBQWMsQ0FBQ2E7SUFDdkMsTUFBTUksWUFBVUwsTUFBTUssU0FBUztJQUMvQmpCLHNEQUFlLENBQUM7UUFDWmUsUUFBUUY7SUFDWixHQUFHO1FBQUNBO0tBQVk7SUFDaEIsZ0RBQWdEO0lBQ2hELGVBQWVLLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0EsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVYLHVEQUFHQSxDQUFDRSw0Q0FBRUEsRUFBRSxTQUFTUTtZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNWCwwREFBTUEsQ0FBQ1U7WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNsQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNMLFFBQVFNLEVBQUU7Z0JBQ3RCLE1BQU1BLEtBQUtOLFFBQVFNLEVBQUU7Z0JBQ3JCLE1BQU1DLE9BQU9MLFNBQVNLLElBQUk7Z0JBQzFCLE1BQU1DLE1BQU1OLFNBQVNPLGNBQWM7Z0JBQ25DLE1BQU1DLE9BQU87b0JBQUMsTUFBS0o7b0JBQUksUUFBUUM7b0JBQU0sT0FBT0M7Z0JBQUk7Z0JBQ2hESixRQUFRQyxHQUFHLENBQUNHO2dCQUNaLE9BQU9FO1lBQ1gsT0FBTztnQkFDSE4sUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtRQUNKLEVBQUUsT0FBT00sT0FBTztZQUNaUCxRQUFRTyxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNKO0lB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QUFDUTt3QkFBT0wsV0FBVTt3QkFBb0NNLFNBQVNkO2tDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvY2hhdC5qc3g/ZDg5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZS1jbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vcHJvZmlsZS5qc3hcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0LCB1c2VVc2VyIH0gZnJvbSBcIi4uL3VzZXJDb250ZXh0LmpzeFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBNZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlcy5qc3hcIjtcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9jc3Mvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvcHMpIHtcbiAgICBjb25zdCB1c2VyQ29udGV4dCA9IHVzZVVzZXIoKTtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZSh1c2VyQ29udGV4dCk7XG4gICAgY29uc3Qgb3RoZXJVc2VyPXByb3BzLm90aGVyVXNlcjtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRVc2VyKHVzZXJDb250ZXh0KTtcbiAgICB9LCBbdXNlckNvbnRleHRdKTtcbiAgICAvLyBjb25zdCB7dXNlcixzZXRVc2VyfT11c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gdXNlcklkIGluIHRoZSBcInVzZXJzXCIgY29sbGVjdGlvblxuICAgICAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgXCJVc2Vyc1wiLCByZWNlaXZlcik7XG5cbiAgICAgICAgICAgIC8vIEZldGNoIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGdldERvYyh1c2VyUmVmKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJEb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGFuZCByZXR1cm4gdGhlIHVzZXIncyBuYW1lIGZyb20gdGhlIGRvY3VtZW50IGRhdGFcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJEb2MuZGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEb2MuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdXNlckRvYy5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdXNlckRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaWMgPSB1c2VyRGF0YS5wcm9maWxlUGljdHVyZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0ge1wiaWRcIjppZCwgXCJuYW1lXCI6IG5hbWUsIFwicGljXCI6IHBpYyB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBpYylcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFpcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIHVzZXIhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXI6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB1c2VySWQ9cHJvcHMudXNlcklkO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGlmeUNoYXRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBVc2luZyBQcm9taXNlLmFsbCB0byBoYW5kbGUgYXN5bmMgbWFwIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDaGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGF0cy5tYXAoYXN5bmMgKGNvbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyQXJyYXkgPSBjb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkID0+IHBpZCAhPT0gdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyID0gcmVjZWl2ZXJBcnJheVswXTsgLy8gQXNzdW1pbmcgb25seSBvbmUgcmVjZWl2ZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgZ2V0VXNlck5hbWVCeUlkIGlzIGFzeW5jIGFuZCBmZXRjaGVzIHRoZSB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IGF3YWl0IGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9maWxlUGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgXCJpZFwiOnBhaXIuaWQsXCJuYW1lXCI6IHBhaXIubmFtZSwgXCJjaGF0XCI6IGNvbnQuY2hhdCwgXCJwcm9maWxlUGljXCI6IHBhaXIucGljIH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBtb2RpZmllZCBjaGF0c1xuICAgICAgICAgICAgICAgIHNldFByb2Nlc3NlZENoYXRzKHVwZGF0ZWRDaGF0cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtb2RpZnlpbmcgY2hhdHM6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBtb2RpZnlDaGF0cygpO1xuICAgIH0sIFtwcm9wcy5jaGF0cywgdXNlcklkXSk7XG4gICAgY29uc3QgW2N1cnJEaXNwbGF5VXNlcixzZXRDdXJyRGlzcGxheVVzZXJdPVJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBnZXRVc2VyPWFzeW5jICgpPT57XG5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZW1wRGlzcD1nZXRVc2VyTmFtZUJ5SWQocHJvcHMucHJvZmlsZUlkKTtcbiAgICAgICAgc2V0Q3VyckRpc3BsYXlVc2VyKHRlbXBEaXNwKTtcblxuICAgIH0sW3Byb3BzLnByb2ZpbGVJZF0pXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSBSZWFjdC51c2VTdGF0ZShbXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBNeSBNYWluIG1hblwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBteSBOaWdnYVwiLCBcImlkXCI6IFwiMlwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJXaG8geW91IGNhbGxpbmcgTmlnZ2FcIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiSGkgTXkgTWFpbiBtYW5cIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiSGkgbXkgTmlnZ2FcIiwgXCJpZFwiOiBcIjJcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiV2hvIHlvdSBjYWxsaW5nIE5pZ2dhXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIE15IE1haW4gbWFuXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHsgXCJtc2dcIjogXCJXaG8geW91IGNhbGxpbmcgTmlnZ2FcIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiSGkgTXkgTWFpbiBtYW5cIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiSGkgbXkgTmlnZ2FcIiwgXCJpZFwiOiBcIjJcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiV2hvIHlvdSBjYWxsaW5nIE5pZ2dhXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgLy8gQWRkIG1vcmUgbWVzc2FnZXMgaGVyZS4uLlxuICAgIF0pO1xuXG4gICAgY29uc3QgW2N1cnJNc2csIHNldEN1cnJNc2ddID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc2V0Q3Vyck1zZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGlmKGN1cnJNc2cubGVuZ3RoPjApXG4gICAgICAgeyBjb25zdCB0ZW1wID0geyBcIm1zZ1wiOiBjdXJyTXNnLCBcImlkXCI6IDEgfTtcbiAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZXMuY29uY2F0KHRlbXApKTtcbiAgICAgICAgc2V0Q3Vyck1zZyhcIlwiKTt9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIGhhbmRsZVN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtODAwIGZsZXggZmxleC1jb2wgaC1mdWxsIHAtMSBtLTEgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPFByb2ZpbGUgY3VyckRpc3BsYXlVc2VyPXtjdXJyRGlzcGxheVVzZXJ9IC8+XG4gICAgICAgICAgICB7LyogPFBlcmZlY3RTY3JvbGxiYXI+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXttZXNzYWdlc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvUGVyZmVjdFNjcm9sbGJhcj4gICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC1hdXRvIHAtMiBiZy1zbGF0ZS03MDBcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgcm91bmRlZC1mdWxsIHctZnVsbCBkcm9wLXNoYWRvdy1tZFwiIFxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCIgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyTXNnfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHJvdW5kZWQtZnVsbCBwLTIgbS0yXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiUHJvZmlsZSIsIlVzZXJDb250ZXh0IiwidXNlVXNlciIsIlRleHRGaWVsZCIsIk1lc3NhZ2VzIiwiUGVyZmVjdFNjcm9sbGJhciIsInVzZUVmZmVjdCIsImRvYyIsImdldERvYyIsImRiIiwicHJvcHMiLCJ1c2VyQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJvdGhlclVzZXIiLCJnZXRVc2VyTmFtZUJ5SWQiLCJyZWNlaXZlciIsInVzZXJSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwidXNlckRhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInBpYyIsInByb2ZpbGVQaWN0dXJlIiwicGFpciIsImVycm9yIiwidXNlcklkIiwibW9kaWZ5Q2hhdHMiLCJ1cGRhdGVkQ2hhdHMiLCJQcm9taXNlIiwiYWxsIiwiY2hhdHMiLCJtYXAiLCJjb250IiwicmVjZWl2ZXJBcnJheSIsInBhcnRpY2lwYW50cyIsImZpbHRlciIsInBpZCIsImNoYXQiLCJzZXRQcm9jZXNzZWRDaGF0cyIsImN1cnJEaXNwbGF5VXNlciIsInNldEN1cnJEaXNwbGF5VXNlciIsImdldFVzZXIiLCJ0ZW1wRGlzcCIsInByb2ZpbGVJZCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjdXJyTXNnIiwic2V0Q3Vyck1zZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwibGVuZ3RoIiwidGVtcCIsImNvbmNhdCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInZhcmlhbnQiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/chat.jsx\n"));

/***/ })

});