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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _otherMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherMessage */ \"(app-pages-browser)/./app/components/otherMessage.jsx\");\n/* harmony import */ var _myMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myMessage */ \"(app-pages-browser)/./app/components/myMessage.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const id = 1;\n    const [chat, setChat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    // useEffect(() => {\n    //     const fetchChat = async () => {\n    //         if (props.currChat) { // Check if chatId exists\n    //             try {\n    //                 // Reference to the specific document in the \"Chats\" collection\n    //                 const chatRef = doc(db, \"Chats\", props.currChat);\n    //                 // Fetch the chat document from Firestore\n    //                 const chatDoc = await getDoc(chatRef);\n    //                 if (chatDoc.exists()) {\n    //                     // Get the chat data\n    //                     const chatData = chatDoc.data();\n    //                     console.log(\"Chat Data:\", chatData);\n    //                     // Do something with the fetched chat data (e.g., store in state)\n    //                     setChat(chatData);  // Assuming you have a state to store the chat\n    //                 } else {\n    //                     console.log(\"No such chat!\");\n    //                 }\n    //             } catch (error) {\n    //                 console.error(\"Error fetching chat:\", error);\n    //             }\n    //         }\n    //     };\n    //     fetchChat();\n    // }, [props.currChat]); // Run effect when `currChat` changes\n    const [dispChat, setDispChat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Surely yes\");\n        setDispChat([]);\n        // Loop through all chats\n        props === null || props === void 0 ? void 0 : props.chats.map((cht)=>{\n            console.log(\"Atleast here\");\n            console.log(props.currChat);\n            console.log(cht);\n            // Check if the current chat matches the selected chat\n            if (cht.chatId === props.currChat) {\n                // console.log(cht.data);\n                // Loop through each message in the chat and add it to dispChat\n                cht === null || cht === void 0 ? void 0 : cht.data.chat.forEach((mg)=>{\n                    const temp = {\n                        msg: mg.msg,\n                        sender: mg.sender\n                    };\n                    console.log(temp);\n                    // Use the functional form of setState to ensure you're appending\n                    setDispChat((prevDispChat)=>[\n                            ...prevDispChat,\n                            temp\n                        ]);\n                });\n            }\n        });\n    }, [\n        props.chats,\n        props.currChat\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-500 rounded-2xl h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-2\",\n            children: [\n                console.log(props.chats),\n                props.chats.map((msg, index)=>{\n                    if (msg.chatId == props.currChat) {\n                        msg.data.chat.map((mg, index)=>{\n                            {\n                                console.log(msg);\n                            }\n                            {\n                                console.log(props.currChat);\n                            }\n                            {\n                                console.log(props.currChat);\n                            }\n                            if (mg.sender == props.userId) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_myMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    msg: mg.msg\n                                }, index, false, {\n                                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 40\n                                }, this);\n                            } else {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_otherMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    msg: mg.msg\n                                }, index, false, {\n                                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 40\n                                }, this);\n                            }\n                        });\n                    }\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n            lineNumber: 71,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDZ0I7QUFDTjtBQUNtQjtBQUNGO0FBQ25CO0FBQ2U7QUFDaEI7QUFFakMsNkJBQWUsb0NBQVVRLEtBQUs7SUFDMUIsTUFBTUMsS0FBSztJQUNYLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFDWCxxREFBYyxDQUFDO0lBQ3BDLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsMERBQTBEO0lBQzFELG9CQUFvQjtJQUNwQixrRkFBa0Y7SUFDbEYsb0VBQW9FO0lBRXBFLDREQUE0RDtJQUM1RCx5REFBeUQ7SUFFekQsMENBQTBDO0lBQzFDLDJDQUEyQztJQUMzQyx1REFBdUQ7SUFDdkQsMkRBQTJEO0lBRTNELHdGQUF3RjtJQUN4Rix5RkFBeUY7SUFDekYsMkJBQTJCO0lBQzNCLG9EQUFvRDtJQUNwRCxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtJQUNoRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFNBQVM7SUFFVCxtQkFBbUI7SUFDbkIsOERBQThEO0lBQzlELE1BQU0sQ0FBQ2EsVUFBU0MsWUFBWSxHQUFDZCxxREFBYyxDQUFDLEVBQUU7SUFDOUNJLGdEQUFTQSxDQUFDO1FBQ05XLFFBQVFDLEdBQUcsQ0FBQztRQUNaRixZQUFZLEVBQUU7UUFDZCx5QkFBeUI7UUFDekJOLGtCQUFBQSw0QkFBQUEsTUFBT1MsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7WUFDZEosUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ1IsTUFBTVksUUFBUTtZQUMxQkwsUUFBUUMsR0FBRyxDQUFDRztZQUVaLHNEQUFzRDtZQUN0RCxJQUFJQSxJQUFJRSxNQUFNLEtBQUtiLE1BQU1ZLFFBQVEsRUFBRTtnQkFDL0IseUJBQXlCO2dCQUV6QiwrREFBK0Q7Z0JBQy9ERCxnQkFBQUEsMEJBQUFBLElBQUtHLElBQUksQ0FBQ1osSUFBSSxDQUFDYSxPQUFPLENBQUMsQ0FBQ0M7b0JBQ3BCLE1BQU1DLE9BQU87d0JBQUVDLEtBQUtGLEdBQUdFLEdBQUc7d0JBQUVDLFFBQVFILEdBQUdHLE1BQU07b0JBQUM7b0JBQzlDWixRQUFRQyxHQUFHLENBQUNTO29CQUVaLGlFQUFpRTtvQkFDakVYLFlBQVksQ0FBQ2MsZUFBaUI7K0JBQUlBOzRCQUFjSDt5QkFBSztnQkFDekQ7WUFDSjtRQUNKO0lBQ0osR0FBRztRQUFDakIsTUFBTVMsS0FBSztRQUFFVCxNQUFNWSxRQUFRO0tBQUM7SUFFaEMscUJBQ0ksOERBQUNTO1FBQUlDLFdBQVU7a0JBRVAsNEVBQUNEO1lBQUlDLFdBQVU7O2dCQUNWZixRQUFRQyxHQUFHLENBQUNSLE1BQU1TLEtBQUs7Z0JBQ3ZCVCxNQUFNUyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDUSxLQUFLSztvQkFDbkIsSUFBR0wsSUFBSUwsTUFBTSxJQUFFYixNQUFNWSxRQUFRLEVBQzlCO3dCQUNDTSxJQUFJSixJQUFJLENBQUNaLElBQUksQ0FBQ1EsR0FBRyxDQUFDLENBQUNNLElBQUdPOzRCQUNkO2dDQUFDaEIsUUFBUUMsR0FBRyxDQUFDVTs0QkFBSTs0QkFDakI7Z0NBQUNYLFFBQVFDLEdBQUcsQ0FBQ1IsTUFBTVksUUFBUTs0QkFBQzs0QkFDNUI7Z0NBQUNMLFFBQVFDLEdBQUcsQ0FBQ1IsTUFBTVksUUFBUTs0QkFBQzs0QkFDaEMsSUFBSUksR0FBR0csTUFBTSxJQUFJbkIsTUFBTXdCLE1BQU0sRUFBRTtnQ0FDM0IscUJBQU8sOERBQUM5QixrREFBU0E7b0NBQWF3QixLQUFLRixHQUFHRSxHQUFHO21DQUFsQks7Ozs7OzRCQUMzQixPQUFPO2dDQUNILHFCQUFPLDhEQUFDOUIscURBQVlBO29DQUFheUIsS0FBS0YsR0FBR0UsR0FBRzttQ0FBbEJLOzs7Ozs0QkFDOUI7d0JBQ0o7b0JBRUo7Z0JBQ0E7Ozs7Ozs7Ozs7OztBQUtwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy5qc3g/OTFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE90aGVyTWVzc2FnZSBmcm9tIFwiLi9vdGhlck1lc3NhZ2VcIjtcbmltcG9ydCBNeU1lc3NhZ2UgZnJvbSBcIi4vbXlNZXNzYWdlXCI7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdyZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQgJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyL2Rpc3QvY3NzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGNvbnN0IGlkID0gMTtcbiAgICBjb25zdCBbY2hhdCxzZXRDaGF0XT1SZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBmZXRjaENoYXQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAocHJvcHMuY3VyckNoYXQpIHsgLy8gQ2hlY2sgaWYgY2hhdElkIGV4aXN0c1xuICAgIC8vICAgICAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgc3BlY2lmaWMgZG9jdW1lbnQgaW4gdGhlIFwiQ2hhdHNcIiBjb2xsZWN0aW9uXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNoYXRSZWYgPSBkb2MoZGIsIFwiQ2hhdHNcIiwgcHJvcHMuY3VyckNoYXQpO1xuICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBGZXRjaCB0aGUgY2hhdCBkb2N1bWVudCBmcm9tIEZpcmVzdG9yZVxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBjaGF0RG9jID0gYXdhaXQgZ2V0RG9jKGNoYXRSZWYpO1xuICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoY2hhdERvYy5leGlzdHMoKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjaGF0IGRhdGFcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXREYXRhID0gY2hhdERvYy5kYXRhKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYXQgRGF0YTpcIiwgY2hhdERhdGEpO1xuICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIGZldGNoZWQgY2hhdCBkYXRhIChlLmcuLCBzdG9yZSBpbiBzdGF0ZSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNldENoYXQoY2hhdERhdGEpOyAgLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBzdGF0ZSB0byBzdG9yZSB0aGUgY2hhdFxuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIGNoYXQhXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNoYXQ6XCIsIGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH07XG4gICAgXG4gICAgLy8gICAgIGZldGNoQ2hhdCgpO1xuICAgIC8vIH0sIFtwcm9wcy5jdXJyQ2hhdF0pOyAvLyBSdW4gZWZmZWN0IHdoZW4gYGN1cnJDaGF0YCBjaGFuZ2VzXG4gICAgY29uc3QgW2Rpc3BDaGF0LHNldERpc3BDaGF0XT1SZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdXJlbHkgeWVzXCIpO1xuICAgICAgICBzZXREaXNwQ2hhdChbXSlcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBjaGF0c1xuICAgICAgICBwcm9wcz8uY2hhdHMubWFwKChjaHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXRsZWFzdCBoZXJlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuY3VyckNoYXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2h0KTtcbiAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGNoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgY2hhdFxuICAgICAgICAgICAgaWYgKGNodC5jaGF0SWQgPT09IHByb3BzLmN1cnJDaGF0KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2h0LmRhdGEpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIG1lc3NhZ2UgaW4gdGhlIGNoYXQgYW5kIGFkZCBpdCB0byBkaXNwQ2hhdFxuICAgICAgICAgICAgICAgIGNodD8uZGF0YS5jaGF0LmZvckVhY2goKG1nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7IG1zZzogbWcubXNnLCBzZW5kZXI6IG1nLnNlbmRlciB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBmdW5jdGlvbmFsIGZvcm0gb2Ygc2V0U3RhdGUgdG8gZW5zdXJlIHlvdSdyZSBhcHBlbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgc2V0RGlzcENoYXQoKHByZXZEaXNwQ2hhdCkgPT4gWy4uLnByZXZEaXNwQ2hhdCwgdGVtcF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbcHJvcHMuY2hhdHMsIHByb3BzLmN1cnJDaGF0XSk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgcm91bmRlZC0yeGwgaC1mdWxsXCI+XG4gICAgICAgICAgICB7LyogPFBlcmZlY3RTY3JvbGxiYXIgICBvcHRpb249e3sgc3VwcHJlc3NTY3JvbGxYOiB0cnVlIH0gfT4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHByb3BzLmNoYXRzKX1cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXRzLm1hcCgobXNnLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobXNnLmNoYXRJZD09cHJvcHMuY3VyckNoYXQpXG4gICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5kYXRhLmNoYXQubWFwKChtZyxpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKG1zZyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5jdXJyQ2hhdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5jdXJyQ2hhdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1nLnNlbmRlciA9PSBwcm9wcy51c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNeU1lc3NhZ2Uga2V5PXtpbmRleH0gbXNnPXttZy5tc2d9IC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3RoZXJNZXNzYWdlIGtleT17aW5kZXh9IG1zZz17bWcubXNnfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8L1BlcmZlY3RTY3JvbGxiYXI+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiT3RoZXJNZXNzYWdlIiwiTXlNZXNzYWdlIiwiUGVyZmVjdFNjcm9sbGJhciIsInVzZUVmZmVjdCIsImRvYyIsImdldERvYyIsImRiIiwicHJvcHMiLCJpZCIsImNoYXQiLCJzZXRDaGF0IiwidXNlU3RhdGUiLCJkaXNwQ2hhdCIsInNldERpc3BDaGF0IiwiY29uc29sZSIsImxvZyIsImNoYXRzIiwibWFwIiwiY2h0IiwiY3VyckNoYXQiLCJjaGF0SWQiLCJkYXRhIiwiZm9yRWFjaCIsIm1nIiwidGVtcCIsIm1zZyIsInNlbmRlciIsInByZXZEaXNwQ2hhdCIsImRpdiIsImNsYXNzTmFtZSIsImluZGV4IiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/messages.jsx\n"));

/***/ })

});