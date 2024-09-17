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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userData.uid;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    //   useEffect(()=>{\n    //     const modChat=props.chats.map((cont,index)=>{\n    //         const receiver=cont.participants.filter(pid=>pid!=userId)\n    //         const name=getUserNameById(receiver);\n    //         return ({\"name\":name,\"chat\":cont.chat});\n    //     })\n    //     setProcessedChats(modChat);\n    //     console.log(modChat);\n    //   },[props.chats])\n    // import { useState, useEffect } from 'react';\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const pair = await getUserNameById(receiver);\n                    // console.log(profilePic)\n                    return {\n                        \"name\": pair.name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": pair.pic\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    processedChats.length > 0 && processedChats.map((cont, index)=>{\n                        //   const groupName=cont?.groupName;\n                        //   if(!groupName){\n                        //     const receiver=cont.participants.filter(pid=>pid!=userId)\n                        // const name=getUserNameById(receiver);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-orange-300\",\n                            onClick: ()=>props.selectContact(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    console.log(cont.profilePic),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: cont.profilePic,\n                                        width: 50,\n                                        height: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 28\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0w7QUFDTztBQUNnQjtBQUNmO0FBRWxDLDZCQUFlLG9DQUFVTSxLQUFLO0lBQzFCLHdDQUF3QztJQUN4QyxNQUFNQyxTQUFTRCxNQUFNQyxNQUFNO0lBRTNCLGVBQWVDLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0EsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVQLHVEQUFHQSxDQUFDRCx5Q0FBRUEsRUFBRSxTQUFTTztZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNUCwwREFBTUEsQ0FBQ007WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNsQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNMLFFBQVFNLEVBQUU7Z0JBQ3RCLE1BQU1BLEtBQUtKLFNBQVNLLEdBQUc7Z0JBQ3ZCLE1BQU1DLE9BQU9OLFNBQVNNLElBQUk7Z0JBQzFCLE1BQU1DLE1BQU1QLFNBQVNRLGNBQWM7Z0JBQ25DLE1BQU1DLE9BQU87b0JBQUUsUUFBUUg7b0JBQU0sT0FBT0M7Z0JBQUk7Z0JBQ3hDTCxRQUFRQyxHQUFHLENBQUNJO2dCQUNaLE9BQU9FO1lBQ1gsT0FBTztnQkFDSFAsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtRQUNKLEVBQUUsT0FBT08sT0FBTztZQUNaUixRQUFRUSxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNKO0lBQ0EsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHeEIscURBQWMsQ0FBQyxFQUFFO0lBQzdELG9CQUFvQjtJQUNwQixvREFBb0Q7SUFFcEQsb0VBQW9FO0lBQ3BFLGdEQUFnRDtJQUNoRCxtREFBbUQ7SUFDbkQsU0FBUztJQUNULGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLCtDQUErQztJQUcvQ0ksZ0RBQVNBLENBQUM7UUFDTixNQUFNc0IsY0FBYztZQUNoQixJQUFJO2dCQUNBLGtEQUFrRDtnQkFDbEQsTUFBTUMsZUFBZSxNQUFNQyxRQUFRQyxHQUFHLENBQ2xDeEIsTUFBTXlCLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLE9BQU9DO29CQUNuQixNQUFNQyxnQkFBZ0JELEtBQUtFLFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxDQUFBQSxNQUFPQSxRQUFROUI7b0JBQzlELE1BQU1FLFdBQVd5QixhQUFhLENBQUMsRUFBRSxFQUFFLDZCQUE2QjtvQkFFaEUsNkRBQTZEO29CQUM3RCxNQUFNWixPQUFPLE1BQU1kLGdCQUFnQkM7b0JBQ25DLDBCQUEwQjtvQkFDMUIsT0FBTzt3QkFBRSxRQUFRYSxLQUFLSCxJQUFJO3dCQUFFLFFBQVFjLEtBQUtLLElBQUk7d0JBQUUsY0FBY2hCLEtBQUtGLEdBQUc7b0JBQUM7Z0JBQzFFO2dCQUdKLHVDQUF1QztnQkFDdkNLLGtCQUFrQkc7WUFDdEIsRUFBRSxPQUFPTCxPQUFPO2dCQUNaUixRQUFRUSxLQUFLLENBQUMsMEJBQTBCQTtZQUM1QztRQUNKO1FBRUFJO0lBQ0osR0FBRztRQUFDckIsTUFBTXlCLEtBQUs7UUFBRXhCO0tBQU87SUFDeEIscUJBQ0ksOERBQUNnQztRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBTUQsV0FBVTt3QkFBMkJFLGFBQVk7Ozs7OztrQ0FDeEQsOERBQUNDO3dCQUFPSCxXQUFVO2tDQUFtRDs7Ozs7Ozs7Ozs7OzBCQUd6RSw4REFBQ0k7Z0JBQUdKLFdBQVU7O29CQUNUekIsUUFBUUMsR0FBRyxDQUFDVixNQUFNeUIsS0FBSztvQkFDdkJQLGVBQWVxQixNQUFNLEdBQUcsS0FBS3JCLGVBQWVRLEdBQUcsQ0FBQyxDQUFDQyxNQUFNYTt3QkFDcEQscUNBQXFDO3dCQUNyQyxvQkFBb0I7d0JBQ3BCLGdFQUFnRTt3QkFDaEUsd0NBQXdDO3dCQUV4QyxxQkFBTyw4REFBQ0M7NEJBQWVQLFdBQVU7NEJBQW1DUSxTQUFTLElBQU0xQyxNQUFNMkMsYUFBYSxDQUFDSDtzQ0FDbkcsNEVBQUNQO2dDQUFJQyxXQUFVOztvQ0FDVnpCLFFBQVFDLEdBQUcsQ0FBQ2lCLEtBQUtpQixVQUFVO2tEQUM1Qiw4REFBQ2xELGtEQUFLQTt3Q0FBQ3dDLFdBQVU7d0NBQWVXLEtBQUtsQixLQUFLaUIsVUFBVTt3Q0FBRUUsT0FBTzt3Q0FBSUMsUUFBUTt3Q0FBSUMsS0FBSTs7Ozs7O2tEQUVqRiw4REFBQ0M7d0NBQUdmLFdBQVU7a0RBQVdQLEtBQUtkLElBQUk7Ozs7Ozs7Ozs7OzsyQkFMMUIyQjs7Ozs7b0JBVXBCOzs7Ozs7Ozs7Ozs7O0FBT2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4P2RkNGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAvLyAgICBjb25zdCBtb2RBcnJheT1wcm9wcy5jb250YWN0Lm1hcCgpXG4gICAgY29uc3QgdXNlcklkID0gcHJvcHMudXNlcklkO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHVzZXJJZCBpbiB0aGUgXCJ1c2Vyc1wiIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZGIsIFwiVXNlcnNcIiwgcmVjZWl2ZXIpO1xuXG4gICAgICAgICAgICAvLyBGZXRjaCB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlclJlZik7XG5cbiAgICAgICAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBhbmQgcmV0dXJuIHRoZSB1c2VyJ3MgbmFtZSBmcm9tIHRoZSBkb2N1bWVudCBkYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRG9jLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHVzZXJEYXRhLnVpZDtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdXNlckRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaWMgPSB1c2VyRGF0YS5wcm9maWxlUGljdHVyZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0geyBcIm5hbWVcIjogbmFtZSwgXCJwaWNcIjogcGljIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGljKVxuICAgICAgICAgICAgICAgIHJldHVybiBwYWlyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggdXNlciFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtwcm9jZXNzZWRDaGF0cywgc2V0UHJvY2Vzc2VkQ2hhdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICAgIC8vICAgdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gICAgIGNvbnN0IG1vZENoYXQ9cHJvcHMuY2hhdHMubWFwKChjb250LGluZGV4KT0+e1xuXG4gICAgLy8gICAgICAgICBjb25zdCByZWNlaXZlcj1jb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkPT5waWQhPXVzZXJJZClcbiAgICAvLyAgICAgICAgIGNvbnN0IG5hbWU9Z2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcbiAgICAvLyAgICAgICAgIHJldHVybiAoe1wibmFtZVwiOm5hbWUsXCJjaGF0XCI6Y29udC5jaGF0fSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHNldFByb2Nlc3NlZENoYXRzKG1vZENoYXQpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhtb2RDaGF0KTtcbiAgICAvLyAgIH0sW3Byb3BzLmNoYXRzXSlcbiAgICAvLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RpZnlDaGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gVXNpbmcgUHJvbWlzZS5hbGwgdG8gaGFuZGxlIGFzeW5jIG1hcCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2hhdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hhdHMubWFwKGFzeW5jIChjb250KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlckFycmF5ID0gY29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZCA9PiBwaWQgIT09IHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlciA9IHJlY2VpdmVyQXJyYXlbMF07IC8vIEFzc3VtaW5nIG9ubHkgb25lIHJlY2VpdmVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtaW5nIGdldFVzZXJOYW1lQnlJZCBpcyBhc3luYyBhbmQgZmV0Y2hlcyB0aGUgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSBhd2FpdCBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZmlsZVBpYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFwibmFtZVwiOiBwYWlyLm5hbWUsIFwiY2hhdFwiOiBjb250LmNoYXQsIFwicHJvZmlsZVBpY1wiOiBwYWlyLnBpYyB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbW9kaWZpZWQgY2hhdHNcbiAgICAgICAgICAgICAgICBzZXRQcm9jZXNzZWRDaGF0cyh1cGRhdGVkQ2hhdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW9kaWZ5aW5nIGNoYXRzOlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kaWZ5Q2hhdHMoKTtcbiAgICB9LCBbcHJvcHMuY2hhdHMsIHVzZXJJZF0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgdy0xLzQgcC0yIG0tMSBoLWZ1bGwgcm91bmRlZC1tZFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBwLTEgbS0yIHctMy80XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMiBtLTIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTMwMFwiPkdvPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIFwiID5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMuY2hhdHMpfVxuICAgICAgICAgICAgICAgIHtwcm9jZXNzZWRDaGF0cy5sZW5ndGggPiAwICYmIHByb2Nlc3NlZENoYXRzLm1hcCgoY29udCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBncm91cE5hbWU9Y29udD8uZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmKCFncm91cE5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcmVjZWl2ZXI9Y29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZD0+cGlkIT11c2VySWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5hbWU9Z2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm0tMiBwLTEgcm91bmRlZC1tZCBiZy1vcmFuZ2UtMzAwXCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2VsZWN0Q29udGFjdChpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhjb250LnByb2ZpbGVQaWMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBzcmM9e2NvbnQucHJvZmlsZVBpY30gd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJQcm9maWxlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e2NvbnQubmFtZX08L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDb250YWN0IDEgY2xpY2tlZFwiKX0+Q29udGFjdCAxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCAyPC9saT4gKi99XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsImRiIiwiZG9jIiwiZ2V0RG9jIiwidXNlRWZmZWN0IiwicHJvcHMiLCJ1c2VySWQiLCJnZXRVc2VyTmFtZUJ5SWQiLCJyZWNlaXZlciIsInVzZXJSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwidXNlckRhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlkIiwidWlkIiwibmFtZSIsInBpYyIsInByb2ZpbGVQaWN0dXJlIiwicGFpciIsImVycm9yIiwicHJvY2Vzc2VkQ2hhdHMiLCJzZXRQcm9jZXNzZWRDaGF0cyIsInVzZVN0YXRlIiwibW9kaWZ5Q2hhdHMiLCJ1cGRhdGVkQ2hhdHMiLCJQcm9taXNlIiwiYWxsIiwiY2hhdHMiLCJtYXAiLCJjb250IiwicmVjZWl2ZXJBcnJheSIsInBhcnRpY2lwYW50cyIsImZpbHRlciIsInBpZCIsImNoYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidWwiLCJsZW5ndGgiLCJpbmRleCIsImxpIiwib25DbGljayIsInNlbGVjdENvbnRhY3QiLCJwcm9maWxlUGljIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});