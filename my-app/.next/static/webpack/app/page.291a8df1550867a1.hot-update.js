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

/***/ "(app-pages-browser)/./app/components/messages.jsx":
/*!*************************************!*\
  !*** ./app/components/messages.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _otherMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherMessage */ \"(app-pages-browser)/./app/components/otherMessage.jsx\");\n/* harmony import */ var _myMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myMessage */ \"(app-pages-browser)/./app/components/myMessage.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const id = 1;\n    const [chat, setChat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    // useEffect(() => {\n    //     const fetchChat = async () => {\n    //         if (props.currChat) { // Check if chatId exists\n    //             try {\n    //                 // Reference to the specific document in the \"Chats\" collection\n    //                 const chatRef = doc(db, \"Chats\", props.currChat);\n    //                 // Fetch the chat document from Firestore\n    //                 const chatDoc = await getDoc(chatRef);\n    //                 if (chatDoc.exists()) {\n    //                     // Get the chat data\n    //                     const chatData = chatDoc.data();\n    //                     console.log(\"Chat Data:\", chatData);\n    //                     // Do something with the fetched chat data (e.g., store in state)\n    //                     setChat(chatData);  // Assuming you have a state to store the chat\n    //                 } else {\n    //                     console.log(\"No such chat!\");\n    //                 }\n    //             } catch (error) {\n    //                 console.error(\"Error fetching chat:\", error);\n    //             }\n    //         }\n    //     };\n    //     fetchChat();\n    // }, [props.currChat]); // Run effect when `currChat` changes\n    const [dispChat, setDispChat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.chats);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log(\"Surely yes\");\n        setDispChat([]);\n        // Loop through all chats\n        props === null || props === void 0 ? void 0 : props.chats.map((cht)=>{\n            // console.log(\"Atleast here\");\n            // console.log(props.currChat);\n            // console.log(cht);\n            // Check if the current chat matches the selected chat\n            if (cht.chatId === props.currChat) {\n                // console.log(cht.data);\n                // Loop through each message in the chat and add it to dispChat\n                cht === null || cht === void 0 ? void 0 : cht.data.chat.forEach((mg)=>{\n                    const temp = {\n                        msg: mg.msg,\n                        sender: mg.sender\n                    };\n                    // console.log(temp);\n                    // Use the functional form of setState to ensure you're appending\n                    setDispChat((prevDispChat)=>[\n                            ...prevDispChat,\n                            temp\n                        ]);\n                });\n            }\n        });\n    }, [\n        props.chats,\n        props.currChat\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-500 rounded-2xl h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-2\",\n            children: props.chats.map((msg, index)=>{\n                // Check if the chatId matches the current chat\n                if (msg.chatId == props.currChat) {\n                    return msg.data.chat.map((mg, idx)=>{\n                        // console.log(msg);\n                        // console.log(props.currChat);\n                        // console.log(props.userId);\n                        // Check if the message sender is the current user\n                        if (mg.sender == props.userId) {\n                            // console.log(\"Printing MyMessage\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_myMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                msg: mg.msg\n                            }, idx, false, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 40\n                            }, this);\n                        } else {\n                            // console.log(\"Printing OtherMessage\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_otherMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                msg: mg.msg\n                            }, idx, false, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 40\n                            }, this);\n                        }\n                    });\n                }\n                return null; // Return null for unmatched chatIds\n            })\n        }, void 0, false, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n            lineNumber: 70,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDZ0I7QUFDTjtBQUNtQjtBQUNGO0FBQ25CO0FBQ2U7QUFDaEI7QUFFakMsNkJBQWUsb0NBQVVRLEtBQUs7SUFDMUIsTUFBTUMsS0FBSztJQUNYLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFDWCxxREFBYyxDQUFDO0lBQ3BDLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsMERBQTBEO0lBQzFELG9CQUFvQjtJQUNwQixrRkFBa0Y7SUFDbEYsb0VBQW9FO0lBRXBFLDREQUE0RDtJQUM1RCx5REFBeUQ7SUFFekQsMENBQTBDO0lBQzFDLDJDQUEyQztJQUMzQyx1REFBdUQ7SUFDdkQsMkRBQTJEO0lBRTNELHdGQUF3RjtJQUN4Rix5RkFBeUY7SUFDekYsMkJBQTJCO0lBQzNCLG9EQUFvRDtJQUNwRCxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtJQUNoRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFNBQVM7SUFFVCxtQkFBbUI7SUFDbkIsOERBQThEO0lBQzlELE1BQU0sQ0FBQ2EsVUFBU0MsWUFBWSxHQUFDZCxxREFBYyxDQUFDUSxNQUFNTyxLQUFLO0lBQ3ZEWCxnREFBU0EsQ0FBQztRQUNOLDZCQUE2QjtRQUM3QlUsWUFBWSxFQUFFO1FBQ2QseUJBQXlCO1FBQ3pCTixrQkFBQUEsNEJBQUFBLE1BQU9PLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO1lBQ2QsK0JBQStCO1lBQy9CLCtCQUErQjtZQUMvQixvQkFBb0I7WUFFcEIsc0RBQXNEO1lBQ3RELElBQUlBLElBQUlDLE1BQU0sS0FBS1YsTUFBTVcsUUFBUSxFQUFFO2dCQUMvQix5QkFBeUI7Z0JBRXpCLCtEQUErRDtnQkFDL0RGLGdCQUFBQSwwQkFBQUEsSUFBS0csSUFBSSxDQUFDVixJQUFJLENBQUNXLE9BQU8sQ0FBQyxDQUFDQztvQkFDcEIsTUFBTUMsT0FBTzt3QkFBRUMsS0FBS0YsR0FBR0UsR0FBRzt3QkFBRUMsUUFBUUgsR0FBR0csTUFBTTtvQkFBQztvQkFDOUMscUJBQXFCO29CQUVyQixpRUFBaUU7b0JBQ2pFWCxZQUFZLENBQUNZLGVBQWlCOytCQUFJQTs0QkFBY0g7eUJBQUs7Z0JBQ3pEO1lBQ0o7UUFDSjtJQUNKLEdBQUc7UUFBQ2YsTUFBTU8sS0FBSztRQUFFUCxNQUFNVyxRQUFRO0tBQUM7SUFFaEMscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBSVZwQixNQUFNTyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDUSxLQUFLSztnQkFDbkIsK0NBQStDO2dCQUMvQyxJQUFJTCxJQUFJTixNQUFNLElBQUlWLE1BQU1XLFFBQVEsRUFBRTtvQkFDOUIsT0FBT0ssSUFBSUosSUFBSSxDQUFDVixJQUFJLENBQUNNLEdBQUcsQ0FBQyxDQUFDTSxJQUFJUTt3QkFDMUIsb0JBQW9CO3dCQUNwQiwrQkFBK0I7d0JBQy9CLDZCQUE2Qjt3QkFFN0Isa0RBQWtEO3dCQUNsRCxJQUFJUixHQUFHRyxNQUFNLElBQUlqQixNQUFNdUIsTUFBTSxFQUFFOzRCQUMzQixxQ0FBcUM7NEJBQ3JDLHFCQUFPLDhEQUFDN0Isa0RBQVNBO2dDQUFXc0IsS0FBS0YsR0FBR0UsR0FBRzsrQkFBaEJNOzs7Ozt3QkFDM0IsT0FBTzs0QkFDSCx3Q0FBd0M7NEJBQ3hDLHFCQUFPLDhEQUFDN0IscURBQVlBO2dDQUFXdUIsS0FBS0YsR0FBR0UsR0FBRzsrQkFBaEJNOzs7Ozt3QkFDOUI7b0JBQ0o7Z0JBQ0o7Z0JBQ0EsT0FBTyxNQUFNLG9DQUFvQztZQUNyRDs7Ozs7Ozs7Ozs7QUFLaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMuanN4PzkxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBPdGhlck1lc3NhZ2UgZnJvbSBcIi4vb3RoZXJNZXNzYWdlXCI7XG5pbXBvcnQgTXlNZXNzYWdlIGZyb20gXCIuL215TWVzc2FnZVwiO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0ICdyZWFjdC1wZXJmZWN0LXNjcm9sbGJhci9kaXN0L2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBjb25zdCBpZCA9IDE7XG4gICAgY29uc3QgW2NoYXQsc2V0Q2hhdF09UmVhY3QudXNlU3RhdGUoXCJcIik7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgZmV0Y2hDaGF0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKHByb3BzLmN1cnJDaGF0KSB7IC8vIENoZWNrIGlmIGNoYXRJZCBleGlzdHNcbiAgICAvLyAgICAgICAgICAgICB0cnkge1xuICAgIC8vICAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIHNwZWNpZmljIGRvY3VtZW50IGluIHRoZSBcIkNoYXRzXCIgY29sbGVjdGlvblxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBjaGF0UmVmID0gZG9jKGRiLCBcIkNoYXRzXCIsIHByb3BzLmN1cnJDaGF0KTtcbiAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIGNoYXQgZG9jdW1lbnQgZnJvbSBGaXJlc3RvcmVcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgY2hhdERvYyA9IGF3YWl0IGdldERvYyhjaGF0UmVmKTtcbiAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGNoYXREb2MuZXhpc3RzKCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY2hhdCBkYXRhXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGF0RGF0YSA9IGNoYXREb2MuZGF0YSgpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGF0IERhdGE6XCIsIGNoYXREYXRhKTtcbiAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBmZXRjaGVkIGNoYXQgZGF0YSAoZS5nLiwgc3RvcmUgaW4gc3RhdGUpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBzZXRDaGF0KGNoYXREYXRhKTsgIC8vIEFzc3VtaW5nIHlvdSBoYXZlIGEgc3RhdGUgdG8gc3RvcmUgdGhlIGNoYXRcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBjaGF0IVwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjaGF0OlwiLCBlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9O1xuICAgIFxuICAgIC8vICAgICBmZXRjaENoYXQoKTtcbiAgICAvLyB9LCBbcHJvcHMuY3VyckNoYXRdKTsgLy8gUnVuIGVmZmVjdCB3aGVuIGBjdXJyQ2hhdGAgY2hhbmdlc1xuICAgIGNvbnN0IFtkaXNwQ2hhdCxzZXREaXNwQ2hhdF09UmVhY3QudXNlU3RhdGUocHJvcHMuY2hhdHMpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU3VyZWx5IHllc1wiKTtcbiAgICAgICAgc2V0RGlzcENoYXQoW10pXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgY2hhdHNcbiAgICAgICAgcHJvcHM/LmNoYXRzLm1hcCgoY2h0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkF0bGVhc3QgaGVyZVwiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmN1cnJDaGF0KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNodCk7XG4gICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBjaGF0IG1hdGNoZXMgdGhlIHNlbGVjdGVkIGNoYXRcbiAgICAgICAgICAgIGlmIChjaHQuY2hhdElkID09PSBwcm9wcy5jdXJyQ2hhdCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNodC5kYXRhKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBtZXNzYWdlIGluIHRoZSBjaGF0IGFuZCBhZGQgaXQgdG8gZGlzcENoYXRcbiAgICAgICAgICAgICAgICBjaHQ/LmRhdGEuY2hhdC5mb3JFYWNoKChtZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0geyBtc2c6IG1nLm1zZywgc2VuZGVyOiBtZy5zZW5kZXIgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgZnVuY3Rpb25hbCBmb3JtIG9mIHNldFN0YXRlIHRvIGVuc3VyZSB5b3UncmUgYXBwZW5kaW5nXG4gICAgICAgICAgICAgICAgICAgIHNldERpc3BDaGF0KChwcmV2RGlzcENoYXQpID0+IFsuLi5wcmV2RGlzcENoYXQsIHRlbXBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW3Byb3BzLmNoYXRzLCBwcm9wcy5jdXJyQ2hhdF0pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHJvdW5kZWQtMnhsIGgtZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKHByb3BzLmNoYXRzKX0gKi99XG4gICAgICAgICAgICAgICAgIHsvKiBEZWJ1Z2dpbmcgbG9nICovfVxuICAgICAgICAgICAgICAgIHsvKiBMb29wIHRocm91Z2ggYWxsIGNoYXRzICovfVxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGF0cy5tYXAoKG1zZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNoYXRJZCBtYXRjaGVzIHRoZSBjdXJyZW50IGNoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5jaGF0SWQgPT0gcHJvcHMuY3VyckNoYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtc2cuZGF0YS5jaGF0Lm1hcCgobWcsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMuY3VyckNoYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnVzZXJJZCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1lc3NhZ2Ugc2VuZGVyIGlzIHRoZSBjdXJyZW50IHVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWcuc2VuZGVyID09IHByb3BzLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlByaW50aW5nIE15TWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNeU1lc3NhZ2Uga2V5PXtpZHh9IG1zZz17bWcubXNnfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlByaW50aW5nIE90aGVyTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPdGhlck1lc3NhZ2Uga2V5PXtpZHh9IG1zZz17bWcubXNnfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgZm9yIHVubWF0Y2hlZCBjaGF0SWRzXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgICBcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk90aGVyTWVzc2FnZSIsIk15TWVzc2FnZSIsIlBlcmZlY3RTY3JvbGxiYXIiLCJ1c2VFZmZlY3QiLCJkb2MiLCJnZXREb2MiLCJkYiIsInByb3BzIiwiaWQiLCJjaGF0Iiwic2V0Q2hhdCIsInVzZVN0YXRlIiwiZGlzcENoYXQiLCJzZXREaXNwQ2hhdCIsImNoYXRzIiwibWFwIiwiY2h0IiwiY2hhdElkIiwiY3VyckNoYXQiLCJkYXRhIiwiZm9yRWFjaCIsIm1nIiwidGVtcCIsIm1zZyIsInNlbmRlciIsInByZXZEaXNwQ2hhdCIsImRpdiIsImNsYXNzTmFtZSIsImluZGV4IiwiaWR4IiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/messages.jsx\n"));

/***/ })

});