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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                return userData.name, userData.profilePicture;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    //   useEffect(()=>{\n    //     const modChat=props.chats.map((cont,index)=>{\n    //         const receiver=cont.participants.filter(pid=>pid!=userId)\n    //         const name=getUserNameById(receiver);\n    //         return ({\"name\":name,\"chat\":cont.chat});\n    //     })\n    //     setProcessedChats(modChat);\n    //     console.log(modChat);\n    //   },[props.chats])\n    // import { useState, useEffect } from 'react';\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const { name, profilePic } = await getUserNameById(receiver);\n                    return {\n                        \"name\": name,\n                        \"chat\": cont.chat,\n                        profile\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md p-1 m-2 w-3/4\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    processedChats.length > 0 && processedChats.map((cont, index)=>{\n                        //   const groupName=cont?.groupName;\n                        //   if(!groupName){\n                        //     const receiver=cont.participants.filter(pid=>pid!=userId)\n                        // const name=getUserNameById(receiver);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-orange-300\",\n                            onClick: ()=>props.selectContact(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: \"/image4.jpg\",\n                                        width: 50,\n                                        height: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 22\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 27\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0w7QUFDTztBQUNnQjtBQUNmO0FBRWxDLDZCQUFlLG9DQUFTTSxLQUFLO0lBQzdCLHdDQUF3QztJQUNwQyxNQUFNQyxTQUFPRCxNQUFNQyxNQUFNO0lBRXpCLGVBQWVDLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0YsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVQLHVEQUFHQSxDQUFDRCx5Q0FBRUEsRUFBRSxTQUFTTztZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNUCwwREFBTUEsQ0FBQ007WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNwQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCLE9BQU9ELFNBQVNFLElBQUksRUFBQ0YsU0FBU0csY0FBYztZQUM5QyxPQUFPO2dCQUNMQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osT0FBTztZQUNUO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFDQSxNQUFNLENBQUNDLGdCQUFlQyxrQkFBa0IsR0FBQ3BCLHFEQUFjLENBQUMsRUFBRTtJQUM1RCxvQkFBb0I7SUFDcEIsb0RBQW9EO0lBRXBELG9FQUFvRTtJQUNwRSxnREFBZ0Q7SUFDaEQsbURBQW1EO0lBQ25ELFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwrQ0FBK0M7SUFHakRJLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtCLGNBQWM7WUFDbEIsSUFBSTtnQkFDRixrREFBa0Q7Z0JBQ2xELE1BQU1DLGVBQWUsTUFBTUMsUUFBUUMsR0FBRyxDQUNwQ3BCLE1BQU1xQixLQUFLLENBQUNDLEdBQUcsQ0FBQyxPQUFPQztvQkFDckIsTUFBTUMsZ0JBQWdCRCxLQUFLRSxZQUFZLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQUEsTUFBT0EsUUFBUTFCO29CQUM5RCxNQUFNRSxXQUFXcUIsYUFBYSxDQUFDLEVBQUUsRUFBRSw2QkFBNkI7b0JBRWhFLDZEQUE2RDtvQkFDN0QsTUFBTSxFQUFDZixJQUFJLEVBQUNtQixVQUFVLEVBQUMsR0FBRyxNQUFNMUIsZ0JBQWdCQztvQkFFaEQsT0FBTzt3QkFBRSxRQUFRTTt3QkFBTSxRQUFRYyxLQUFLTSxJQUFJO3dCQUFFQztvQkFBTztnQkFDbkQ7Z0JBR0YsdUNBQXVDO2dCQUN2Q2Ysa0JBQWtCRztZQUNwQixFQUFFLE9BQU9MLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQywwQkFBMEJBO1lBQzFDO1FBQ0Y7UUFFQUk7SUFDRixHQUFHO1FBQUNqQixNQUFNcUIsS0FBSztRQUFFcEI7S0FBTztJQUN0QixxQkFDSSw4REFBQzhCO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNRCxXQUFVO3dCQUEyQkUsYUFBWTs7Ozs7O2tDQUN4RCw4REFBQ0M7d0JBQU9ILFdBQVU7a0NBQW1EOzs7Ozs7Ozs7Ozs7MEJBR3pFLDhEQUFDSTtnQkFBR0osV0FBVTs7b0JBQ1RyQixRQUFRQyxHQUFHLENBQUNaLE1BQU1xQixLQUFLO29CQUN2QlAsZUFBZXVCLE1BQU0sR0FBQyxLQUFNdkIsZUFBZVEsR0FBRyxDQUFDLENBQUNDLE1BQUtlO3dCQUN0RCxxQ0FBcUM7d0JBQ3JDLG9CQUFvQjt3QkFDcEIsZ0VBQWdFO3dCQUM1RCx3Q0FBd0M7d0JBRTFDLHFCQUFRLDhEQUFDQzs0QkFBZ0JQLFdBQVU7NEJBQW1DUSxTQUFTLElBQUl4QyxNQUFNeUMsYUFBYSxDQUFDSDtzQ0FDckcsNEVBQUNQO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ3RDLGtEQUFLQTt3Q0FBRXNDLFdBQVU7d0NBQWVVLEtBQUk7d0NBQWNDLE9BQU87d0NBQUlDLFFBQVE7d0NBQUlDLEtBQUk7Ozs7OztrREFFL0UsOERBQUNDO3dDQUFHZCxXQUFVO2tEQUFXVCxLQUFLZCxJQUFJOzs7Ozs7Ozs7Ozs7MkJBSm5CNkI7Ozs7O29CQVNuQjs7Ozs7Ozs7Ozs7OztBQU9oQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zaWRlYmFyLmpzeD9kZDRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvcHMpe1xuLy8gICAgY29uc3QgbW9kQXJyYXk9cHJvcHMuY29udGFjdC5tYXAoKVxuICAgIGNvbnN0IHVzZXJJZD1wcm9wcy51c2VySWQ7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHVzZXJJZCBpbiB0aGUgXCJ1c2Vyc1wiIGNvbGxlY3Rpb25cbiAgICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCBcIlVzZXJzXCIsIHJlY2VpdmVyKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBGZXRjaCB0aGUgZG9jdW1lbnRcbiAgICAgICAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0RG9jKHVzZXJSZWYpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAvLyBFeHRyYWN0IGFuZCByZXR1cm4gdGhlIHVzZXIncyBuYW1lIGZyb20gdGhlIGRvY3VtZW50IGRhdGFcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlckRvYy5kYXRhKCk7XG4gICAgICAgICAgICByZXR1cm4gdXNlckRhdGEubmFtZSx1c2VyRGF0YS5wcm9maWxlUGljdHVyZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIHVzZXIhXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IFtwcm9jZXNzZWRDaGF0cyxzZXRQcm9jZXNzZWRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pO1xuICAgIC8vICAgdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gICAgIGNvbnN0IG1vZENoYXQ9cHJvcHMuY2hhdHMubWFwKChjb250LGluZGV4KT0+e1xuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICBjb25zdCByZWNlaXZlcj1jb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkPT5waWQhPXVzZXJJZClcbiAgICAvLyAgICAgICAgIGNvbnN0IG5hbWU9Z2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcbiAgICAvLyAgICAgICAgIHJldHVybiAoe1wibmFtZVwiOm5hbWUsXCJjaGF0XCI6Y29udC5jaGF0fSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHNldFByb2Nlc3NlZENoYXRzKG1vZENoYXQpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhtb2RDaGF0KTtcbiAgICAvLyAgIH0sW3Byb3BzLmNoYXRzXSlcbiAgICAvLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb2RpZnlDaGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFVzaW5nIFByb21pc2UuYWxsIHRvIGhhbmRsZSBhc3luYyBtYXAgb3BlcmF0aW9uXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDaGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIHByb3BzLmNoYXRzLm1hcChhc3luYyAoY29udCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZXJBcnJheSA9IGNvbnQucGFydGljaXBhbnRzLmZpbHRlcihwaWQgPT4gcGlkICE9PSB1c2VySWQpO1xuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZXIgPSByZWNlaXZlckFycmF5WzBdOyAvLyBBc3N1bWluZyBvbmx5IG9uZSByZWNlaXZlclxuXG4gICAgICAgICAgICAvLyBBc3N1bWluZyBnZXRVc2VyTmFtZUJ5SWQgaXMgYXN5bmMgYW5kIGZldGNoZXMgdGhlIHVzZXJuYW1lXG4gICAgICAgICAgICBjb25zdCB7bmFtZSxwcm9maWxlUGljfSA9IGF3YWl0IGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcik7XG5cbiAgICAgICAgICAgIHJldHVybiB7IFwibmFtZVwiOiBuYW1lLCBcImNoYXRcIjogY29udC5jaGF0ICxwcm9maWxlfTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIG1vZGlmaWVkIGNoYXRzXG4gICAgICAgIHNldFByb2Nlc3NlZENoYXRzKHVwZGF0ZWRDaGF0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW9kaWZ5aW5nIGNoYXRzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1vZGlmeUNoYXRzKCk7XG4gIH0sIFtwcm9wcy5jaGF0cywgdXNlcklkXSk7IFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCB3LTEvNCBwLTIgbS0xIGgtZnVsbCByb3VuZGVkLW1kXCI+XG4gICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHAtMSBtLTIgdy0zLzRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC0yIG0tMiByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtMzAwXCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIFwiID5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMuY2hhdHMpfVxuICAgICAgICAgICAgICAgIHtwcm9jZXNzZWRDaGF0cy5sZW5ndGg+MCAmJiAgcHJvY2Vzc2VkQ2hhdHMubWFwKChjb250LGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIC8vICAgY29uc3QgZ3JvdXBOYW1lPWNvbnQ/Lmdyb3VwTmFtZTtcbiAgICAgICAgICAgICAgICAvLyAgIGlmKCFncm91cE5hbWUpe1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCByZWNlaXZlcj1jb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkPT5waWQhPXVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbmFtZT1nZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICByZXR1cm4gIDxsaSBrZXk9e2luZGV4fSAgY2xhc3NOYW1lPVwibS0yIHAtMSByb3VuZGVkLW1kIGJnLW9yYW5nZS0zMDBcIiBvbkNsaWNrPXsoKT0+cHJvcHMuc2VsZWN0Q29udGFjdChpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz1cIi9pbWFnZTQuanBnXCIgd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJQcm9maWxlXCIvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGxcIj57Y29udC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDb250YWN0IDEgY2xpY2tlZFwiKX0+Q29udGFjdCAxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCAyPC9saT4gKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJkYiIsImRvYyIsImdldERvYyIsInVzZUVmZmVjdCIsInByb3BzIiwidXNlcklkIiwiZ2V0VXNlck5hbWVCeUlkIiwicmVjZWl2ZXIiLCJ1c2VyUmVmIiwidXNlckRvYyIsImV4aXN0cyIsInVzZXJEYXRhIiwiZGF0YSIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByb2Nlc3NlZENoYXRzIiwic2V0UHJvY2Vzc2VkQ2hhdHMiLCJ1c2VTdGF0ZSIsIm1vZGlmeUNoYXRzIiwidXBkYXRlZENoYXRzIiwiUHJvbWlzZSIsImFsbCIsImNoYXRzIiwibWFwIiwiY29udCIsInJlY2VpdmVyQXJyYXkiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwaWQiLCJwcm9maWxlUGljIiwiY2hhdCIsInByb2ZpbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidWwiLCJsZW5ndGgiLCJpbmRleCIsImxpIiwib25DbGljayIsInNlbGVjdENvbnRhY3QiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});