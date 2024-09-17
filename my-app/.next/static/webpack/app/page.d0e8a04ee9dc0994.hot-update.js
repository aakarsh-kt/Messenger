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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.jsx */ \"(app-pages-browser)/./app/components/profile.jsx\");\n/* harmony import */ var _userContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userContext.jsx */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var _barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _messages_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.jsx */ \"(app-pages-browser)/./app/components/messages.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase.js */ \"(app-pages-browser)/./app/firebase.js\");\n\"use-client\";\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const userContext = (0,_userContext_jsx__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userContext);\n    const otherUser = props.otherUser;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setUser(userContext);\n    }, [\n        userContext\n    ]);\n    // const {user,setUser}=useContext(UserContext);\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase_js__WEBPACK_IMPORTED_MODULE_8__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userDoc.id;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"id\": id,\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const userId = props.userId;\n    // useEffect(() => {\n    //     const modifyChats = async () => {\n    //         try {\n    //             // Using Promise.all to handle async map operation\n    //             const updatedChats = await Promise.all(\n    //                 props.chats.map(async (cont) => {\n    //                     const receiverArray = cont.participants.filter(pid => pid !== userId);\n    //                     const receiver = receiverArray[0]; // Assuming only one receiver\n    //                     // Assuming getUserNameById is async and fetches the username\n    //                     const pair = await getUserNameById(receiver);\n    //                     // console.log(profilePic)\n    //                     return { \"id\":pair.id,\"name\": pair.name, \"chat\": cont.chat, \"profilePic\": pair.pic };\n    //                 })\n    //             );\n    //             // Update the state with modified chats\n    //             setProcessedChats(updatedChats);\n    //         } catch (error) {\n    //             console.error(\"Error modifying chats:\", error);\n    //         }\n    //     };\n    //     modifyChats();\n    // }, [props.chats, props.userId]);\n    const [currDisplayUser, setCurrDisplayUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            try {\n                // Await the result of the async function getUserNameById\n                const updatedUser = await getUserNameById(props.profileId);\n                console.log(updatedUser);\n                // Set the fetched user as the current display user\n                setCurrDisplayUser(updatedUser);\n            } catch (error) {\n                console.error(\"Error updating user:\", error);\n            }\n        };\n        // Call the async function\n        getUser();\n    }, [\n        props.profileId\n    ]); // Re-run the effect if profileId changes\n    const [messages, setMessages] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        }\n    ]);\n    const [currMsg, setCurrMsg] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    function handleChange(event) {\n        setCurrMsg(event.target.value);\n    }\n    function handleSubmit(e) {\n        if (currMsg.length > 0) {\n            const temp = {\n                \"msg\": currMsg,\n                \"id\": 1\n            };\n            setMessages(messages.concat(temp));\n            setCurrMsg(\"\");\n        }\n    }\n    function handleKeyDown(event) {\n        if (event.key === \"Enter\") handleSubmit();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-800 flex flex-col h-full p-1 m-1 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                currDisplayUser: currDisplayUser\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 131,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_messages_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    messages: messages\n                }, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                    lineNumber: 134,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 133,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 mt-auto p-2 bg-slate-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        className: \"bg-slate-200 rounded-full w-full drop-shadow-md\",\n                        id: \"outlined-basic\",\n                        label: \"Message\",\n                        value: currMsg,\n                        variant: \"outlined\",\n                        onChange: handleChange,\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-500 rounded-full p-2 m-2\",\n                        onClick: handleSubmit,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n        lineNumber: 130,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NoYXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFMEM7QUFDTjtBQUNzQjtBQUNoQjtBQUNKO0FBQ2lCO0FBQ0Y7QUFDbkI7QUFDZTtBQUNiO0FBRXBDLDZCQUFlLG9DQUFTWSxLQUFLO0lBQ3pCLE1BQU1DLGNBQWNULHlEQUFPQTtJQUMzQixNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdmLHFEQUFjLENBQUMsRUFBRTtJQUM3RCxNQUFNLENBQUNpQixNQUFNQyxRQUFRLEdBQUdsQixxREFBYyxDQUFDYTtJQUN2QyxNQUFNTSxZQUFVUCxNQUFNTyxTQUFTO0lBQy9CbkIsc0RBQWUsQ0FBQztRQUNaa0IsUUFBUUw7SUFDWixHQUFHO1FBQUNBO0tBQVk7SUFDaEIsZ0RBQWdEO0lBQ2hELGVBQWVPLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0EsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVViLHVEQUFHQSxDQUFDRSw0Q0FBRUEsRUFBRSxTQUFTVTtZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNYiwwREFBTUEsQ0FBQ1k7WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNsQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNMLFFBQVFNLEVBQUU7Z0JBQ3RCLE1BQU1BLEtBQUtOLFFBQVFNLEVBQUU7Z0JBQ3JCLE1BQU1DLE9BQU9MLFNBQVNLLElBQUk7Z0JBQzFCLE1BQU1DLE1BQU1OLFNBQVNPLGNBQWM7Z0JBQ25DLE1BQU1DLE9BQU87b0JBQUMsTUFBS0o7b0JBQUksUUFBUUM7b0JBQU0sT0FBT0M7Z0JBQUk7Z0JBQ2hESixRQUFRQyxHQUFHLENBQUNHO2dCQUNaLE9BQU9FO1lBQ1gsT0FBTztnQkFDSE4sUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtRQUNKLEVB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ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2NoYXQuanN4P2Q4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UtY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL3Byb2ZpbGUuanN4XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCwgdXNlVXNlciB9IGZyb20gXCIuLi91c2VyQ29udGV4dC5qc3hcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXMuanN4XCI7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdyZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQgJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyL2Rpc3QvY3NzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgY29uc3QgdXNlckNvbnRleHQgPSB1c2VVc2VyKCk7XG4gICAgY29uc3QgW3Byb2Nlc3NlZENoYXRzLCBzZXRQcm9jZXNzZWRDaGF0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUodXNlckNvbnRleHQpO1xuICAgIGNvbnN0IG90aGVyVXNlcj1wcm9wcy5vdGhlclVzZXI7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VXNlcih1c2VyQ29udGV4dCk7XG4gICAgfSwgW3VzZXJDb250ZXh0XSk7XG4gICAgLy8gY29uc3Qge3VzZXIsc2V0VXNlcn09dXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHVzZXJJZCBpbiB0aGUgXCJ1c2Vyc1wiIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZGIsIFwiVXNlcnNcIiwgcmVjZWl2ZXIpO1xuXG4gICAgICAgICAgICAvLyBGZXRjaCB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlclJlZik7XG5cbiAgICAgICAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBhbmQgcmV0dXJuIHRoZSB1c2VyJ3MgbmFtZSBmcm9tIHRoZSBkb2N1bWVudCBkYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRG9jLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHVzZXJEb2MuaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcGljID0gdXNlckRhdGEucHJvZmlsZVBpY3R1cmU7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IHtcImlkXCI6aWQsIFwibmFtZVwiOiBuYW1lLCBcInBpY1wiOiBwaWMgfTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaWMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhaXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCB1c2VyIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdXNlcklkPXByb3BzLnVzZXJJZDtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBtb2RpZnlDaGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gVXNpbmcgUHJvbWlzZS5hbGwgdG8gaGFuZGxlIGFzeW5jIG1hcCBvcGVyYXRpb25cbiAgICAvLyAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2hhdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcHMuY2hhdHMubWFwKGFzeW5jIChjb250KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlckFycmF5ID0gY29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZCA9PiBwaWQgIT09IHVzZXJJZCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlciA9IHJlY2VpdmVyQXJyYXlbMF07IC8vIEFzc3VtaW5nIG9ubHkgb25lIHJlY2VpdmVyXG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtaW5nIGdldFVzZXJOYW1lQnlJZCBpcyBhc3luYyBhbmQgZmV0Y2hlcyB0aGUgdXNlcm5hbWVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSBhd2FpdCBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZmlsZVBpYylcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFwiaWRcIjpwYWlyLmlkLFwibmFtZVwiOiBwYWlyLm5hbWUsIFwiY2hhdFwiOiBjb250LmNoYXQsIFwicHJvZmlsZVBpY1wiOiBwYWlyLnBpYyB9O1xuICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICk7XG5cbiAgICAvLyAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbW9kaWZpZWQgY2hhdHNcbiAgICAvLyAgICAgICAgICAgICBzZXRQcm9jZXNzZWRDaGF0cyh1cGRhdGVkQ2hhdHMpO1xuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW9kaWZ5aW5nIGNoYXRzOlwiLCBlcnJvcik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgbW9kaWZ5Q2hhdHMoKTtcbiAgICAvLyB9LCBbcHJvcHMuY2hhdHMsIHByb3BzLnVzZXJJZF0pO1xuICAgIGNvbnN0IFtjdXJyRGlzcGxheVVzZXIsc2V0Q3VyckRpc3BsYXlVc2VyXT1SZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBBd2FpdCB0aGUgcmVzdWx0IG9mIHRoZSBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTmFtZUJ5SWRcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IGdldFVzZXJOYW1lQnlJZChwcm9wcy5wcm9maWxlSWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRVc2VyKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGZldGNoZWQgdXNlciBhcyB0aGUgY3VycmVudCBkaXNwbGF5IHVzZXJcbiAgICAgICAgICAgICAgICBzZXRDdXJyRGlzcGxheVVzZXIodXBkYXRlZFVzZXIpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBDYWxsIHRoZSBhc3luYyBmdW5jdGlvblxuICAgICAgICBnZXRVc2VyKCk7XG4gICAgICAgIFxuICAgIH0sIFtwcm9wcy5wcm9maWxlSWRdKTsgLy8gUmUtcnVuIHRoZSBlZmZlY3QgaWYgcHJvZmlsZUlkIGNoYW5nZXNcbiAgICBcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKFtcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIE15IE1haW4gbWFuXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIG15IE5pZ2dhXCIsIFwiaWRcIjogXCIyXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIldobyB5b3UgY2FsbGluZyBOaWdnYVwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBNeSBNYWluIG1hblwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBteSBOaWdnYVwiLCBcImlkXCI6IFwiMlwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJXaG8geW91IGNhbGxpbmcgTmlnZ2FcIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiSGkgTXkgTWFpbiBtYW5cIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgeyBcIm1zZ1wiOiBcIldobyB5b3UgY2FsbGluZyBOaWdnYVwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBNeSBNYWluIG1hblwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBteSBOaWdnYVwiLCBcImlkXCI6IFwiMlwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJXaG8geW91IGNhbGxpbmcgTmlnZ2FcIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICAvLyBBZGQgbW9yZSBtZXNzYWdlcyBoZXJlLi4uXG4gICAgXSk7XG5cbiAgICBjb25zdCBbY3Vyck1zZywgc2V0Q3Vyck1zZ10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRDdXJyTXNnKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgaWYoY3Vyck1zZy5sZW5ndGg+MClcbiAgICAgICB7IGNvbnN0IHRlbXAgPSB7IFwibXNnXCI6IGN1cnJNc2csIFwiaWRcIjogMSB9O1xuICAgICAgICBzZXRNZXNzYWdlcyhtZXNzYWdlcy5jb25jYXQodGVtcCkpO1xuICAgICAgICBzZXRDdXJyTXNnKFwiXCIpO31cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikgaGFuZGxlU3VibWl0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS04MDAgZmxleCBmbGV4LWNvbCBoLWZ1bGwgcC0xIG0tMSByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICA8UHJvZmlsZSBjdXJyRGlzcGxheVVzZXI9e2N1cnJEaXNwbGF5VXNlcn0gLz5cbiAgICAgICAgICAgIHsvKiA8UGVyZmVjdFNjcm9sbGJhcj4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9e21lc3NhZ2VzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPC9QZXJmZWN0U2Nyb2xsYmFyPiAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG10LWF1dG8gcC0yIGJnLXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTIwMCByb3VuZGVkLWZ1bGwgdy1mdWxsIGRyb3Atc2hhZG93LW1kXCIgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIiBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJNc2d9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgcm91bmRlZC1mdWxsIHAtMiBtLTJcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJQcm9maWxlIiwiVXNlckNvbnRleHQiLCJ1c2VVc2VyIiwiVGV4dEZpZWxkIiwiTWVzc2FnZXMiLCJQZXJmZWN0U2Nyb2xsYmFyIiwidXNlRWZmZWN0IiwiZG9jIiwiZ2V0RG9jIiwiZGIiLCJwcm9wcyIsInVzZXJDb250ZXh0IiwicHJvY2Vzc2VkQ2hhdHMiLCJzZXRQcm9jZXNzZWRDaGF0cyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJvdGhlclVzZXIiLCJnZXRVc2VyTmFtZUJ5SWQiLCJyZWNlaXZlciIsInVzZXJSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwidXNlckRhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInBpYyIsInByb2ZpbGVQaWN0dXJlIiwicGFpciIsImVycm9yIiwidXNlcklkIiwiY3VyckRpc3BsYXlVc2VyIiwic2V0Q3VyckRpc3BsYXlVc2VyIiwiZ2V0VXNlciIsInVwZGF0ZWRVc2VyIiwicHJvZmlsZUlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImN1cnJNc2ciLCJzZXRDdXJyTXNnIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJsZW5ndGgiLCJ0ZW1wIiwiY29uY2F0IiwiaGFuZGxlS2V5RG93biIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwidmFyaWFudCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/chat.jsx\n"));

/***/ })

});