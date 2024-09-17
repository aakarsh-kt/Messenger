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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                return userData.name;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    //   useEffect(()=>{\n    //     const modChat=props.chats.map((cont,index)=>{\n    //         const receiver=cont.participants.filter(pid=>pid!=userId)\n    //         const name=getUserNameById(receiver);\n    //         return ({\"name\":name,\"chat\":cont.chat});\n    //     })\n    //     setProcessedChats(modChat);\n    //     console.log(modChat);\n    //   },[props.chats])\n    // import { useState, useEffect } from 'react';\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const name = await getUserNameById(receiver);\n                    return {\n                        \"name\": name,\n                        \"chat\": cont.chat\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    processedChats.length > 0 && processedChats.map((cont, index)=>{\n                        //   const groupName=cont?.groupName;\n                        //   if(!groupName){\n                        //     const receiver=cont.participants.filter(pid=>pid!=userId)\n                        // const name=getUserNameById(receiver);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-orange-300\",\n                            onClick: ()=>props.selectContact(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: \"/image4.jpg\",\n                                        width: 50,\n                                        height: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 22\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 27\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0w7QUFDTztBQUNnQjtBQUNmO0FBRWxDLDZCQUFlLG9DQUFTTSxLQUFLO0lBQzdCLHdDQUF3QztJQUNwQyxNQUFNQyxTQUFPRCxNQUFNQyxNQUFNO0lBRXpCLGVBQWVDLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0YsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVQLHVEQUFHQSxDQUFDRCx5Q0FBRUEsRUFBRSxTQUFTTztZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNUCwwREFBTUEsQ0FBQ007WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNwQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCLE9BQU9ELFNBQVNFLElBQUk7WUFDdEIsT0FBTztnQkFDTEMsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDVDtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBQ0EsTUFBTSxDQUFDQyxnQkFBZUMsa0JBQWtCLEdBQUNuQixxREFBYyxDQUFDLEVBQUU7SUFDNUQsb0JBQW9CO0lBQ3BCLG9EQUFvRDtJQUVwRCxvRUFBb0U7SUFDcEUsZ0RBQWdEO0lBQ2hELG1EQUFtRDtJQUNuRCxTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsK0NBQStDO0lBR2pESSxnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixjQUFjO1lBQ2xCLElBQUk7Z0JBQ0Ysa0RBQWtEO2dCQUNsRCxNQUFNQyxlQUFlLE1BQU1DLFFBQVFDLEdBQUcsQ0FDcENuQixNQUFNb0IsS0FBSyxDQUFDQyxHQUFHLENBQUMsT0FBT0M7b0JBQ3JCLE1BQU1DLGdCQUFnQkQsS0FBS0UsWUFBWSxDQUFDQyxNQUFNLENBQUNDLENBQUFBLE1BQU9BLFFBQVF6QjtvQkFDOUQsTUFBTUUsV0FBV29CLGFBQWEsQ0FBQyxFQUFFLEVBQUUsNkJBQTZCO29CQUVoRSw2REFBNkQ7b0JBQzdELE1BQU1kLE9BQU8sTUFBTVAsZ0JBQWdCQztvQkFFbkMsT0FBTzt3QkFBRSxRQUFRTTt3QkFBTSxRQUFRYSxLQUFLSyxJQUFJO29CQUFDO2dCQUMzQztnQkFHRix1Q0FBdUM7Z0JBQ3ZDYixrQkFBa0JHO1lBQ3BCLEVBQUUsT0FBT0wsT0FBTztnQkFDZEYsUUFBUUUsS0FBSyxDQUFDLDBCQUEwQkE7WUFDMUM7UUFDRjtRQUVBSTtJQUNGLEdBQUc7UUFBQ2hCLE1BQU1vQixLQUFLO1FBQUVuQjtLQUFPO0lBQ3RCLHFCQUNJLDhEQUFDMkI7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1ELFdBQVU7d0JBQTJCRSxhQUFZOzs7Ozs7a0NBQ3hELDhEQUFDQzt3QkFBT0gsV0FBVTtrQ0FBbUQ7Ozs7Ozs7Ozs7OzswQkFHekUsOERBQUNJO2dCQUFHSixXQUFVOztvQkFDVG5CLFFBQVFDLEdBQUcsQ0FBQ1gsTUFBTW9CLEtBQUs7b0JBQ3ZCUCxlQUFlcUIsTUFBTSxHQUFDLEtBQU1yQixlQUFlUSxHQUFHLENBQUMsQ0FBQ0MsTUFBS2E7d0JBQ3RELHFDQUFxQzt3QkFDckMsb0JBQW9CO3dCQUNwQixnRUFBZ0U7d0JBQzVELHdDQUF3Qzt3QkFFMUMscUJBQVEsOERBQUNDOzRCQUFnQlAsV0FBVTs0QkFBbUNRLFNBQVMsSUFBSXJDLE1BQU1zQyxhQUFhLENBQUNIO3NDQUNyRyw0RUFBQ1A7Z0NBQUlDLFdBQVU7O2tEQUNkLDhEQUFDbkMsa0RBQUtBO3dDQUFFbUMsV0FBVTt3Q0FBZVUsS0FBSTt3Q0FBY0MsT0FBTzt3Q0FBSUMsUUFBUTt3Q0FBSUMsS0FBSTs7Ozs7O2tEQUUvRSw4REFBQ0M7d0NBQUdkLFdBQVU7a0RBQVdQLEtBQUtiLElBQUk7Ozs7Ozs7Ozs7OzsyQkFKbkIwQjs7Ozs7b0JBU25COzs7Ozs7Ozs7Ozs7O0FBT2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4P2RkNGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9wcyl7XG4vLyAgICBjb25zdCBtb2RBcnJheT1wcm9wcy5jb250YWN0Lm1hcCgpXG4gICAgY29uc3QgdXNlcklkPXByb3BzLnVzZXJJZDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gdXNlcklkIGluIHRoZSBcInVzZXJzXCIgY29sbGVjdGlvblxuICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZGIsIFwiVXNlcnNcIiwgcmVjZWl2ZXIpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIEZldGNoIHRoZSBkb2N1bWVudFxuICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlclJlZik7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHVzZXJEb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgYW5kIHJldHVybiB0aGUgdXNlcidzIG5hbWUgZnJvbSB0aGUgZG9jdW1lbnQgZGF0YVxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyRGF0YS5uYW1lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggdXNlciFcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXI6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgW3Byb2Nlc3NlZENoYXRzLHNldFByb2Nlc3NlZENoYXRzXT1SZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgLy8gICB1c2VFZmZlY3QoKCk9PntcbiAgICAvLyAgICAgY29uc3QgbW9kQ2hhdD1wcm9wcy5jaGF0cy5tYXAoKGNvbnQsaW5kZXgpPT57XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlY2VpdmVyPWNvbnQucGFydGljaXBhbnRzLmZpbHRlcihwaWQ9PnBpZCE9dXNlcklkKVxuICAgIC8vICAgICAgICAgY29uc3QgbmFtZT1nZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgIC8vICAgICAgICAgcmV0dXJuICh7XCJuYW1lXCI6bmFtZSxcImNoYXRcIjpjb250LmNoYXR9KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgc2V0UHJvY2Vzc2VkQ2hhdHMobW9kQ2hhdCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG1vZENoYXQpO1xuICAgIC8vICAgfSxbcHJvcHMuY2hhdHNdKVxuICAgIC8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vZGlmeUNoYXRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVXNpbmcgUHJvbWlzZS5hbGwgdG8gaGFuZGxlIGFzeW5jIG1hcCBvcGVyYXRpb25cbiAgICAgICAgY29uc3QgdXBkYXRlZENoYXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgcHJvcHMuY2hhdHMubWFwKGFzeW5jIChjb250KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWNlaXZlckFycmF5ID0gY29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZCA9PiBwaWQgIT09IHVzZXJJZCk7XG4gICAgICAgICAgICBjb25zdCByZWNlaXZlciA9IHJlY2VpdmVyQXJyYXlbMF07IC8vIEFzc3VtaW5nIG9ubHkgb25lIHJlY2VpdmVyXG5cbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIGdldFVzZXJOYW1lQnlJZCBpcyBhc3luYyBhbmQgZmV0Y2hlcyB0aGUgdXNlcm5hbWVcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBhd2FpdCBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4geyBcIm5hbWVcIjogbmFtZSwgXCJjaGF0XCI6IGNvbnQuY2hhdCB9O1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbW9kaWZpZWQgY2hhdHNcbiAgICAgICAgc2V0UHJvY2Vzc2VkQ2hhdHModXBkYXRlZENoYXRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtb2RpZnlpbmcgY2hhdHM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kaWZ5Q2hhdHMoKTtcbiAgfSwgW3Byb3BzLmNoYXRzLCB1c2VySWRdKTsgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHctMS80IHAtMiBtLTEgaC1mdWxsIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgcC0xIG0tMiB3LTMvNFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBwLTIgbS0yIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS0zMDBcIj5HbzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgXCIgPlxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5jaGF0cyl9XG4gICAgICAgICAgICAgICAge3Byb2Nlc3NlZENoYXRzLmxlbmd0aD4wICYmICBwcm9jZXNzZWRDaGF0cy5tYXAoKGNvbnQsaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgLy8gICBjb25zdCBncm91cE5hbWU9Y29udD8uZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgIC8vICAgaWYoIWdyb3VwTmFtZSl7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHJlY2VpdmVyPWNvbnQucGFydGljaXBhbnRzLmZpbHRlcihwaWQ9PnBpZCE9dXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBuYW1lPWdldFVzZXJOYW1lQnlJZChyZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHJldHVybiAgPGxpIGtleT17aW5kZXh9ICBjbGFzc05hbWU9XCJtLTIgcC0xIHJvdW5kZWQtbWQgYmctb3JhbmdlLTMwMFwiIG9uQ2xpY2s9eygpPT5wcm9wcy5zZWxlY3RDb250YWN0KGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgc3JjPVwiL2ltYWdlNC5qcGdcIiB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD1cIlByb2ZpbGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bFwiPntjb250Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgey8qIDxsaSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcIkNvbnRhY3QgMSBjbGlja2VkXCIpfT5Db250YWN0IDE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Db250YWN0IDI8L2xpPiAqL31cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsImRiIiwiZG9jIiwiZ2V0RG9jIiwidXNlRWZmZWN0IiwicHJvcHMiLCJ1c2VySWQiLCJnZXRVc2VyTmFtZUJ5SWQiLCJyZWNlaXZlciIsInVzZXJSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwidXNlckRhdGEiLCJkYXRhIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByb2Nlc3NlZENoYXRzIiwic2V0UHJvY2Vzc2VkQ2hhdHMiLCJ1c2VTdGF0ZSIsIm1vZGlmeUNoYXRzIiwidXBkYXRlZENoYXRzIiwiUHJvbWlzZSIsImFsbCIsImNoYXRzIiwibWFwIiwiY29udCIsInJlY2VpdmVyQXJyYXkiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwaWQiLCJjaGF0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInVsIiwibGVuZ3RoIiwiaW5kZXgiLCJsaSIsIm9uQ2xpY2siLCJzZWxlY3RDb250YWN0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});