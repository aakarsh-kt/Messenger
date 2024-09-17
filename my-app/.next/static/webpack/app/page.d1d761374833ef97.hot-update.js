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

/***/ "(app-pages-browser)/./app/components/sidebar.jsx":
/*!************************************!*\
  !*** ./app/components/sidebar.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                return userData.name;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_2__.useEffect;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    props.chats.length > 0 && props.chats.map((cont, index)=>{\n                        const groupName = cont === null || cont === void 0 ? void 0 : cont.groupName;\n                        if (!groupName) {\n                            const receiver = cont.participants.filter((pid)=>pid != userId);\n                            const name = getUserNameById(receiver);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"m-2 p-1 rounded-md bg-orange-300\",\n                                onClick: ()=>props.selectContact(index),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            className: \"rounded-full\",\n                                            src: \"/image4.jpg\",\n                                            width: 50,\n                                            height: 50,\n                                            alt: \"Profile\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 22\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl\",\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 21\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 27\n                            }, this);\n                        }\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0w7QUFDTztBQUNnQjtBQUNmO0FBRWxDLDZCQUFlLG9DQUFTTSxLQUFLO0lBQzdCLHdDQUF3QztJQUNwQyxNQUFNQyxTQUFPRCxNQUFNQyxNQUFNO0lBRXpCLGVBQWVDLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0YsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVQLHVEQUFHQSxDQUFDRCx5Q0FBRUEsRUFBRSxTQUFTTztZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNUCwwREFBTUEsQ0FBQ007WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNwQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCLE9BQU9ELFNBQVNFLElBQUk7WUFDdEIsT0FBTztnQkFDTEMsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDVDtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBQ0EsTUFBTSxDQUFDQyxnQkFBZUMsa0JBQWtCLEdBQUNuQixxREFBYyxDQUFDLEVBQUU7SUFDMURJLDRDQUFTQTtJQUNYLHFCQUNJLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1ELFdBQVU7d0JBQTJCRSxhQUFZOzs7Ozs7a0NBQ3hELDhEQUFDQzt3QkFBT0gsV0FBVTtrQ0FBbUQ7Ozs7Ozs7Ozs7OzswQkFHekUsOERBQUNJO2dCQUFHSixXQUFVOztvQkFDVFAsUUFBUUMsR0FBRyxDQUFDWCxNQUFNc0IsS0FBSztvQkFDdkJ0QixNQUFNc0IsS0FBSyxDQUFDQyxNQUFNLEdBQUMsS0FBTXZCLE1BQU1zQixLQUFLLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQzt3QkFDOUMsTUFBTUMsWUFBVUYsaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTO3dCQUMvQixJQUFHLENBQUNBLFdBQVU7NEJBQ1osTUFBTXhCLFdBQVNzQixLQUFLRyxZQUFZLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQUEsTUFBS0EsT0FBSzdCOzRCQUNsRCxNQUFNUSxPQUFLUCxnQkFBZ0JDOzRCQUU3QixxQkFBUSw4REFBQzRCO2dDQUFnQmQsV0FBVTtnQ0FBbUNlLFNBQVMsSUFBSWhDLE1BQU1pQyxhQUFhLENBQUNQOzBDQUNyRyw0RUFBQ1Y7b0NBQUlDLFdBQVU7O3NEQUNkLDhEQUFDdkIsa0RBQUtBOzRDQUFFdUIsV0FBVTs0Q0FBZWlCLEtBQUk7NENBQWNDLE9BQU87NENBQUlDLFFBQVE7NENBQUlDLEtBQUk7Ozs7OztzREFFL0UsOERBQUNDOzRDQUFHckIsV0FBVTtzREFBV1I7Ozs7Ozs7Ozs7OzsrQkFKVmlCOzs7Ozt3QkFRakI7b0JBQ0Y7Ozs7Ozs7Ozs7Ozs7QUFPaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci5qc3g/ZGQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb3BzKXtcbi8vICAgIGNvbnN0IG1vZEFycmF5PXByb3BzLmNvbnRhY3QubWFwKClcbiAgICBjb25zdCB1c2VySWQ9cHJvcHMudXNlcklkO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCB3aXRoIHRoZSBnaXZlbiB1c2VySWQgaW4gdGhlIFwidXNlcnNcIiBjb2xsZWN0aW9uXG4gICAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgXCJVc2Vyc1wiLCByZWNlaXZlcik7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gRmV0Y2ggdGhlIGRvY3VtZW50XG4gICAgICAgICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGdldERvYyh1c2VyUmVmKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xuICAgICAgICAgICAgLy8gRXh0cmFjdCBhbmQgcmV0dXJuIHRoZSB1c2VyJ3MgbmFtZSBmcm9tIHRoZSBkb2N1bWVudCBkYXRhXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJEb2MuZGF0YSgpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJEYXRhLm5hbWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCB1c2VyIVwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBbcHJvY2Vzc2VkQ2hhdHMsc2V0UHJvY2Vzc2VkQ2hhdHNdPVJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgICAgIHVzZUVmZmVjdFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCB3LTEvNCBwLTIgbS0xIGgtZnVsbCByb3VuZGVkLW1kXCI+XG4gICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHAtMSBtLTIgdy0zLzRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC0yIG0tMiByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtMzAwXCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIFwiID5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMuY2hhdHMpfVxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGF0cy5sZW5ndGg+MCAmJiAgcHJvcHMuY2hhdHMubWFwKChjb250LGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBOYW1lPWNvbnQ/Lmdyb3VwTmFtZTtcbiAgICAgICAgICAgICAgICAgIGlmKCFncm91cE5hbWUpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlcj1jb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkPT5waWQhPXVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZT1nZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICByZXR1cm4gIDxsaSBrZXk9e2luZGV4fSAgY2xhc3NOYW1lPVwibS0yIHAtMSByb3VuZGVkLW1kIGJnLW9yYW5nZS0zMDBcIiBvbkNsaWNrPXsoKT0+cHJvcHMuc2VsZWN0Q29udGFjdChpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz1cIi9pbWFnZTQuanBnXCIgd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJQcm9maWxlXCIvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGxcIj57bmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgey8qIDxsaSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcIkNvbnRhY3QgMSBjbGlja2VkXCIpfT5Db250YWN0IDE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Db250YWN0IDI8L2xpPiAqL31cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsImRiIiwiZG9jIiwiZ2V0RG9jIiwidXNlRWZmZWN0IiwicHJvcHMiLCJ1c2VySWQiLCJnZXRVc2VyTmFtZUJ5SWQiLCJyZWNlaXZlciIsInVzZXJSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwidXNlckRhdGEiLCJkYXRhIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByb2Nlc3NlZENoYXRzIiwic2V0UHJvY2Vzc2VkQ2hhdHMiLCJ1c2VTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ1bCIsImNoYXRzIiwibGVuZ3RoIiwibWFwIiwiY29udCIsImluZGV4IiwiZ3JvdXBOYW1lIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGlkIiwibGkiLCJvbkNsaWNrIiwic2VsZWN0Q29udGFjdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});