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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _otherMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherMessage */ \"(app-pages-browser)/./app/components/otherMessage.jsx\");\n/* harmony import */ var _myMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myMessage */ \"(app-pages-browser)/./app/components/myMessage.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const id = 1;\n    const [chat, setChat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    // useEffect(() => {\n    //     const fetchChat = async () => {\n    //         if (props.currChat) { // Check if chatId exists\n    //             try {\n    //                 // Reference to the specific document in the \"Chats\" collection\n    //                 const chatRef = doc(db, \"Chats\", props.currChat);\n    //                 // Fetch the chat document from Firestore\n    //                 const chatDoc = await getDoc(chatRef);\n    //                 if (chatDoc.exists()) {\n    //                     // Get the chat data\n    //                     const chatData = chatDoc.data();\n    //                     console.log(\"Chat Data:\", chatData);\n    //                     // Do something with the fetched chat data (e.g., store in state)\n    //                     setChat(chatData);  // Assuming you have a state to store the chat\n    //                 } else {\n    //                     console.log(\"No such chat!\");\n    //                 }\n    //             } catch (error) {\n    //                 console.error(\"Error fetching chat:\", error);\n    //             }\n    //         }\n    //     };\n    //     fetchChat();\n    // }, [props.currChat]); // Run effect when `currChat` changes\n    const [dispChat, setDispChat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Surely yes\");\n        setDispChat([]);\n        // Loop through all chats\n        props === null || props === void 0 ? void 0 : props.chats.map((cht)=>{\n            console.log(\"Atleast here\");\n            console.log(props.currChat);\n            console.log(cht);\n            // Check if the current chat matches the selected chat\n            // if (cht.chatId === props.currChat) {\n            console.log(cht.data);\n            // Loop through each message in the chat and add it to dispChat\n            cht.data.chat.forEach((mg)=>{\n                const temp = {\n                    msg: mg.msg,\n                    sender: mg.sender\n                };\n                console.log(temp);\n                // Use the functional form of setState to ensure you're appending\n                setDispChat((prevDispChat)=>[\n                        ...prevDispChat,\n                        temp\n                    ]);\n            });\n        // }\n        });\n    }, [\n        props.chats,\n        props.currChat\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-500 rounded-2xl h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-2\",\n            children: [\n                console.log(dispChat),\n                dispChat.map((msg, index)=>{\n                    if (msg.sender == props.userId) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_myMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            msg: msg.msg\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 36\n                        }, this);\n                    } else {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_otherMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            msg: msg.msg\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 36\n                        }, this);\n                    }\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n            lineNumber: 71,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDZ0I7QUFDTjtBQUNtQjtBQUNGO0FBQ25CO0FBQ2U7QUFDaEI7QUFFakMsNkJBQWUsb0NBQVVRLEtBQUs7SUFDMUIsTUFBTUMsS0FBSztJQUNYLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFDWCxxREFBYyxDQUFDO0lBQ3BDLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsMERBQTBEO0lBQzFELG9CQUFvQjtJQUNwQixrRkFBa0Y7SUFDbEYsb0VBQW9FO0lBRXBFLDREQUE0RDtJQUM1RCx5REFBeUQ7SUFFekQsMENBQTBDO0lBQzFDLDJDQUEyQztJQUMzQyx1REFBdUQ7SUFDdkQsMkRBQTJEO0lBRTNELHdGQUF3RjtJQUN4Rix5RkFBeUY7SUFDekYsMkJBQTJCO0lBQzNCLG9EQUFvRDtJQUNwRCxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtJQUNoRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFNBQVM7SUFFVCxtQkFBbUI7SUFDbkIsOERBQThEO0lBQzlELE1BQU0sQ0FBQ2EsVUFBU0MsWUFBWSxHQUFDZCxxREFBYyxDQUFDLEVBQUU7SUFDOUNJLGdEQUFTQSxDQUFDO1FBQ05XLFFBQVFDLEdBQUcsQ0FBQztRQUNaRixZQUFZLEVBQUU7UUFDZCx5QkFBeUI7UUFDekJOLGtCQUFBQSw0QkFBQUEsTUFBT1MsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7WUFDZEosUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ1IsTUFBTVksUUFBUTtZQUMxQkwsUUFBUUMsR0FBRyxDQUFDRztZQUVaLHNEQUFzRDtZQUN0RCx1Q0FBdUM7WUFDbkNKLFFBQVFDLEdBQUcsQ0FBQ0csSUFBSUUsSUFBSTtZQUVwQiwrREFBK0Q7WUFDL0RGLElBQUlFLElBQUksQ0FBQ1gsSUFBSSxDQUFDWSxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ25CLE1BQU1DLE9BQU87b0JBQUVDLEtBQUtGLEdBQUdFLEdBQUc7b0JBQUVDLFFBQVFILEdBQUdHLE1BQU07Z0JBQUM7Z0JBQzlDWCxRQUFRQyxHQUFHLENBQUNRO2dCQUVaLGlFQUFpRTtnQkFDakVWLFlBQVksQ0FBQ2EsZUFBaUI7MkJBQUlBO3dCQUFjSDtxQkFBSztZQUN6RDtRQUNKLElBQUk7UUFDUjtJQUNKLEdBQUc7UUFBQ2hCLE1BQU1TLEtBQUs7UUFBRVQsTUFBTVksUUFBUTtLQUFDO0lBRWhDLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUVQLDRFQUFDRDtZQUFJQyxXQUFVOztnQkFDVmQsUUFBUUMsR0FBRyxDQUFDSDtnQkFDWkEsU0FBU0ssR0FBRyxDQUFDLENBQUNPLEtBQUtLO29CQUVoQixJQUFJTCxJQUFJQyxNQUFNLElBQUlsQixNQUFNdUIsTUFBTSxFQUFFO3dCQUM1QixxQkFBTyw4REFBQzdCLGtEQUFTQTs0QkFBYXVCLEtBQUtBLElBQUlBLEdBQUc7MkJBQW5CSzs7Ozs7b0JBQzNCLE9BQU87d0JBQ0gscUJBQU8sOERBQUM3QixxREFBWUE7NEJBQWF3QixLQUFLQSxJQUFJQSxHQUFHOzJCQUFuQks7Ozs7O29CQUM5QjtnQkFDSjs7Ozs7Ozs7Ozs7O0FBS3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzLmpzeD85MWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgT3RoZXJNZXNzYWdlIGZyb20gXCIuL290aGVyTWVzc2FnZVwiO1xuaW1wb3J0IE15TWVzc2FnZSBmcm9tIFwiLi9teU1lc3NhZ2VcIjtcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9jc3Mvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgY29uc3QgaWQgPSAxO1xuICAgIGNvbnN0IFtjaGF0LHNldENoYXRdPVJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGZldGNoQ2hhdCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChwcm9wcy5jdXJyQ2hhdCkgeyAvLyBDaGVjayBpZiBjaGF0SWQgZXhpc3RzXG4gICAgLy8gICAgICAgICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBzcGVjaWZpYyBkb2N1bWVudCBpbiB0aGUgXCJDaGF0c1wiIGNvbGxlY3Rpb25cbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgY2hhdFJlZiA9IGRvYyhkYiwgXCJDaGF0c1wiLCBwcm9wcy5jdXJyQ2hhdCk7XG4gICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIEZldGNoIHRoZSBjaGF0IGRvY3VtZW50IGZyb20gRmlyZXN0b3JlXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNoYXREb2MgPSBhd2FpdCBnZXREb2MoY2hhdFJlZik7XG4gICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChjaGF0RG9jLmV4aXN0cygpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNoYXQgZGF0YVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhdERhdGEgPSBjaGF0RG9jLmRhdGEoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhdCBEYXRhOlwiLCBjaGF0RGF0YSk7XG4gICAgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgZmV0Y2hlZCBjaGF0IGRhdGEgKGUuZy4sIHN0b3JlIGluIHN0YXRlKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhdChjaGF0RGF0YSk7ICAvLyBBc3N1bWluZyB5b3UgaGF2ZSBhIHN0YXRlIHRvIHN0b3JlIHRoZSBjaGF0XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggY2hhdCFcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2hhdDpcIiwgZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfTtcbiAgICBcbiAgICAvLyAgICAgZmV0Y2hDaGF0KCk7XG4gICAgLy8gfSwgW3Byb3BzLmN1cnJDaGF0XSk7IC8vIFJ1biBlZmZlY3Qgd2hlbiBgY3VyckNoYXRgIGNoYW5nZXNcbiAgICBjb25zdCBbZGlzcENoYXQsc2V0RGlzcENoYXRdPVJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1cmVseSB5ZXNcIik7XG4gICAgICAgIHNldERpc3BDaGF0KFtdKVxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIGNoYXRzXG4gICAgICAgIHByb3BzPy5jaGF0cy5tYXAoKGNodCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdGxlYXN0IGhlcmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5jdXJyQ2hhdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaHQpO1xuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgY2hhdCBtYXRjaGVzIHRoZSBzZWxlY3RlZCBjaGF0XG4gICAgICAgICAgICAvLyBpZiAoY2h0LmNoYXRJZCA9PT0gcHJvcHMuY3VyckNoYXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaHQuZGF0YSk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggbWVzc2FnZSBpbiB0aGUgY2hhdCBhbmQgYWRkIGl0IHRvIGRpc3BDaGF0XG4gICAgICAgICAgICAgICAgY2h0LmRhdGEuY2hhdC5mb3JFYWNoKChtZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0geyBtc2c6IG1nLm1zZywgc2VuZGVyOiBtZy5zZW5kZXIgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgZnVuY3Rpb25hbCBmb3JtIG9mIHNldFN0YXRlIHRvIGVuc3VyZSB5b3UncmUgYXBwZW5kaW5nXG4gICAgICAgICAgICAgICAgICAgIHNldERpc3BDaGF0KChwcmV2RGlzcENoYXQpID0+IFsuLi5wcmV2RGlzcENoYXQsIHRlbXBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW3Byb3BzLmNoYXRzLCBwcm9wcy5jdXJyQ2hhdF0pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHJvdW5kZWQtMnhsIGgtZnVsbFwiPlxuICAgICAgICAgICAgey8qIDxQZXJmZWN0U2Nyb2xsYmFyICAgb3B0aW9uPXt7IHN1cHByZXNzU2Nyb2xsWDogdHJ1ZSB9IH0+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkaXNwQ2hhdCl9XG4gICAgICAgICAgICAgICAgICAgIHtkaXNwQ2hhdC5tYXAoKG1zZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2cuc2VuZGVyID09IHByb3BzLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TXlNZXNzYWdlIGtleT17aW5kZXh9IG1zZz17bXNnLm1zZ30gLz47XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3RoZXJNZXNzYWdlIGtleT17aW5kZXh9IG1zZz17bXNnLm1zZ30gLz47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvUGVyZmVjdFNjcm9sbGJhcj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJPdGhlck1lc3NhZ2UiLCJNeU1lc3NhZ2UiLCJQZXJmZWN0U2Nyb2xsYmFyIiwidXNlRWZmZWN0IiwiZG9jIiwiZ2V0RG9jIiwiZGIiLCJwcm9wcyIsImlkIiwiY2hhdCIsInNldENoYXQiLCJ1c2VTdGF0ZSIsImRpc3BDaGF0Iiwic2V0RGlzcENoYXQiLCJjb25zb2xlIiwibG9nIiwiY2hhdHMiLCJtYXAiLCJjaHQiLCJjdXJyQ2hhdCIsImRhdGEiLCJmb3JFYWNoIiwibWciLCJ0ZW1wIiwibXNnIiwic2VuZGVyIiwicHJldkRpc3BDaGF0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5kZXgiLCJ1c2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/messages.jsx\n"));

/***/ })

});