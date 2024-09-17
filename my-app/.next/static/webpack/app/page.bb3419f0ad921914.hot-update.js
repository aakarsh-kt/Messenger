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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userData);\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    //   useEffect(()=>{\n    //     const modChat=props.chats.map((cont,index)=>{\n    //         const receiver=cont.participants.filter(pid=>pid!=userId)\n    //         const name=getUserNameById(receiver);\n    //         return ({\"name\":name,\"chat\":cont.chat});\n    //     })\n    //     setProcessedChats(modChat);\n    //     console.log(modChat);\n    //   },[props.chats])\n    // import { useState, useEffect } from 'react';\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const { name, profilePic } = await getUserNameById(receiver);\n                    console.log(profilePic);\n                    return {\n                        \"name\": name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": profilePic\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    processedChats.length > 0 && processedChats.map((cont, index)=>{\n                        //   const groupName=cont?.groupName;\n                        //   if(!groupName){\n                        //     const receiver=cont.participants.filter(pid=>pid!=userId)\n                        // const name=getUserNameById(receiver);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-orange-300\",\n                            onClick: ()=>props.selectContact(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    console.log(cont.profilePic),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: cont.profilePic,\n                                        width: 50,\n                                        height: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 28\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0w7QUFDTztBQUNnQjtBQUNmO0FBRWxDLDZCQUFlLG9DQUFVTSxLQUFLO0lBQzFCLHdDQUF3QztJQUN4QyxNQUFNQyxTQUFTRCxNQUFNQyxNQUFNO0lBRTNCLGVBQWVDLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0EsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVQLHVEQUFHQSxDQUFDRCx5Q0FBRUEsRUFBRSxTQUFTTztZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNUCwwREFBTUEsQ0FBQ007WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNsQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNaLE1BQU1JLE9BQU9KLFNBQVNJLElBQUk7Z0JBQzFCLE1BQU1DLE1BQU1MLFNBQVNNLGNBQWM7Z0JBQ25DLE1BQU1DLE9BQUs7b0JBQUMsUUFBT0g7b0JBQUssT0FBTUM7Z0JBQUc7Z0JBQ2pDSCxRQUFRQyxHQUFHLENBQUNFO2dCQUNaLE9BQU9FO1lBQ1gsT0FBTztnQkFDSEwsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtRQUNKLEVBQUUsT0FBT0ssT0FBTztZQUNaTixRQUFRTSxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNKO0lBQ0EsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHdEIscURBQWMsQ0FBQyxFQUFFO0lBQzdELG9CQUFvQjtJQUNwQixvREFBb0Q7SUFFcEQsb0VBQW9FO0lBQ3BFLGdEQUFnRDtJQUNoRCxtREFBbUQ7SUFDbkQsU0FBUztJQUNULGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLCtDQUErQztJQUcvQ0ksZ0RBQVNBLENBQUM7UUFDTixNQUFNb0IsY0FBYztZQUNoQixJQUFJO2dCQUNBLGtEQUFrRDtnQkFDbEQsTUFBTUMsZUFBZSxNQUFNQyxRQUFRQyxHQUFHLENBQ2xDdEIsTUFBTXVCLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLE9BQU9DO29CQUNuQixNQUFNQyxnQkFBZ0JELEtBQUtFLFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxDQUFBQSxNQUFPQSxRQUFRNUI7b0JBQzlELE1BQU1FLFdBQVd1QixhQUFhLENBQUMsRUFBRSxFQUFFLDZCQUE2QjtvQkFFaEUsNkRBQTZEO29CQUM3RCxNQUFNLEVBQUVmLElBQUksRUFBRW1CLFVBQVUsRUFBRSxHQUFHLE1BQU01QixnQkFBZ0JDO29CQUNuRE0sUUFBUUMsR0FBRyxDQUFDb0I7b0JBQ1osT0FBTzt3QkFBRSxRQUFRbkI7d0JBQU0sUUFBUWMsS0FBS00sSUFBSTt3QkFBRSxjQUFjRDtvQkFBVztnQkFDdkU7Z0JBR0osdUNBQXVDO2dCQUN2Q2Isa0JBQWtCRztZQUN0QixFQUFFLE9BQU9MLE9BQU87Z0JBQ1pOLFFBQVFNLEtBQUssQ0FBQywwQkFBMEJBO1lBQzVDO1FBQ0o7UUFFQUk7SUFDSixHQUFHO1FBQUNuQixNQUFNdUIsS0FBSztRQUFFdEI7S0FBTztJQUN4QixxQkFDSSw4REFBQytCO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNRCxXQUFVO3dCQUEyQkUsYUFBWTs7Ozs7O2tDQUN4RCw4REFBQ0M7d0JBQU9ILFdBQVU7a0NBQW1EOzs7Ozs7Ozs7Ozs7MEJBR3pFLDhEQUFDSTtnQkFBR0osV0FBVTs7b0JBQ1R4QixRQUFRQyxHQUFHLENBQUNWLE1BQU11QixLQUFLO29CQUN2QlAsZUFBZXNCLE1BQU0sR0FBRyxLQUFLdEIsZUFBZVEsR0FBRyxDQUFDLENBQUNDLE1BQU1jO3dCQUNwRCxxQ0FBcUM7d0JBQ3JDLG9CQUFvQjt3QkFDcEIsZ0VBQWdFO3dCQUNoRSx3Q0FBd0M7d0JBRXhDLHFCQUFPLDhEQUFDQzs0QkFBZVAsV0FBVTs0QkFBbUNRLFNBQVMsSUFBTXpDLE1BQU0wQyxhQUFhLENBQUNIO3NDQUNuRyw0RUFBQ1A7Z0NBQUlDLFdBQVU7O29DQUNWeEIsUUFBUUMsR0FBRyxDQUFDZSxLQUFLSyxVQUFVO2tEQUM1Qiw4REFBQ3BDLGtEQUFLQTt3Q0FBQ3VDLFdBQVU7d0NBQWVVLEtBQUtsQixLQUFLSyxVQUFVO3dDQUFFYyxPQUFPO3dDQUFJQyxRQUFRO3dDQUFJQyxLQUFJOzs7Ozs7a0RBRWpGLDhEQUFDQzt3Q0FBR2QsV0FBVTtrREFBV1IsS0FBS2QsSUFBSTs7Ozs7Ozs7Ozs7OzJCQUwxQjRCOzs7OztvQkFVcEI7Ozs7Ozs7Ozs7Ozs7QUFPaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci5qc3g/ZGQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIC8vICAgIGNvbnN0IG1vZEFycmF5PXByb3BzLmNvbnRhY3QubWFwKClcbiAgICBjb25zdCB1c2VySWQgPSBwcm9wcy51c2VySWQ7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gdXNlcklkIGluIHRoZSBcInVzZXJzXCIgY29sbGVjdGlvblxuICAgICAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgXCJVc2Vyc1wiLCByZWNlaXZlcik7XG5cbiAgICAgICAgICAgIC8vIEZldGNoIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGdldERvYyh1c2VyUmVmKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJEb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGFuZCByZXR1cm4gdGhlIHVzZXIncyBuYW1lIGZyb20gdGhlIGRvY3VtZW50IGRhdGFcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJEb2MuZGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdXNlckRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaWMgPSB1c2VyRGF0YS5wcm9maWxlUGljdHVyZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWlyPXtcIm5hbWVcIjpuYW1lLFwicGljXCI6cGljfTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaWMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhaXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCB1c2VyIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3Byb2Nlc3NlZENoYXRzLCBzZXRQcm9jZXNzZWRDaGF0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgLy8gICB1c2VFZmZlY3QoKCk9PntcbiAgICAvLyAgICAgY29uc3QgbW9kQ2hhdD1wcm9wcy5jaGF0cy5tYXAoKGNvbnQsaW5kZXgpPT57XG5cbiAgICAvLyAgICAgICAgIGNvbnN0IHJlY2VpdmVyPWNvbnQucGFydGljaXBhbnRzLmZpbHRlcihwaWQ9PnBpZCE9dXNlcklkKVxuICAgIC8vICAgICAgICAgY29uc3QgbmFtZT1nZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgIC8vICAgICAgICAgcmV0dXJuICh7XCJuYW1lXCI6bmFtZSxcImNoYXRcIjpjb250LmNoYXR9KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgc2V0UHJvY2Vzc2VkQ2hhdHMobW9kQ2hhdCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG1vZENoYXQpO1xuICAgIC8vICAgfSxbcHJvcHMuY2hhdHNdKVxuICAgIC8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGlmeUNoYXRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBVc2luZyBQcm9taXNlLmFsbCB0byBoYW5kbGUgYXN5bmMgbWFwIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDaGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGF0cy5tYXAoYXN5bmMgKGNvbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyQXJyYXkgPSBjb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkID0+IHBpZCAhPT0gdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyID0gcmVjZWl2ZXJBcnJheVswXTsgLy8gQXNzdW1pbmcgb25seSBvbmUgcmVjZWl2ZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgZ2V0VXNlck5hbWVCeUlkIGlzIGFzeW5jIGFuZCBmZXRjaGVzIHRoZSB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljIH0gPSBhd2FpdCBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZmlsZVBpYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFwibmFtZVwiOiBuYW1lLCBcImNoYXRcIjogY29udC5jaGF0LCBcInByb2ZpbGVQaWNcIjogcHJvZmlsZVBpYyB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbW9kaWZpZWQgY2hhdHNcbiAgICAgICAgICAgICAgICBzZXRQcm9jZXNzZWRDaGF0cyh1cGRhdGVkQ2hhdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW9kaWZ5aW5nIGNoYXRzOlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kaWZ5Q2hhdHMoKTtcbiAgICB9LCBbcHJvcHMuY2hhdHMsIHVzZXJJZF0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgdy0xLzQgcC0yIG0tMSBoLWZ1bGwgcm91bmRlZC1tZFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBwLTEgbS0yIHctMy80XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMiBtLTIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTMwMFwiPkdvPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIFwiID5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMuY2hhdHMpfVxuICAgICAgICAgICAgICAgIHtwcm9jZXNzZWRDaGF0cy5sZW5ndGggPiAwICYmIHByb2Nlc3NlZENoYXRzLm1hcCgoY29udCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBncm91cE5hbWU9Y29udD8uZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmKCFncm91cE5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcmVjZWl2ZXI9Y29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZD0+cGlkIT11c2VySWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5hbWU9Z2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm0tMiBwLTEgcm91bmRlZC1tZCBiZy1vcmFuZ2UtMzAwXCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2VsZWN0Q29udGFjdChpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhjb250LnByb2ZpbGVQaWMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBzcmM9e2NvbnQucHJvZmlsZVBpY30gd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJQcm9maWxlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e2NvbnQubmFtZX08L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDb250YWN0IDEgY2xpY2tlZFwiKX0+Q29udGFjdCAxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCAyPC9saT4gKi99XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsImRiIiwiZG9jIiwiZ2V0RG9jIiwidXNlRWZmZWN0IiwicHJvcHMiLCJ1c2VySWQiLCJnZXRVc2VyTmFtZUJ5SWQiLCJyZWNlaXZlciIsInVzZXJSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwidXNlckRhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJwaWMiLCJwcm9maWxlUGljdHVyZSIsInBhaXIiLCJlcnJvciIsInByb2Nlc3NlZENoYXRzIiwic2V0UHJvY2Vzc2VkQ2hhdHMiLCJ1c2VTdGF0ZSIsIm1vZGlmeUNoYXRzIiwidXBkYXRlZENoYXRzIiwiUHJvbWlzZSIsImFsbCIsImNoYXRzIiwibWFwIiwiY29udCIsInJlY2VpdmVyQXJyYXkiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwaWQiLCJwcm9maWxlUGljIiwiY2hhdCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ1bCIsImxlbmd0aCIsImluZGV4IiwibGkiLCJvbkNsaWNrIiwic2VsZWN0Q29udGFjdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});