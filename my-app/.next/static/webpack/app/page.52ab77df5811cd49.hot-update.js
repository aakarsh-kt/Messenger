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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _otherMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherMessage */ \"(app-pages-browser)/./app/components/otherMessage.jsx\");\n/* harmony import */ var _myMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myMessage */ \"(app-pages-browser)/./app/components/myMessage.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    var _props_chat_data_chat, _props_chat_data, _props_chat;\n    const id = 1;\n    const [chat, setChat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchChat = async ()=>{\n            if (props.currChat) {\n                try {\n                    // Reference to the specific document in the \"Chats\" collection\n                    const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, \"Chats\", props.currChat);\n                    // Fetch the chat document from Firestore\n                    const chatDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(chatRef);\n                    if (chatDoc.exists()) {\n                        // Get the chat data\n                        const chatData = chatDoc.data();\n                        console.log(\"Chat Data:\", chatData);\n                        // Do something with the fetched chat data (e.g., store in state)\n                        setChat(chatData); // Assuming you have a state to store the chat\n                    } else {\n                        console.log(\"No such chat!\");\n                    }\n                } catch (error) {\n                    console.error(\"Error fetching chat:\", error);\n                }\n            }\n        };\n        fetchChat();\n    }, [\n        props.currChat\n    ]); // Run effect when `currChat` changes\n    const [dispChat, setDispChat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-500 rounded-2xl h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-2\",\n            children: (_props_chat = props.chat) === null || _props_chat === void 0 ? void 0 : (_props_chat_data = _props_chat.data) === null || _props_chat_data === void 0 ? void 0 : (_props_chat_data_chat = _props_chat_data.chat) === null || _props_chat_data_chat === void 0 ? void 0 : _props_chat_data_chat.map((msg, index)=>{\n                if (msg.sender == props.userId) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_myMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        msg: msg.msg\n                    }, index, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 36\n                    }, this);\n                } else {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_otherMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        msg: msg.msg\n                    }, index, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 36\n                    }, this);\n                }\n            })\n        }, void 0, false, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n            lineNumber: 49,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/messages.jsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDZ0I7QUFDTjtBQUNtQjtBQUNGO0FBQ25CO0FBQ2U7QUFDaEI7QUFFakMsNkJBQWUsb0NBQVVRLEtBQUs7UUF3Q1RBLHVCQUFBQSxrQkFBQUE7SUF2Q2pCLE1BQU1DLEtBQUs7SUFDWCxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBQ1gscURBQWMsQ0FBQztJQUNwQ0ksZ0RBQVNBLENBQUM7UUFDTixNQUFNUyxZQUFZO1lBQ2QsSUFBSUwsTUFBTU0sUUFBUSxFQUFFO2dCQUNoQixJQUFJO29CQUNBLCtEQUErRDtvQkFDL0QsTUFBTUMsVUFBVVYsdURBQUdBLENBQUNFLHlDQUFFQSxFQUFFLFNBQVNDLE1BQU1NLFFBQVE7b0JBRS9DLHlDQUF5QztvQkFDekMsTUFBTUUsVUFBVSxNQUFNViwwREFBTUEsQ0FBQ1M7b0JBRTdCLElBQUlDLFFBQVFDLE1BQU0sSUFBSTt3QkFDbEIsb0JBQW9CO3dCQUNwQixNQUFNQyxXQUFXRixRQUFRRyxJQUFJO3dCQUM3QkMsUUFBUUMsR0FBRyxDQUFDLGNBQWNIO3dCQUUxQixpRUFBaUU7d0JBQ2pFUCxRQUFRTyxXQUFZLDhDQUE4QztvQkFDdEUsT0FBTzt3QkFDSEUsUUFBUUMsR0FBRyxDQUFDO29CQUNoQjtnQkFDSixFQUFFLE9BQU9DLE9BQU87b0JBQ1pGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBO2dCQUMxQztZQUNKO1FBQ0o7UUFFQVQ7SUFDSixHQUFHO1FBQUNMLE1BQU1NLFFBQVE7S0FBQyxHQUFHLHFDQUFxQztJQUMzRCxNQUFNLENBQUNTLFVBQVNDLFlBQVksR0FBQ3hCLHFEQUFjLENBQUMsRUFBRTtJQUM5Q0ksZ0RBQVNBLENBQUMsS0FFVjtJQUNBLHFCQUNJLDhEQUFDcUI7UUFBSUMsV0FBVTtrQkFFUCw0RUFBQ0Q7WUFBSUMsV0FBVTt1QkFFVmxCLGNBQUFBLE1BQU1FLElBQUksY0FBVkYsbUNBQUFBLG1CQUFBQSxZQUFZVyxJQUFJLGNBQWhCWCx3Q0FBQUEsd0JBQUFBLGlCQUFrQkUsSUFBSSxjQUF0QkYsNENBQUFBLHNCQUF3Qm1CLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQztnQkFFL0IsSUFBSUQsSUFBSUUsTUFBTSxJQUFJdEIsTUFBTXVCLE1BQU0sRUFBRTtvQkFDNUIscUJBQU8sOERBQUM3QixrREFBU0E7d0JBQWEwQixLQUFLQSxJQUFJQSxHQUFHO3VCQUFuQkM7Ozs7O2dCQUMzQixPQUFPO29CQUNILHFCQUFPLDhEQUFDNUIscURBQVlBO3dCQUFhMkIsS0FBS0EsSUFBSUEsR0FBRzt1QkFBbkJDOzs7OztnQkFDOUI7WUFDSjs7Ozs7Ozs7Ozs7QUFLcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMuanN4PzkxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBPdGhlck1lc3NhZ2UgZnJvbSBcIi4vb3RoZXJNZXNzYWdlXCI7XG5pbXBvcnQgTXlNZXNzYWdlIGZyb20gXCIuL215TWVzc2FnZVwiO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0ICdyZWFjdC1wZXJmZWN0LXNjcm9sbGJhci9kaXN0L2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBjb25zdCBpZCA9IDE7XG4gICAgY29uc3QgW2NoYXQsc2V0Q2hhdF09UmVhY3QudXNlU3RhdGUoXCJcIik7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hDaGF0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLmN1cnJDaGF0KSB7IC8vIENoZWNrIGlmIGNoYXRJZCBleGlzdHNcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIHNwZWNpZmljIGRvY3VtZW50IGluIHRoZSBcIkNoYXRzXCIgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGF0UmVmID0gZG9jKGRiLCBcIkNoYXRzXCIsIHByb3BzLmN1cnJDaGF0KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIGNoYXQgZG9jdW1lbnQgZnJvbSBGaXJlc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhdERvYyA9IGF3YWl0IGdldERvYyhjaGF0UmVmKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXREb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY2hhdCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGF0RGF0YSA9IGNoYXREb2MuZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGF0IERhdGE6XCIsIGNoYXREYXRhKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBmZXRjaGVkIGNoYXQgZGF0YSAoZS5nLiwgc3RvcmUgaW4gc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGF0KGNoYXREYXRhKTsgIC8vIEFzc3VtaW5nIHlvdSBoYXZlIGEgc3RhdGUgdG8gc3RvcmUgdGhlIGNoYXRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBjaGF0IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjaGF0OlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICBmZXRjaENoYXQoKTtcbiAgICB9LCBbcHJvcHMuY3VyckNoYXRdKTsgLy8gUnVuIGVmZmVjdCB3aGVuIGBjdXJyQ2hhdGAgY2hhbmdlc1xuICAgIGNvbnN0IFtkaXNwQ2hhdCxzZXREaXNwQ2hhdF09UmVhY3QudXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCByb3VuZGVkLTJ4bCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiA8UGVyZmVjdFNjcm9sbGJhciAgIG9wdGlvbj17eyBzdXBwcmVzc1Njcm9sbFg6IHRydWUgfSB9PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKGNoYXQpfSAqL31cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXQ/LmRhdGE/LmNoYXQ/Lm1hcCgobXNnLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5zZW5kZXIgPT0gcHJvcHMudXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNeU1lc3NhZ2Uga2V5PXtpbmRleH0gbXNnPXttc2cubXNnfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPdGhlck1lc3NhZ2Uga2V5PXtpbmRleH0gbXNnPXttc2cubXNnfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPC9QZXJmZWN0U2Nyb2xsYmFyPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk90aGVyTWVzc2FnZSIsIk15TWVzc2FnZSIsIlBlcmZlY3RTY3JvbGxiYXIiLCJ1c2VFZmZlY3QiLCJkb2MiLCJnZXREb2MiLCJkYiIsInByb3BzIiwiaWQiLCJjaGF0Iiwic2V0Q2hhdCIsInVzZVN0YXRlIiwiZmV0Y2hDaGF0IiwiY3VyckNoYXQiLCJjaGF0UmVmIiwiY2hhdERvYyIsImV4aXN0cyIsImNoYXREYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpc3BDaGF0Iiwic2V0RGlzcENoYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtc2ciLCJpbmRleCIsInNlbmRlciIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/messages.jsx\n"));

/***/ })

});