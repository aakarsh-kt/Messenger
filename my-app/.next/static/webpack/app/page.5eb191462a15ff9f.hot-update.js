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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.jsx */ \"(app-pages-browser)/./app/components/profile.jsx\");\n/* harmony import */ var _userContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userContext.jsx */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var _barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _messages_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.jsx */ \"(app-pages-browser)/./app/components/messages.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase.js */ \"(app-pages-browser)/./app/firebase.js\");\n\"use-client\";\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const userContext = (0,_userContext_jsx__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userContext);\n    const otherUser = props.otherUser;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setUser(userContext);\n    }, [\n        userContext\n    ]);\n    // const {user,setUser}=useContext(UserContext);\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase_js__WEBPACK_IMPORTED_MODULE_8__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userDoc.id;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"id\": id,\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const userId = props.userId;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.data.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const pair = await getUserNameById(receiver);\n                    // console.log(profilePic)\n                    return {\n                        \"id\": pair.id,\n                        \"name\": pair.name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": pair.pic\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        props.userId\n    ]);\n    const [currDisplayUser, setCurrDisplayUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            try {\n                // Await the result of the async function getUserNameById\n                const updatedUser = await getUserNameById(props.profileId);\n                console.log(updatedUser);\n                // Set the fetched user as the current display user\n                setCurrDisplayUser(updatedUser);\n            } catch (error) {\n                console.error(\"Error updating user:\", error);\n            }\n        };\n        // Call the async function\n        getUser();\n    }, [\n        props.profileId\n    ]); // Re-run the effect if profileId changes\n    const [messages, setMessages] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        }\n    ]);\n    const [currMsg, setCurrMsg] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    function handleChange(event) {\n        setCurrMsg(event.target.value);\n    }\n    function handleSubmit(e) {\n        if (currMsg.length > 0) {\n            const temp = {\n                \"msg\": currMsg,\n                \"id\": 1\n            };\n            setMessages(messages.concat(temp));\n            setCurrMsg(\"\");\n        }\n    }\n    function handleKeyDown(event) {\n        if (event.key === \"Enter\") handleSubmit();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-800 flex flex-col h-full p-1 m-1 rounded-md\",\n        children: [\n            console.log(processedChats),\n            console.log(props.chats),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                currDisplayUser: currDisplayUser\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 133,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_messages_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    messages: messages,\n                    chatId: chatId\n                }, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                    lineNumber: 136,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 135,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 mt-auto p-2 bg-slate-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        className: \"bg-slate-200 rounded-full w-full drop-shadow-md\",\n                        id: \"outlined-basic\",\n                        label: \"Message\",\n                        value: currMsg,\n                        variant: \"outlined\",\n                        onChange: handleChange,\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 142,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-500 rounded-full p-2 m-2\",\n                        onClick: handleSubmit,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n        lineNumber: 130,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NoYXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFMEM7QUFDTjtBQUNzQjtBQUNoQjtBQUNKO0FBQ2lCO0FBQ0Y7QUFDbkI7QUFDZTtBQUNiO0FBRXBDLDZCQUFlLG9DQUFTWSxLQUFLO0lBQ3pCLE1BQU1DLGNBQWNULHlEQUFPQTtJQUMzQixNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdmLHFEQUFjLENBQUMsRUFBRTtJQUM3RCxNQUFNLENBQUNpQixNQUFNQyxRQUFRLEdBQUdsQixxREFBYyxDQUFDYTtJQUN2QyxNQUFNTSxZQUFVUCxNQUFNTyxTQUFTO0lBQy9CbkIsc0RBQWUsQ0FBQztRQUNaa0IsUUFBUUw7SUFDWixHQUFHO1FBQUNBO0tBQVk7SUFDaEIsZ0RBQWdEO0lBQ2hELGVBQWVPLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0EsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVViLHVEQUFHQSxDQUFDRSw0Q0FBRUEsRUFBRSxTQUFTVTtZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNYiwwREFBTUEsQ0FBQ1k7WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNsQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNMLFFBQVFNLEVBQUU7Z0JBQ3RCLE1BQU1BLEtBQUtOLFFBQVFNLEVBQUU7Z0JBQ3JCLE1BQU1DLE9BQU9MLFNBQVNLLElBQUk7Z0JBQzFCLE1BQU1DLE1BQU1OLFNBQVNPLGNBQWM7Z0JBQ25DLE1BQU1DLE9BQU87b0JBQUMsTUFBS0o7b0JBQUksUUFBUUM7b0JBQU0sT0FBT0M7Z0JBQUk7Z0JBQ2hESixRQUFRQyxHQUFHLENBQUNHO2dCQUNaLE9BQU9FO1lBQ1gsT0FBTztnQkFDSE4sUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtRQUNKLEVB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Q2Q7WUFDWmEsUUFBUUMsR0FBRyxDQUFDaEIsTUFBTTRCLEtBQUs7MEJBQ3hCLDhEQUFDdEMsb0RBQU9BO2dCQUFDOEMsaUJBQWlCQTs7Ozs7OzBCQUUxQiw4REFBQ29CO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDL0QscURBQVFBO29CQUFDK0MsVUFBVUE7b0JBQ3BCaUIsUUFBUUE7Ozs7Ozs7Ozs7OzBCQUlaLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNoRSxxRkFBU0E7d0JBQ05nRSxXQUFVO3dCQUNWeEMsSUFBRzt3QkFDSDBDLE9BQU07d0JBQ05YLE9BQU9MO3dCQUNQaUIsU0FBUTt3QkFDUkMsVUFBVWhCO3dCQUNWaUIsV0FBV1I7Ozs7OztrQ0FFZiw4REFBQ1M7d0JBQU9OLFdBQVU7d0JBQW9DTyxTQUFTZjtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2NoYXQuanN4P2Q4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UtY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL3Byb2ZpbGUuanN4XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCwgdXNlVXNlciB9IGZyb20gXCIuLi91c2VyQ29udGV4dC5qc3hcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXMuanN4XCI7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdyZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQgJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyL2Rpc3QvY3NzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VVc2VyKCk7XG4gICAgY29uc3QgW3Byb2Nlc3NlZENoYXRzLCBzZXRQcm9jZXNzZWRDaGF0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUodXNlckNvbnRleHQpO1xuICAgIGNvbnN0IG90aGVyVXNlcj1wcm9wcy5vdGhlclVzZXI7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VXNlcih1c2VyQ29udGV4dCk7XG4gICAgfSwgW3VzZXJDb250ZXh0XSk7XG4gICAgLy8gY29uc3Qge3VzZXIsc2V0VXNlcn09dXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHVzZXJJZCBpbiB0aGUgXCJ1c2Vyc1wiIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZGIsIFwiVXNlcnNcIiwgcmVjZWl2ZXIpO1xuXG4gICAgICAgICAgICAvLyBGZXRjaCB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlclJlZik7XG5cbiAgICAgICAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBhbmQgcmV0dXJuIHRoZSB1c2VyJ3MgbmFtZSBmcm9tIHRoZSBkb2N1bWVudCBkYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRG9jLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHVzZXJEb2MuaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcGljID0gdXNlckRhdGEucHJvZmlsZVBpY3R1cmU7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IHtcImlkXCI6aWQsIFwibmFtZVwiOiBuYW1lLCBcInBpY1wiOiBwaWMgfTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaWMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhaXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCB1c2VyIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdXNlcklkPXByb3BzLnVzZXJJZDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RpZnlDaGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gVXNpbmcgUHJvbWlzZS5hbGwgdG8gaGFuZGxlIGFzeW5jIG1hcCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2hhdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hhdHMubWFwKGFzeW5jIChjb250KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlckFycmF5ID0gY29udC5kYXRhLnBhcnRpY2lwYW50cy5maWx0ZXIocGlkID0+IHBpZCAhPT0gdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyID0gcmVjZWl2ZXJBcnJheVswXTsgLy8gQXNzdW1pbmcgb25seSBvbmUgcmVjZWl2ZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgZ2V0VXNlck5hbWVCeUlkIGlzIGFzeW5jIGFuZCBmZXRjaGVzIHRoZSB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IGF3YWl0IGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9maWxlUGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgXCJpZFwiOnBhaXIuaWQsXCJuYW1lXCI6IHBhaXIubmFtZSwgXCJjaGF0XCI6IGNvbnQuY2hhdCwgXCJwcm9maWxlUGljXCI6IHBhaXIucGljIH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBtb2RpZmllZCBjaGF0c1xuICAgICAgICAgICAgICAgIHNldFByb2Nlc3NlZENoYXRzKHVwZGF0ZWRDaGF0cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtb2RpZnlpbmcgY2hhdHM6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBtb2RpZnlDaGF0cygpO1xuICAgIH0sIFtwcm9wcy5jaGF0cywgcHJvcHMudXNlcklkXSk7XG4gICAgY29uc3QgW2N1cnJEaXNwbGF5VXNlcixzZXRDdXJyRGlzcGxheVVzZXJdPVJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEF3YWl0IHRoZSByZXN1bHQgb2YgdGhlIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJOYW1lQnlJZFxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgZ2V0VXNlck5hbWVCeUlkKHByb3BzLnByb2ZpbGVJZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlZFVzZXIpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgZmV0Y2hlZCB1c2VyIGFzIHRoZSBjdXJyZW50IGRpc3BsYXkgdXNlclxuICAgICAgICAgICAgICAgIHNldEN1cnJEaXNwbGF5VXNlcih1cGRhdGVkVXNlcik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIENhbGwgdGhlIGFzeW5jIGZ1bmN0aW9uXG4gICAgICAgIGdldFVzZXIoKTtcbiAgICAgICAgXG4gICAgfSwgW3Byb3BzLnByb2ZpbGVJZF0pOyAvLyBSZS1ydW4gdGhlIGVmZmVjdCBpZiBwcm9maWxlSWQgY2hhbmdlc1xuICAgIFxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gUmVhY3QudXNlU3RhdGUoW1xuICAgICAgICB7IFwibXNnXCI6IFwiSGkgTXkgTWFpbiBtYW5cIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiSGkgbXkgTmlnZ2FcIiwgXCJpZFwiOiBcIjJcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiV2hvIHlvdSBjYWxsaW5nIE5pZ2dhXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIE15IE1haW4gbWFuXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIG15IE5pZ2dhXCIsIFwiaWRcIjogXCIyXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIldobyB5b3UgY2FsbGluZyBOaWdnYVwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBNeSBNYWluIG1hblwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICB7IFwibXNnXCI6IFwiV2hvIHlvdSBjYWxsaW5nIE5pZ2dhXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIE15IE1haW4gbWFuXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIG15IE5pZ2dhXCIsIFwiaWRcIjogXCIyXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIldobyB5b3UgY2FsbGluZyBOaWdnYVwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIC8vIEFkZCBtb3JlIG1lc3NhZ2VzIGhlcmUuLi5cbiAgICBdKTtcblxuICAgIGNvbnN0IFtjdXJyTXNnLCBzZXRDdXJyTXNnXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldEN1cnJNc2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBpZihjdXJyTXNnLmxlbmd0aD4wKVxuICAgICAgIHsgY29uc3QgdGVtcCA9IHsgXCJtc2dcIjogY3Vyck1zZywgXCJpZFwiOiAxIH07XG4gICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VzLmNvbmNhdCh0ZW1wKSk7XG4gICAgICAgIHNldEN1cnJNc2coXCJcIik7fVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSBoYW5kbGVTdWJtaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTgwMCBmbGV4IGZsZXgtY29sIGgtZnVsbCBwLTEgbS0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9jZXNzZWRDaGF0cyl9XG4gICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMuY2hhdHMpfVxuICAgICAgICAgICAgPFByb2ZpbGUgY3VyckRpc3BsYXlVc2VyPXtjdXJyRGlzcGxheVVzZXJ9IC8+XG4gICAgICAgICAgICB7LyogPFBlcmZlY3RTY3JvbGxiYXI+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXttZXNzYWdlc30gXG4gICAgICAgICAgICAgICAgY2hhdElkPXtjaGF0SWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvUGVyZmVjdFNjcm9sbGJhcj4gICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC1hdXRvIHAtMiBiZy1zbGF0ZS03MDBcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgcm91bmRlZC1mdWxsIHctZnVsbCBkcm9wLXNoYWRvdy1tZFwiIFxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCIgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyTXNnfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHJvdW5kZWQtZnVsbCBwLTIgbS0yXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiUHJvZmlsZSIsIlVzZXJDb250ZXh0IiwidXNlVXNlciIsIlRleHRGaWVsZCIsIk1lc3NhZ2VzIiwiUGVyZmVjdFNjcm9sbGJhciIsInVzZUVmZmVjdCIsImRvYyIsImdldERvYyIsImRiIiwicHJvcHMiLCJ1c2VyQ29udGV4dCIsInByb2Nlc3NlZENoYXRzIiwic2V0UHJvY2Vzc2VkQ2hhdHMiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwib3RoZXJVc2VyIiwiZ2V0VXNlck5hbWVCeUlkIiwicmVjZWl2ZXIiLCJ1c2VyUmVmIiwidXNlckRvYyIsImV4aXN0cyIsInVzZXJEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJwaWMiLCJwcm9maWxlUGljdHVyZSIsInBhaXIiLCJlcnJvciIsInVzZXJJZCIsIm1vZGlmeUNoYXRzIiwidXBkYXRlZENoYXRzIiwiUHJvbWlzZSIsImFsbCIsImNoYXRzIiwibWFwIiwiY29udCIsInJlY2VpdmVyQXJyYXkiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwaWQiLCJjaGF0IiwiY3VyckRpc3BsYXlVc2VyIiwic2V0Q3VyckRpc3BsYXlVc2VyIiwiZ2V0VXNlciIsInVwZGF0ZWRVc2VyIiwicHJvZmlsZUlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImN1cnJNc2ciLCJzZXRDdXJyTXNnIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJsZW5ndGgiLCJ0ZW1wIiwiY29uY2F0IiwiaGFuZGxlS2V5RG93biIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsImNoYXRJZCIsImxhYmVsIiwidmFyaWFudCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/chat.jsx\n"));

/***/ })

});