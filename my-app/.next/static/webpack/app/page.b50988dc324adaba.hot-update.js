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

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"46f60df87251\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzRmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0NmY2MGRmODcyNTFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/incomingCall.jsx":
/*!*****************************************!*\
  !*** ./app/components/incomingCall.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { default: Peer } = __webpack_require__(/*! peerjs */ \"(app-pages-browser)/./node_modules/peerjs/dist/bundler.mjs\");\nconst IncomingCallComponent = (param)=>{\n    let { localUserId, remoteUserId } = param;\n    _s();\n    const peer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Peer(localUserId)); // Initialize Peer instance\n    const localStream = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const remoteVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isCallActive, setIsCallActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        peer.current.on(\"call\", (call)=>{\n            // Prompt user to accept or decline the call\n            if (window.confirm(\"Incoming call! Would you like to accept?\")) {\n                navigator.mediaDevices.getUserMedia({\n                    video: true,\n                    audio: true\n                }).then((stream)=>{\n                    localStream.current = stream;\n                    call.answer(localStream.current); // Answer the call with local stream\n                    call.on(\"stream\", (remoteStream)=>{\n                        remoteVideoRef.current.srcObject = remoteStream; // Display remote video\n                        setIsCallActive(true);\n                    });\n                });\n            } else {\n                call.close(); // Close the call if declined\n            }\n        });\n    }, [\n        localUserId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isCallActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            ref: remoteVideoRef,\n            autoPlay: true,\n            className: \"remote-video\"\n        }, void 0, false, {\n            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/incomingCall.jsx\",\n            lineNumber: 35,\n            columnNumber: 30\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/incomingCall.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(IncomingCallComponent, \"LiEFY5H9B3fQyhbI2598uMIOouE=\");\n_c = IncomingCallComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingCallComponent);\nvar _c;\n$RefreshReg$(_c, \"IncomingCallComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2luY29taW5nQ2FsbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBQ0M7QUFDSDtBQUUvQixNQUFNLEVBQUVHLFNBQVNDLElBQUksRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwRUFBUTtBQUUxQyxNQUFNQyx3QkFBd0I7UUFBQyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRTs7SUFDeEQsTUFBTUMsT0FBT1AsNkNBQU1BLENBQUMsSUFBSUUsS0FBS0csZUFBZSwyQkFBMkI7SUFDdkUsTUFBTUcsY0FBY1IsNkNBQU1BLENBQUM7SUFDM0IsTUFBTVMsaUJBQWlCVCw2Q0FBTUE7SUFDN0IsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFFakRDLGdEQUFTQSxDQUFDO1FBQ05RLEtBQUtLLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsQ0FBQ0M7WUFDckIsNENBQTRDO1lBQzVDLElBQUlDLE9BQU9DLE9BQU8sQ0FBQyw2Q0FBNkM7Z0JBQzVEQyxVQUFVQyxZQUFZLENBQUNDLFlBQVksQ0FBQztvQkFBRUMsT0FBTztvQkFBTUMsT0FBTztnQkFBSyxHQUMxREMsSUFBSSxDQUFDLENBQUNDO29CQUNIZixZQUFZSSxPQUFPLEdBQUdXO29CQUN0QlQsS0FBS1UsTUFBTSxDQUFDaEIsWUFBWUksT0FBTyxHQUFHLG9DQUFvQztvQkFFdEVFLEtBQUtELEVBQUUsQ0FBQyxVQUFVLENBQUNZO3dCQUNmaEIsZUFBZUcsT0FBTyxDQUFDYyxTQUFTLEdBQUdELGNBQWMsdUJBQXVCO3dCQUN4RWQsZ0JBQWdCO29CQUNwQjtnQkFDSjtZQUNSLE9BQU87Z0JBQ0hHLEtBQUthLEtBQUssSUFBSSw2QkFBNkI7WUFDL0M7UUFDSjtJQUNKLEdBQUc7UUFBQ3RCO0tBQVk7SUFFaEIscUJBQ0ksOERBQUN1QjtrQkFDSWxCLDhCQUFnQiw4REFBQ1U7WUFBTVMsS0FBS3BCO1lBQWdCcUIsUUFBUTtZQUFDQyxXQUFVOzs7Ozs7Ozs7OztBQUc1RTtHQS9CTTNCO0tBQUFBO0FBZ0NOLCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvaW5jb21pbmdDYWxsLmpzeD83ZGU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB7IGRlZmF1bHQ6IFBlZXIgfSA9IHJlcXVpcmUoXCJwZWVyanNcIik7XG5cbmNvbnN0IEluY29taW5nQ2FsbENvbXBvbmVudCA9ICh7IGxvY2FsVXNlcklkLCByZW1vdGVVc2VySWQgfSkgPT4ge1xuICAgIGNvbnN0IHBlZXIgPSB1c2VSZWYobmV3IFBlZXIobG9jYWxVc2VySWQpKTsgLy8gSW5pdGlhbGl6ZSBQZWVyIGluc3RhbmNlXG4gICAgY29uc3QgbG9jYWxTdHJlYW0gPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgcmVtb3RlVmlkZW9SZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBbaXNDYWxsQWN0aXZlLCBzZXRJc0NhbGxBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcGVlci5jdXJyZW50Lm9uKCdjYWxsJywgKGNhbGwpID0+IHtcbiAgICAgICAgICAgIC8vIFByb21wdCB1c2VyIHRvIGFjY2VwdCBvciBkZWNsaW5lIHRoZSBjYWxsXG4gICAgICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oJ0luY29taW5nIGNhbGwhIFdvdWxkIHlvdSBsaWtlIHRvIGFjY2VwdD8nKSkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUsIGF1ZGlvOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RyZWFtLmN1cnJlbnQgPSBzdHJlYW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsLmFuc3dlcihsb2NhbFN0cmVhbS5jdXJyZW50KTsgLy8gQW5zd2VyIHRoZSBjYWxsIHdpdGggbG9jYWwgc3RyZWFtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwub24oJ3N0cmVhbScsIChyZW1vdGVTdHJlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVWaWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHJlbW90ZVN0cmVhbTsgLy8gRGlzcGxheSByZW1vdGUgdmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0NhbGxBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGwuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGNhbGwgaWYgZGVjbGluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW2xvY2FsVXNlcklkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2lzQ2FsbEFjdGl2ZSAmJiA8dmlkZW8gcmVmPXtyZW1vdGVWaWRlb1JlZn0gYXV0b1BsYXkgY2xhc3NOYW1lPVwicmVtb3RlLXZpZGVvXCIgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSW5jb21pbmdDYWxsQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImRlZmF1bHQiLCJQZWVyIiwicmVxdWlyZSIsIkluY29taW5nQ2FsbENvbXBvbmVudCIsImxvY2FsVXNlcklkIiwicmVtb3RlVXNlcklkIiwicGVlciIsImxvY2FsU3RyZWFtIiwicmVtb3RlVmlkZW9SZWYiLCJpc0NhbGxBY3RpdmUiLCJzZXRJc0NhbGxBY3RpdmUiLCJjdXJyZW50Iiwib24iLCJjYWxsIiwid2luZG93IiwiY29uZmlybSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwiYXVkaW8iLCJ0aGVuIiwic3RyZWFtIiwiYW5zd2VyIiwicmVtb3RlU3RyZWFtIiwic3JjT2JqZWN0IiwiY2xvc2UiLCJkaXYiLCJyZWYiLCJhdXRvUGxheSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/incomingCall.jsx\n"));

/***/ })

});