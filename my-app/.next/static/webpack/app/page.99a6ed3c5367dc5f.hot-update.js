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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userDoc.id;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"id\": id,\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    //   useEffect(()=>{\n    //     const modChat=props.chats.map((cont,index)=>{\n    //         const receiver=cont.participants.filter(pid=>pid!=userId)\n    //         const name=getUserNameById(receiver);\n    //         return ({\"name\":name,\"chat\":cont.chat});\n    //     })\n    //     setProcessedChats(modChat);\n    //     console.log(modChat);\n    //   },[props.chats])\n    // import { useState, useEffect } from 'react';\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const pair = await getUserNameById(receiver);\n                    // console.log(profilePic)\n                    return {\n                        \"name\": pair.name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": pair.pic\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    processedChats.length > 0 && processedChats.map((cont, index)=>{\n                        //   const groupName=cont?.groupName;\n                        //   if(!groupName){\n                        //     const receiver=cont.participants.filter(pid=>pid!=userId)\n                        // const name=getUserNameById(receiver);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-orange-300\",\n                            onClick: ()=>props.selectContact(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    console.log(cont.profilePic),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: cont.profilePic,\n                                        width: 50,\n                                        height: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 28\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0w7QUFDTztBQUNnQjtBQUNmO0FBRWxDLDZCQUFlLG9DQUFVTSxLQUFLO0lBQzFCLHdDQUF3QztJQUN4QyxNQUFNQyxTQUFTRCxNQUFNQyxNQUFNO0lBRTNCLGVBQWVDLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0EsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVQLHVEQUFHQSxDQUFDRCx5Q0FBRUEsRUFBRSxTQUFTTztZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNUCwwREFBTUEsQ0FBQ007WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNsQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNMLFFBQVFNLEVBQUU7Z0JBQ3RCLE1BQU1BLEtBQUtOLFFBQVFNLEVBQUU7Z0JBQ3JCLE1BQU1DLE9BQU9MLFNBQVNLLElBQUk7Z0JBQzFCLE1BQU1DLE1BQU1OLFNBQVNPLGNBQWM7Z0JBQ25DLE1BQU1DLE9BQU87b0JBQUMsTUFBS0o7b0JBQUksUUFBUUM7b0JBQU0sT0FBT0M7Z0JBQUk7Z0JBQ2hESixRQUFRQyxHQUFHLENBQUNHO2dCQUNaLE9BQU9FO1lBQ1gsT0FBTztnQkFDSE4sUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtRQUNKLEVBQUUsT0FBT00sT0FBTztZQUNaUCxRQUFRTyxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNKO0lBQ0EsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHdkIscURBQWMsQ0FBQyxFQUFFO0lBQzdELG9CQUFvQjtJQUNwQixvREFBb0Q7SUFFcEQsb0VBQW9FO0lBQ3BFLGdEQUFnRDtJQUNoRCxtREFBbUQ7SUFDbkQsU0FBUztJQUNULGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLCtDQUErQztJQUcvQ0ksZ0RBQVNBLENBQUM7UUFDTixNQUFNcUIsY0FBYztZQUNoQixJQUFJO2dCQUNBLGtEQUFrRDtnQkFDbEQsTUFBTUMsZUFBZSxNQUFNQyxRQUFRQyxHQUFHLENBQ2xDdkIsTUFBTXdCLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLE9BQU9DO29CQUNuQixNQUFNQyxnQkFBZ0JELEtBQUtFLFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxDQUFBQSxNQUFPQSxRQUFRN0I7b0JBQzlELE1BQU1FLFdBQVd3QixhQUFhLENBQUMsRUFBRSxFQUFFLDZCQUE2QjtvQkFFaEUsNkRBQTZEO29CQUM3RCxNQUFNWixPQUFPLE1BQU1iLGdCQUFnQkM7b0JBQ25DLDBCQUEwQjtvQkFDMUIsT0FBTzt3QkFBRSxRQUFRWSxLQUFLSCxJQUFJO3dCQUFFLFFBQVFjLEtBQUtLLElBQUk7d0JBQUUsY0FBY2hCLEtBQUtGLEdBQUc7b0JBQUM7Z0JBQzFFO2dCQUdKLHVDQUF1QztnQkFDdkNLLGtCQUFrQkc7WUFDdEIsRUFBRSxPQUFPTCxPQUFPO2dCQUNaUCxRQUFRTyxLQUFLLENBQUMsMEJBQTBCQTtZQUM1QztRQUNKO1FBRUFJO0lBQ0osR0FBRztRQUFDcEIsTUFBTXdCLEtBQUs7UUFBRXZCO0tBQU87SUFDeEIscUJBQ0ksOERBQUMrQjtRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBTUQsV0FBVTt3QkFBMkJFLGFBQVk7Ozs7OztrQ0FDeEQsOERBQUNDO3dCQUFPSCxXQUFVO2tDQUFtRDs7Ozs7Ozs7Ozs7OzBCQUd6RSw4REFBQ0k7Z0JBQUdKLFdBQVU7O29CQUNUeEIsUUFBUUMsR0FBRyxDQUFDVixNQUFNd0IsS0FBSztvQkFDdkJQLGVBQWVxQixNQUFNLEdBQUcsS0FBS3JCLGVBQWVRLEdBQUcsQ0FBQyxDQUFDQyxNQUFNYTt3QkFDcEQscUNBQXFDO3dCQUNyQyxvQkFBb0I7d0JBQ3BCLGdFQUFnRTt3QkFDaEUsd0NBQXdDO3dCQUV4QyxxQkFBTyw4REFBQ0M7NEJBQWVQLFdBQVU7NEJBQW1DUSxTQUFTLElBQU16QyxNQUFNMEMsYUFBYSxDQUFDSDtzQ0FDbkcsNEVBQUNQO2dDQUFJQyxXQUFVOztvQ0FDVnhCLFFBQVFDLEdBQUcsQ0FBQ2dCLEtBQUtpQixVQUFVO2tEQUM1Qiw4REFBQ2pELGtEQUFLQTt3Q0FBQ3VDLFdBQVU7d0NBQWVXLEtBQUtsQixLQUFLaUIsVUFBVTt3Q0FBRUUsT0FBTzt3Q0FBSUMsUUFBUTt3Q0FBSUMsS0FBSTs7Ozs7O2tEQUVqRiw4REFBQ0M7d0NBQUdmLFdBQVU7a0RBQVdQLEtBQUtkLElBQUk7Ozs7Ozs7Ozs7OzsyQkFMMUIyQjs7Ozs7b0JBVXBCOzs7Ozs7Ozs7Ozs7O0FBT2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4P2RkNGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAvLyAgICBjb25zdCBtb2RBcnJheT1wcm9wcy5jb250YWN0Lm1hcCgpXG4gICAgY29uc3QgdXNlcklkID0gcHJvcHMudXNlcklkO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHVzZXJJZCBpbiB0aGUgXCJ1c2Vyc1wiIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZGIsIFwiVXNlcnNcIiwgcmVjZWl2ZXIpO1xuXG4gICAgICAgICAgICAvLyBGZXRjaCB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlclJlZik7XG5cbiAgICAgICAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBhbmQgcmV0dXJuIHRoZSB1c2VyJ3MgbmFtZSBmcm9tIHRoZSBkb2N1bWVudCBkYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRG9jLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHVzZXJEb2MuaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcGljID0gdXNlckRhdGEucHJvZmlsZVBpY3R1cmU7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IHtcImlkXCI6aWQsIFwibmFtZVwiOiBuYW1lLCBcInBpY1wiOiBwaWMgfTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaWMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhaXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCB1c2VyIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3Byb2Nlc3NlZENoYXRzLCBzZXRQcm9jZXNzZWRDaGF0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgLy8gICB1c2VFZmZlY3QoKCk9PntcbiAgICAvLyAgICAgY29uc3QgbW9kQ2hhdD1wcm9wcy5jaGF0cy5tYXAoKGNvbnQsaW5kZXgpPT57XG5cbiAgICAvLyAgICAgICAgIGNvbnN0IHJlY2VpdmVyPWNvbnQucGFydGljaXBhbnRzLmZpbHRlcihwaWQ9PnBpZCE9dXNlcklkKVxuICAgIC8vICAgICAgICAgY29uc3QgbmFtZT1nZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgIC8vICAgICAgICAgcmV0dXJuICh7XCJuYW1lXCI6bmFtZSxcImNoYXRcIjpjb250LmNoYXR9KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgc2V0UHJvY2Vzc2VkQ2hhdHMobW9kQ2hhdCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG1vZENoYXQpO1xuICAgIC8vICAgfSxbcHJvcHMuY2hhdHNdKVxuICAgIC8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGlmeUNoYXRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBVc2luZyBQcm9taXNlLmFsbCB0byBoYW5kbGUgYXN5bmMgbWFwIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDaGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGF0cy5tYXAoYXN5bmMgKGNvbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyQXJyYXkgPSBjb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkID0+IHBpZCAhPT0gdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyID0gcmVjZWl2ZXJBcnJheVswXTsgLy8gQXNzdW1pbmcgb25seSBvbmUgcmVjZWl2ZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgZ2V0VXNlck5hbWVCeUlkIGlzIGFzeW5jIGFuZCBmZXRjaGVzIHRoZSB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IGF3YWl0IGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9maWxlUGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgXCJuYW1lXCI6IHBhaXIubmFtZSwgXCJjaGF0XCI6IGNvbnQuY2hhdCwgXCJwcm9maWxlUGljXCI6IHBhaXIucGljIH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBtb2RpZmllZCBjaGF0c1xuICAgICAgICAgICAgICAgIHNldFByb2Nlc3NlZENoYXRzKHVwZGF0ZWRDaGF0cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtb2RpZnlpbmcgY2hhdHM6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBtb2RpZnlDaGF0cygpO1xuICAgIH0sIFtwcm9wcy5jaGF0cywgdXNlcklkXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCB3LTEvNCBwLTIgbS0xIGgtZnVsbCByb3VuZGVkLW1kXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHAtMSBtLTIgdy0zLzRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC0yIG0tMiByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtMzAwXCI+R288L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgXCIgPlxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5jaGF0cyl9XG4gICAgICAgICAgICAgICAge3Byb2Nlc3NlZENoYXRzLmxlbmd0aCA+IDAgJiYgcHJvY2Vzc2VkQ2hhdHMubWFwKChjb250LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IGdyb3VwTmFtZT1jb250Py5ncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYoIWdyb3VwTmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCByZWNlaXZlcj1jb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkPT5waWQhPXVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbmFtZT1nZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibS0yIHAtMSByb3VuZGVkLW1kIGJnLW9yYW5nZS0zMDBcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZWxlY3RDb250YWN0KGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGNvbnQucHJvZmlsZVBpYyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz17Y29udC5wcm9maWxlUGljfSB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD1cIlByb2ZpbGVcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGxcIj57Y29udC5uYW1lfTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgey8qIDxsaSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcIkNvbnRhY3QgMSBjbGlja2VkXCIpfT5Db250YWN0IDE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Db250YWN0IDI8L2xpPiAqL31cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiZGIiLCJkb2MiLCJnZXREb2MiLCJ1c2VFZmZlY3QiLCJwcm9wcyIsInVzZXJJZCIsImdldFVzZXJOYW1lQnlJZCIsInJlY2VpdmVyIiwidXNlclJlZiIsInVzZXJEb2MiLCJleGlzdHMiLCJ1c2VyRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJuYW1lIiwicGljIiwicHJvZmlsZVBpY3R1cmUiLCJwYWlyIiwiZXJyb3IiLCJwcm9jZXNzZWRDaGF0cyIsInNldFByb2Nlc3NlZENoYXRzIiwidXNlU3RhdGUiLCJtb2RpZnlDaGF0cyIsInVwZGF0ZWRDaGF0cyIsIlByb21pc2UiLCJhbGwiLCJjaGF0cyIsIm1hcCIsImNvbnQiLCJyZWNlaXZlckFycmF5IiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGlkIiwiY2hhdCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ1bCIsImxlbmd0aCIsImluZGV4IiwibGkiLCJvbkNsaWNrIiwic2VsZWN0Q29udGFjdCIsInByb2ZpbGVQaWMiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});