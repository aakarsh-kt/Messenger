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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cafcc0757da2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzRmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjYWZjYzA3NTdkYTJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/callComponent.jsx":
/*!******************************************!*\
  !*** ./app/components/callComponent.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! peerjs */ \"(app-pages-browser)/./node_modules/peerjs/dist/bundler.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CallComponent = (param)=>{\n    let { localUserId, remoteUserId, videoCall } = param;\n    _s();\n    const localVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const remoteVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const peer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const localStream = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Initialize PeerJS for the local user\n        peer.current = new peerjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localUserId);\n        // Get local media stream\n        navigator.mediaDevices.getUserMedia({\n            video: videoCall,\n            audio: true\n        }).then((stream)=>{\n            localStream.current = stream;\n            localVideoRef.current.srcObject = stream;\n            // Listen for incoming calls\n            peer.current.on(\"call\", (call)=>{\n                call.answer(stream); // Answer the call with local stream\n                call.on(\"stream\", (remoteStream)=>{\n                    remoteVideoRef.current.srcObject = remoteStream; // Display remote stream\n                });\n            });\n        });\n        // Clean up on component unmount\n        return ()=>{\n            if (localStream.current) {\n                localStream.current.getTracks().forEach((track)=>track.stop());\n            }\n        };\n    }, [\n        localUserId\n    ]);\n    const startCall = ()=>{\n        const call = peer.current.call(remoteUserId, localStream.current);\n        call.on(\"stream\", (remoteStream)=>{\n            remoteVideoRef.current.srcObject = remoteStream; // Display remote stream\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                ref: localVideoRef,\n                autoPlay: true,\n                muted: true,\n                className: \"local-video\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/callComponent.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                ref: remoteVideoRef,\n                autoPlay: true,\n                className: \"remote-video\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/callComponent.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startCall,\n                children: \"Start Call\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/callComponent.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/callComponent.jsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CallComponent, \"jQLnjDImcBzbdVXlEK9HrHaz1GE=\");\n_c = CallComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CallComponent);\nvar _c;\n$RefreshReg$(_c, \"CallComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NhbGxDb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDaUQ7QUFDdkI7QUFFMUIsTUFBTUksZ0JBQWdCO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBQzs7SUFDMUQsTUFBTUMsZ0JBQWdCTiw2Q0FBTUEsQ0FBQztJQUM3QixNQUFNTyxpQkFBaUJQLDZDQUFNQSxDQUFDO0lBQzlCLE1BQU1RLE9BQU9SLDZDQUFNQSxDQUFDO0lBQ3BCLE1BQU1TLGNBQWNULDZDQUFNQSxDQUFDO0lBRTNCRCxnREFBU0EsQ0FBQztRQUNOLHVDQUF1QztRQUN2Q1MsS0FBS0UsT0FBTyxHQUFHLElBQUlULDhDQUFJQSxDQUFDRTtRQUV4Qix5QkFBeUI7UUFDekJRLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO1lBQUVDLE9BQU9UO1lBQVdVLE9BQU87UUFBSyxHQUMvREMsSUFBSSxDQUFDLENBQUNDO1lBQ0hSLFlBQVlDLE9BQU8sR0FBR087WUFDdEJYLGNBQWNJLE9BQU8sQ0FBQ1EsU0FBUyxHQUFHRDtZQUVsQyw0QkFBNEI7WUFDNUJULEtBQUtFLE9BQU8sQ0FBQ1MsRUFBRSxDQUFDLFFBQVEsQ0FBQ0M7Z0JBQ3JCQSxLQUFLQyxNQUFNLENBQUNKLFNBQVMsb0NBQW9DO2dCQUN6REcsS0FBS0QsRUFBRSxDQUFDLFVBQVUsQ0FBQ0c7b0JBQ2ZmLGVBQWVHLE9BQU8sQ0FBQ1EsU0FBUyxHQUFHSSxjQUFjLHdCQUF3QjtnQkFDN0U7WUFDSjtRQUNKO1FBRUosZ0NBQWdDO1FBQ2hDLE9BQU87WUFDSCxJQUFJYixZQUFZQyxPQUFPLEVBQUU7Z0JBQ3JCRCxZQUFZQyxPQUFPLENBQUNhLFNBQVMsR0FBR0MsT0FBTyxDQUFDQyxDQUFBQSxRQUFTQSxNQUFNQyxJQUFJO1lBQy9EO1FBQ0o7SUFDSixHQUFHO1FBQUN2QjtLQUFZO0lBRWhCLE1BQU13QixZQUFZO1FBQ2QsTUFBTVAsT0FBT1osS0FBS0UsT0FBTyxDQUFDVSxJQUFJLENBQUNoQixjQUFjSyxZQUFZQyxPQUFPO1FBQ2hFVSxLQUFLRCxFQUFFLENBQUMsVUFBVSxDQUFDRztZQUNmZixlQUFlRyxPQUFPLENBQUNRLFNBQVMsR0FBR0ksY0FBYyx3QkFBd0I7UUFDN0U7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTTs7MEJBQ0csOERBQUNkO2dCQUFNZSxLQUFLdkI7Z0JBQWV3QixRQUFRO2dCQUFDQyxLQUFLO2dCQUFDQyxXQUFVOzs7Ozs7MEJBQ3BELDhEQUFDbEI7Z0JBQU1lLEtBQUt0QjtnQkFBZ0J1QixRQUFRO2dCQUFDRSxXQUFVOzs7Ozs7MEJBQy9DLDhEQUFDQztnQkFBT0MsU0FBU1A7MEJBQVc7Ozs7Ozs7Ozs7OztBQUd4QztHQS9DTXpCO0tBQUFBO0FBaUROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2NhbGxDb21wb25lbnQuanN4P2QzMjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGVlciBmcm9tICdwZWVyanMnO1xuXG5jb25zdCBDYWxsQ29tcG9uZW50ID0gKHsgbG9jYWxVc2VySWQsIHJlbW90ZVVzZXJJZCAsdmlkZW9DYWxsfSkgPT4ge1xuICAgIGNvbnN0IGxvY2FsVmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgcmVtb3RlVmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgcGVlciA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBsb2NhbFN0cmVhbSA9IHVzZVJlZihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgUGVlckpTIGZvciB0aGUgbG9jYWwgdXNlclxuICAgICAgICBwZWVyLmN1cnJlbnQgPSBuZXcgUGVlcihsb2NhbFVzZXJJZCk7XG5cbiAgICAgICAgLy8gR2V0IGxvY2FsIG1lZGlhIHN0cmVhbVxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IHZpZGVvOiB2aWRlb0NhbGwsIGF1ZGlvOiB0cnVlIH0pXG4gICAgICAgICAgICAudGhlbigoc3RyZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdHJlYW0uY3VycmVudCA9IHN0cmVhbTtcbiAgICAgICAgICAgICAgICBsb2NhbFZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuIGZvciBpbmNvbWluZyBjYWxsc1xuICAgICAgICAgICAgICAgIHBlZXIuY3VycmVudC5vbignY2FsbCcsIChjYWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGwuYW5zd2VyKHN0cmVhbSk7IC8vIEFuc3dlciB0aGUgY2FsbCB3aXRoIGxvY2FsIHN0cmVhbVxuICAgICAgICAgICAgICAgICAgICBjYWxsLm9uKCdzdHJlYW0nLCAocmVtb3RlU3RyZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVWaWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHJlbW90ZVN0cmVhbTsgLy8gRGlzcGxheSByZW1vdGUgc3RyZWFtXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgb24gY29tcG9uZW50IHVubW91bnRcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0cmVhbS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdHJlYW0uY3VycmVudC5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2xvY2FsVXNlcklkXSk7XG5cbiAgICBjb25zdCBzdGFydENhbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGwgPSBwZWVyLmN1cnJlbnQuY2FsbChyZW1vdGVVc2VySWQsIGxvY2FsU3RyZWFtLmN1cnJlbnQpO1xuICAgICAgICBjYWxsLm9uKCdzdHJlYW0nLCAocmVtb3RlU3RyZWFtKSA9PiB7XG4gICAgICAgICAgICByZW1vdGVWaWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHJlbW90ZVN0cmVhbTsgLy8gRGlzcGxheSByZW1vdGUgc3RyZWFtXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHZpZGVvIHJlZj17bG9jYWxWaWRlb1JlZn0gYXV0b1BsYXkgbXV0ZWQgY2xhc3NOYW1lPVwibG9jYWwtdmlkZW9cIiAvPlxuICAgICAgICAgICAgPHZpZGVvIHJlZj17cmVtb3RlVmlkZW9SZWZ9IGF1dG9QbGF5IGNsYXNzTmFtZT1cInJlbW90ZS12aWRlb1wiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0Q2FsbH0+U3RhcnQgQ2FsbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsbENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlBlZXIiLCJDYWxsQ29tcG9uZW50IiwibG9jYWxVc2VySWQiLCJyZW1vdGVVc2VySWQiLCJ2aWRlb0NhbGwiLCJsb2NhbFZpZGVvUmVmIiwicmVtb3RlVmlkZW9SZWYiLCJwZWVyIiwibG9jYWxTdHJlYW0iLCJjdXJyZW50IiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidmlkZW8iLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJzcmNPYmplY3QiLCJvbiIsImNhbGwiLCJhbnN3ZXIiLCJyZW1vdGVTdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwic3RhcnRDYWxsIiwiZGl2IiwicmVmIiwiYXV0b1BsYXkiLCJtdXRlZCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/callComponent.jsx\n"));

/***/ })

});