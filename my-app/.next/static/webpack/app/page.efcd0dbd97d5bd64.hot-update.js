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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _otherMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherMessage */ \"(app-pages-browser)/./app/components/otherMessage.jsx\");\n/* harmony import */ var _myMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myMessage */ \"(app-pages-browser)/./app/components/myMessage.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    // const id = 1;\n    // const [chat,setChat]=React.useState(\"\");\n    // useEffect(() => {\n    //     const fetchChat = async () => {\n    //         if (props.currChat) { // Check if chatId exists\n    //             try {\n    //                 // Reference to the specific document in the \"Chats\" collection\n    //                 const chatRef = doc(db, \"Chats\", props.currChat);\n    //                 // Fetch the chat document from Firestore\n    //                 const chatDoc = await getDoc(chatRef);\n    //                 if (chatDoc.exists()) {\n    //                     // Get the chat data\n    //                     const chatData = chatDoc.data();\n    //                     console.log(\"Chat Data:\", chatData);\n    //                     // Do something with the fetched chat data (e.g., store in state)\n    //                     setChat(chatData);  // Assuming you have a state to store the chat\n    //                 } else {\n    //                     console.log(\"No such chat!\");\n    //                 }\n    //             } catch (error) {\n    //                 console.error(\"Error fetching chat:\", error);\n    //             }\n    //         }\n    //     };\n    //     fetchChat();\n    // }, [props.currChat]); // Run effect when `currChat` changes\n    // const [dispChat,setDispChat]=React.useState(props.chats);\n    // useEffect(() => {\n    //     // console.log(\"Surely yes\");\n    //     setDispChat([])\n    //     // Loop through all chats\n    //     props?.chats.map((cht) => {\n    //         // console.log(\"Atleast here\");\n    //         // console.log(props.currChat);\n    //         // console.log(cht);\n    //         // Check if the current chat matches the selected chat\n    //         if (cht.chatId === props.currChat) {\n    //             // console.log(cht.data);\n    //             // Loop through each message in the chat and add it to dispChat\n    //             cht?.data.chat.forEach((mg) => {\n    //                 const temp = { msg: mg.msg, sender: mg.sender };\n    //                 // console.log(temp);\n    //                 // Use the functional form of setState to ensure you're appending\n    //                 setDispChat((prevDispChat) => [...prevDispChat, temp]);\n    //             });\n    //         }\n    //     });\n    // }, [props.chats, props.currChat]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-500 rounded-2xl h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-2\",\n            children: props.chats.map((msg, index)=>{\n                // Check if the chatId matches the current chat\n                // if (msg.chatId == props.currChat) {\n                // return msg.data.chat.map((mg, idx) => {\n                // console.log(msg);\n                // console.log(props.currChat);\n                // console.log(props.userId);\n                // Check if the message sender is the current user\n                if (msg.sender == props.userId) {\n                    // console.log(\"Printing MyMessage\");\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_myMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        msg: mg.msg\n                    }, idx, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 40\n                    }, this);\n                } else {\n                    // console.log(\"Printing OtherMessage\");\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_otherMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        msg: mg.msg\n                    }, idx, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 40\n                    }, this);\n                }\n                // });\n                // }\n                return null; // Return null for unmatched chatIds\n            })\n        }, void 0, false, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n            lineNumber: 70,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDZ0I7QUFDTjtBQUNtQjtBQUNGO0FBQ25CO0FBQ2U7QUFDaEI7QUFFakMsNkJBQWUsb0NBQVVRLEtBQUs7SUFDMUIsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLDBEQUEwRDtJQUMxRCxvQkFBb0I7SUFDcEIsa0ZBQWtGO0lBQ2xGLG9FQUFvRTtJQUVwRSw0REFBNEQ7SUFDNUQseURBQXlEO0lBRXpELDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0MsdURBQXVEO0lBQ3ZELDJEQUEyRDtJQUUzRCx3RkFBd0Y7SUFDeEYseUZBQXlGO0lBQ3pGLDJCQUEyQjtJQUMzQixvREFBb0Q7SUFDcEQsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxnRUFBZ0U7SUFDaEUsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixTQUFTO0lBRVQsbUJBQW1CO0lBQ25CLDhEQUE4RDtJQUM5RCw0REFBNEQ7SUFDNUQsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQywwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLCtCQUErQjtJQUUvQixpRUFBaUU7SUFDakUsK0NBQStDO0lBQy9DLHdDQUF3QztJQUV4Qyw4RUFBOEU7SUFDOUUsK0NBQStDO0lBQy9DLG1FQUFtRTtJQUNuRSx3Q0FBd0M7SUFFeEMsb0ZBQW9GO0lBQ3BGLDBFQUEwRTtJQUMxRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixxQ0FBcUM7SUFFckMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBSVZGLE1BQU1HLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLEtBQUtDO2dCQUNuQiwrQ0FBK0M7Z0JBQy9DLHNDQUFzQztnQkFDbEMsMENBQTBDO2dCQUN0QyxvQkFBb0I7Z0JBQ3BCLCtCQUErQjtnQkFDL0IsNkJBQTZCO2dCQUU3QixrREFBa0Q7Z0JBQ2xELElBQUlELElBQUlFLE1BQU0sSUFBSVAsTUFBTVEsTUFBTSxFQUFFO29CQUM1QixxQ0FBcUM7b0JBQ3JDLHFCQUFPLDhEQUFDZCxrREFBU0E7d0JBQVdXLEtBQUtJLEdBQUdKLEdBQUc7dUJBQWhCSzs7Ozs7Z0JBQzNCLE9BQU87b0JBQ0gsd0NBQXdDO29CQUN4QyxxQkFBTyw4REFBQ2pCLHFEQUFZQTt3QkFBV1ksS0FBS0ksR0FBR0osR0FBRzt1QkFBaEJLOzs7OztnQkFDOUI7Z0JBQ0osTUFBTTtnQkFDVixJQUFJO2dCQUNKLE9BQU8sTUFBTSxvQ0FBb0M7WUFDckQ7Ozs7Ozs7Ozs7O0FBS2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzLmpzeD85MWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgT3RoZXJNZXNzYWdlIGZyb20gXCIuL290aGVyTWVzc2FnZVwiO1xuaW1wb3J0IE15TWVzc2FnZSBmcm9tIFwiLi9teU1lc3NhZ2VcIjtcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9jc3Mvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgLy8gY29uc3QgaWQgPSAxO1xuICAgIC8vIGNvbnN0IFtjaGF0LHNldENoYXRdPVJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGZldGNoQ2hhdCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChwcm9wcy5jdXJyQ2hhdCkgeyAvLyBDaGVjayBpZiBjaGF0SWQgZXhpc3RzXG4gICAgLy8gICAgICAgICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBzcGVjaWZpYyBkb2N1bWVudCBpbiB0aGUgXCJDaGF0c1wiIGNvbGxlY3Rpb25cbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgY2hhdFJlZiA9IGRvYyhkYiwgXCJDaGF0c1wiLCBwcm9wcy5jdXJyQ2hhdCk7XG4gICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIEZldGNoIHRoZSBjaGF0IGRvY3VtZW50IGZyb20gRmlyZXN0b3JlXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNoYXREb2MgPSBhd2FpdCBnZXREb2MoY2hhdFJlZik7XG4gICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChjaGF0RG9jLmV4aXN0cygpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNoYXQgZGF0YVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhdERhdGEgPSBjaGF0RG9jLmRhdGEoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhdCBEYXRhOlwiLCBjaGF0RGF0YSk7XG4gICAgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgZmV0Y2hlZCBjaGF0IGRhdGEgKGUuZy4sIHN0b3JlIGluIHN0YXRlKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdChjaGF0RGF0YSk7ICAvLyBBc3N1bWluZyB5b3UgaGF2ZSBhIHN0YXRlIHRvIHN0b3JlIHRoZSBjaGF0XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggY2hhdCFcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2hhdDpcIiwgZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfTtcbiAgICBcbiAgICAvLyAgICAgZmV0Y2hDaGF0KCk7XG4gICAgLy8gfSwgW3Byb3BzLmN1cnJDaGF0XSk7IC8vIFJ1biBlZmZlY3Qgd2hlbiBgY3VyckNoYXRgIGNoYW5nZXNcbiAgICAvLyBjb25zdCBbZGlzcENoYXQsc2V0RGlzcENoYXRdPVJlYWN0LnVzZVN0YXRlKHByb3BzLmNoYXRzKTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIlN1cmVseSB5ZXNcIik7XG4gICAgLy8gICAgIHNldERpc3BDaGF0KFtdKVxuICAgIC8vICAgICAvLyBMb29wIHRocm91Z2ggYWxsIGNoYXRzXG4gICAgLy8gICAgIHByb3BzPy5jaGF0cy5tYXAoKGNodCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBdGxlYXN0IGhlcmVcIik7XG4gICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5jdXJyQ2hhdCk7XG4gICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhjaHQpO1xuICAgIFxuICAgIC8vICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgY2hhdCBtYXRjaGVzIHRoZSBzZWxlY3RlZCBjaGF0XG4gICAgLy8gICAgICAgICBpZiAoY2h0LmNoYXRJZCA9PT0gcHJvcHMuY3VyckNoYXQpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaHQuZGF0YSk7XG4gICAgXG4gICAgLy8gICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggbWVzc2FnZSBpbiB0aGUgY2hhdCBhbmQgYWRkIGl0IHRvIGRpc3BDaGF0XG4gICAgLy8gICAgICAgICAgICAgY2h0Py5kYXRhLmNoYXQuZm9yRWFjaCgobWcpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHsgbXNnOiBtZy5tc2csIHNlbmRlcjogbWcuc2VuZGVyIH07XG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRlbXApO1xuICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIGZ1bmN0aW9uYWwgZm9ybSBvZiBzZXRTdGF0ZSB0byBlbnN1cmUgeW91J3JlIGFwcGVuZGluZ1xuICAgIC8vICAgICAgICAgICAgICAgICBzZXREaXNwQ2hhdCgocHJldkRpc3BDaGF0KSA9PiBbLi4ucHJldkRpc3BDaGF0LCB0ZW1wXSk7XG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0sIFtwcm9wcy5jaGF0cywgcHJvcHMuY3VyckNoYXRdKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCByb3VuZGVkLTJ4bCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhwcm9wcy5jaGF0cyl9ICovfVxuICAgICAgICAgICAgICAgICB7LyogRGVidWdnaW5nIGxvZyAqL31cbiAgICAgICAgICAgICAgICB7LyogTG9vcCB0aHJvdWdoIGFsbCBjaGF0cyAqL31cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hhdHMubWFwKChtc2csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjaGF0SWQgbWF0Y2hlcyB0aGUgY3VycmVudCBjaGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChtc2cuY2hhdElkID09IHByb3BzLmN1cnJDaGF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gbXNnLmRhdGEuY2hhdC5tYXAoKG1nLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmN1cnJDaGF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy51c2VySWQpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBtZXNzYWdlIHNlbmRlciBpcyB0aGUgY3VycmVudCB1c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5zZW5kZXIgPT0gcHJvcHMudXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHJpbnRpbmcgTXlNZXNzYWdlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE15TWVzc2FnZSBrZXk9e2lkeH0gbXNnPXttZy5tc2d9IC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHJpbnRpbmcgT3RoZXJNZXNzYWdlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE90aGVyTWVzc2FnZSBrZXk9e2lkeH0gbXNnPXttZy5tc2d9IC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBmb3IgdW5tYXRjaGVkIGNoYXRJZHNcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICAgIFxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiT3RoZXJNZXNzYWdlIiwiTXlNZXNzYWdlIiwiUGVyZmVjdFNjcm9sbGJhciIsInVzZUVmZmVjdCIsImRvYyIsImdldERvYyIsImRiIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjaGF0cyIsIm1hcCIsIm1zZyIsImluZGV4Iiwic2VuZGVyIiwidXNlcklkIiwibWciLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/messages.jsx\n"));

/***/ })

});