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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"236b7c91c9f4\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzRmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyMzZiN2M5MWM5ZjRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/newGroup.jsx":
/*!*************************************!*\
  !*** ./app/components/newGroup.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n // Adjust the path as needed\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const [groupName, setGroupName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const n = props.processedChats.length;\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>Array(n).fill(false));\n    const handleToggle = (index)=>{\n        setIsChecked((prevState)=>prevState.map((item, i)=>i === index ? !item : item));\n    };\n    const handleCreateGroup = async ()=>{\n        // Gather selected members' IDs\n        const selectedMembers = props.processedChats.filter((_, index)=>isChecked[index]).map((cont)=>cont.id); // Adjust according to your data structure\n        selectedMembers.push(props.userId);\n        if (groupName.trim() === \"\" || selectedMembers.length === 0) {\n            alert(\"Please enter a group name and select at least one member.\");\n            return;\n        }\n        try {\n            // Add new chat to Firebase\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"Chats\"), {\n                participants: selectedMembers,\n                chat: [],\n                groupName: groupName // Optional: Store the group name\n            });\n            alert(\"Group created successfully!\");\n            setGroupName(\"\");\n            window.location.reload();\n            setIsChecked(Array(n).fill(false)); // Reset the state after creation\n        } catch (error) {\n            console.error(\"Error creating group: \", error);\n            alert(\"Error creating group. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-900 w-1/4 p-2 m-1 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-white text-2xl m-2 p-2\",\n                children: \"Create Group\"\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2 m-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        type: \"outlined\",\n                        className: \"bg-slate-100 rounded-md p-2\",\n                        placeholder: \"Group Name\",\n                        value: groupName,\n                        onChange: (e)=>setGroupName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-white\",\n                        children: \"Add Members\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2 m-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"cursor-pointer\",\n                            children: props.processedChats.length > 0 && props.processedChats.map((cont, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"m-2 p-1 rounded-md bg-slate-700 text-orange-400 flex items-center gap-4 max-h-10\",\n                                    onClick: ()=>handleToggle(index),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            id: \"checkbox-\".concat(index),\n                                            checked: isChecked[index],\n                                            onChange: ()=>handleToggle(index),\n                                            className: \"hidden\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"checkbox-\".concat(index),\n                                            className: \"w-6 h-6 rounded-full border-2 border-orange-400 cursor-pointer flex items-center justify-center \".concat(isChecked[index] ? \"bg-orange-400\" : \"bg-transparent\"),\n                                            children: isChecked[index] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-4 h-4 text-white\",\n                                                fill: \"none\",\n                                                stroke: \"currentColor\",\n                                                viewBox: \"0 0 24 24\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    strokeWidth: \"2\",\n                                                    d: \"M5 13l4 4L19 7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 45\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            className: \"rounded-full\",\n                                            src: cont.profilePic,\n                                            height: 40,\n                                            width: 40,\n                                            alt: \"Profile\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl\",\n                                            children: cont.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleCreateGroup,\n                        className: \"bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600\",\n                        children: \"Create Group\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/newGroup.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25ld0dyb3VwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHMEM7QUFDWDtBQUNTO0FBQ2lCLENBQUMsNEJBQTRCO0FBQ3ZEO0FBQy9CLDZCQUFlLG9DQUFTTyxLQUFLO0lBQ3pCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNTyxJQUFJSCxNQUFNSSxjQUFjLENBQUNDLE1BQU07SUFDckMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDLElBQU1ZLE1BQU1MLEdBQUdNLElBQUksQ0FBQztJQUUvRCxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCSixhQUFhSyxDQUFBQSxZQUNUQSxVQUFVQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFBT0EsTUFBTUosUUFBUSxDQUFDRyxPQUFPQTtJQUUxRDtJQUVBLE1BQU1FLG9CQUFvQjtRQUN0QiwrQkFBK0I7UUFDL0IsTUFBTUMsa0JBQWtCakIsTUFBTUksY0FBYyxDQUN2Q2MsTUFBTSxDQUFDLENBQUNDLEdBQUdSLFFBQVVMLFNBQVMsQ0FBQ0ssTUFBTSxFQUNyQ0UsR0FBRyxDQUFDTyxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLEdBQUcsMENBQTBDO1FBQ3JFSixnQkFBZ0JLLElBQUksQ0FBQ3RCLE1BQU11QixNQUFNO1FBQ2pDLElBQUl0QixVQUFVdUIsSUFBSSxPQUFPLE1BQU1QLGdCQUFnQlosTUFBTSxLQUFLLEdBQUc7WUFDekRvQixNQUFNO1lBQ047UUFDSjtRQUVBLElBQUk7WUFDQSwyQkFBMkI7WUFDM0IsTUFBTTNCLDBEQUFNQSxDQUFDRCw4REFBVUEsQ0FBQ0UseUNBQUVBLEVBQUUsVUFBVTtnQkFDbEMyQixjQUFjVDtnQkFDZFUsTUFBTSxFQUFFO2dCQUNSMUIsV0FBV0EsVUFBVSxpQ0FBaUM7WUFDMUQ7WUFDQXdCLE1BQU07WUFDTnZCLGFBQWE7WUFDYjBCLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtZQUV0QnZCLGFBQWFDLE1BQU1MLEdBQUdNLElBQUksQ0FBQyxTQUFTLGlDQUFpQztRQUN6RSxFQUFFLE9BQU9zQixPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQ3hDTixNQUFNO1FBQ1Y7SUFDSjtJQUVBLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQThCOzs7Ozs7MEJBQzVDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUN6QyxxRkFBU0E7d0JBQ04yQyxNQUFLO3dCQUNMRixXQUFVO3dCQUNWRyxhQUFZO3dCQUNaQyxPQUFPckM7d0JBQ1BzQyxVQUFVLENBQUNDLElBQU10QyxhQUFhc0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRWhELDhEQUFDSDt3QkFBR0QsV0FBVTtrQ0FBc0I7Ozs7OztrQ0FDcEMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDUTs0QkFBR1IsV0FBVTtzQ0FDVGxDLE1BQU1JLGNBQWMsQ0FBQ0MsTUFBTSxHQUFHLEtBQUtMLE1BQU1JLGNBQWMsQ0FBQ1MsR0FBRyxDQUFDLENBQUNPLE1BQU1ULHNCQUNoRSw4REFBQ2dDO29DQUVHVCxXQUFVO29DQUNWVSxTQUFTLElBQU1sQyxhQUFhQzs7c0RBRzVCLDhEQUFDa0M7NENBQ0dULE1BQUs7NENBQ0xmLElBQUksWUFBa0IsT0FBTlY7NENBQ2hCbUMsU0FBU3hDLFNBQVMsQ0FBQ0ssTUFBTTs0Q0FDekI0QixVQUFVLElBQU03QixhQUFhQzs0Q0FDN0J1QixXQUFVOzs7Ozs7c0RBRWQsOERBQUNhOzRDQUNHQyxTQUFTLFlBQWtCLE9BQU5yQzs0Q0FDckJ1QixXQUFXLG1HQUF5SixPQUF0RDVCLFNBQVMsQ0FBQ0ssTUFBTSxHQUFHLGtCQUFrQjtzREFFbEpMLFNBQVMsQ0FBQ0ssTUFBTSxrQkFDYiw4REFBQ3NDO2dEQUFJZixXQUFVO2dEQUFxQnpCLE1BQUs7Z0RBQU95QyxRQUFPO2dEQUFlQyxTQUFRO2dEQUFZQyxPQUFNOzBEQUM1Riw0RUFBQ0M7b0RBQUtDLGVBQWM7b0RBQVFDLGdCQUFlO29EQUFRQyxhQUFZO29EQUFJQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7O3NEQUtqRiw4REFBQy9ELGtEQUFLQTs0Q0FDRndDLFdBQVU7NENBQ1Z3QixLQUFLdEMsS0FBS3VDLFVBQVU7NENBQ3BCQyxRQUFROzRDQUNSQyxPQUFPOzRDQUNQQyxLQUFJOzs7Ozs7c0RBR1IsOERBQUNDOzRDQUFHN0IsV0FBVTtzREFBV2QsS0FBSzRDLElBQUk7Ozs7Ozs7bUNBL0I3QnJEOzs7Ozs7Ozs7Ozs7Ozs7a0NBb0NyQiw4REFBQ3NEO3dCQUNHckIsU0FBUzVCO3dCQUNUa0IsV0FBVTtrQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL25ld0dyb3VwLmpzeD8zZmM5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyAgY29sbGVjdGlvbiwgYWRkRG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJzsgLy8gQWRqdXN0IHRoZSBwYXRoIGFzIG5lZWRlZFxuaW1wb3J0IHtkYn0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9wcyl7XG4gICAgY29uc3QgW2dyb3VwTmFtZSwgc2V0R3JvdXBOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IG4gPSBwcm9wcy5wcm9jZXNzZWRDaGF0cy5sZW5ndGg7XG4gICAgY29uc3QgW2lzQ2hlY2tlZCwgc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKCgpID0+IEFycmF5KG4pLmZpbGwoZmFsc2UpKTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRJc0NoZWNrZWQocHJldlN0YXRlID0+IFxuICAgICAgICAgICAgcHJldlN0YXRlLm1hcCgoaXRlbSwgaSkgPT4gKGkgPT09IGluZGV4ID8gIWl0ZW0gOiBpdGVtKSlcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlR3JvdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIEdhdGhlciBzZWxlY3RlZCBtZW1iZXJzJyBJRHNcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNZW1iZXJzID0gcHJvcHMucHJvY2Vzc2VkQ2hhdHNcbiAgICAgICAgICAgIC5maWx0ZXIoKF8sIGluZGV4KSA9PiBpc0NoZWNrZWRbaW5kZXhdKVxuICAgICAgICAgICAgLm1hcChjb250ID0+IGNvbnQuaWQpOyAvLyBBZGp1c3QgYWNjb3JkaW5nIHRvIHlvdXIgZGF0YSBzdHJ1Y3R1cmVcbiAgICAgICAgc2VsZWN0ZWRNZW1iZXJzLnB1c2gocHJvcHMudXNlcklkKTtcbiAgICAgICAgaWYgKGdyb3VwTmFtZS50cmltKCkgPT09IFwiXCIgfHwgc2VsZWN0ZWRNZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBncm91cCBuYW1lIGFuZCBzZWxlY3QgYXQgbGVhc3Qgb25lIG1lbWJlci5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQWRkIG5ldyBjaGF0IHRvIEZpcmViYXNlXG4gICAgICAgICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJDaGF0c1wiKSwge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czogc2VsZWN0ZWRNZW1iZXJzLFxuICAgICAgICAgICAgICAgIGNoYXQ6IFtdLCAvLyBJbml0aWFsIGVtcHR5IGFycmF5IGZvciBtZXNzYWdlc1xuICAgICAgICAgICAgICAgIGdyb3VwTmFtZTogZ3JvdXBOYW1lIC8vIE9wdGlvbmFsOiBTdG9yZSB0aGUgZ3JvdXAgbmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGVydChcIkdyb3VwIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgICAgIHNldEdyb3VwTmFtZShcIlwiKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKEFycmF5KG4pLmZpbGwoZmFsc2UpKTsgLy8gUmVzZXQgdGhlIHN0YXRlIGFmdGVyIGNyZWF0aW9uXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZ3JvdXA6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGNyZWF0aW5nIGdyb3VwLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTkwMCB3LTEvNCBwLTIgbS0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIG0tMiBwLTJcIj5DcmVhdGUgR3JvdXA8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIG0tMlwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIHJvdW5kZWQtbWQgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHcm91cCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dyb3VwTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHcm91cE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGVcIj5BZGQgTWVtYmVyczwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIG0tMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9jZXNzZWRDaGF0cy5sZW5ndGggPiAwICYmIHByb3BzLnByb2Nlc3NlZENoYXRzLm1hcCgoY29udCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0yIHAtMSByb3VuZGVkLW1kIGJnLXNsYXRlLTcwMCB0ZXh0LW9yYW5nZS00MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgbWF4LWgtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENpcmN1bGFyIENoZWNrYm94ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGNoZWNrYm94LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZFtpbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlVG9nZ2xlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17YGNoZWNrYm94LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNiBoLTYgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1vcmFuZ2UtNDAwIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICR7aXNDaGVja2VkW2luZGV4XSA/ICdiZy1vcmFuZ2UtNDAwJyA6ICdiZy10cmFuc3BhcmVudCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ2hlY2tlZFtpbmRleF0gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXdoaXRlXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk01IDEzbDQgNEwxOSA3XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NvbnQucHJvZmlsZVBpY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bFwiPntjb250Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVHcm91cH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgR3JvdXBcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiY29sbGVjdGlvbiIsImFkZERvYyIsImRiIiwicHJvcHMiLCJncm91cE5hbWUiLCJzZXRHcm91cE5hbWUiLCJuIiwicHJvY2Vzc2VkQ2hhdHMiLCJsZW5ndGgiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJBcnJheSIsImZpbGwiLCJoYW5kbGVUb2dnbGUiLCJpbmRleCIsInByZXZTdGF0ZSIsIm1hcCIsIml0ZW0iLCJpIiwiaGFuZGxlQ3JlYXRlR3JvdXAiLCJzZWxlY3RlZE1lbWJlcnMiLCJmaWx0ZXIiLCJfIiwiY29udCIsImlkIiwicHVzaCIsInVzZXJJZCIsInRyaW0iLCJhbGVydCIsInBhcnRpY2lwYW50cyIsImNoYXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ1bCIsImxpIiwib25DbGljayIsImlucHV0IiwiY2hlY2tlZCIsImxhYmVsIiwiaHRtbEZvciIsInN2ZyIsInN0cm9rZSIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJzcmMiLCJwcm9maWxlUGljIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJoMyIsIm5hbWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/newGroup.jsx\n"));

/***/ })

});