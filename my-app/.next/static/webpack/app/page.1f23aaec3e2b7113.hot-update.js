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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userDoc.id;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"id\": id,\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    //   useEffect(()=>{\n    //     const modChat=props.chats.map((cont,index)=>{\n    //         const receiver=cont.participants.filter(pid=>pid!=userId)\n    //         const name=getUserNameById(receiver);\n    //         return ({\"name\":name,\"chat\":cont.chat});\n    //     })\n    //     setProcessedChats(modChat);\n    //     console.log(modChat);\n    //   },[props.chats])\n    // import { useState, useEffect } from 'react';\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const id = cont.chatId;\n                    const receiverArray = cont.data.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const pair = await getUserNameById(receiver);\n                    // console.log(profilePic)\n                    return {\n                        \"id\": pair.id,\n                        \"name\": pair.name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": pair.pic,\n                        \"chatId\": id\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    function handleSubmit(e) {\n        console.log(search);\n        setSearch(\"\");\n    }\n    function handleKeyDown(e) {\n        if (e.key == \"Enter\") handleSubmit();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-orange-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        name: \"search\",\n                        value: search,\n                        label: \"Search\",\n                        onChange: (e)=>setSearch(e.target.value),\n                        onKeyDown: handleKeyDown,\n                        className: \"rounded-md p-1 m-2 w-3/4 bg-white\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around m-2 p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-white rounded-md p-1\",\n                        children: \" New Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-white rounded-md p-1\",\n                        children: \" New Group\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    processedChats.length > 0 && processedChats.map((cont, index)=>{\n                        //   const groupName=cont?.groupName;\n                        //   if(!groupName){\n                        //     const receiver=cont.participants.filter(pid=>pid!=userId)\n                        // const name=getUserNameById(receiver);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-slate-900 text-orange-400\",\n                            onClick: ()=>props.selectContact(cont.id, cont.chatId),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex start justify-around max-h-10 \",\n                                children: [\n                                    console.log(cont.profilePic),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: cont.profilePic,\n                                        height: 50,\n                                        width: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 25\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 28\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNMO0FBQ087QUFDZ0I7QUFDZjtBQUNnQjtBQUVsRCw2QkFBZSxvQ0FBVVEsS0FBSztJQUMxQix3Q0FBd0M7SUFDeEMsTUFBTUMsU0FBU0QsTUFBTUMsTUFBTTtJQUUzQixlQUFlQyxnQkFBZ0JDLFFBQVE7UUFDbkMsSUFBSTtZQUNBLDRFQUE0RTtZQUM1RSxNQUFNQyxVQUFVVCx1REFBR0EsQ0FBQ0QseUNBQUVBLEVBQUUsU0FBU1M7WUFFakMscUJBQXFCO1lBQ3JCLE1BQU1FLFVBQVUsTUFBTVQsMERBQU1BLENBQUNRO1lBRTdCLElBQUlDLFFBQVFDLE1BQU0sSUFBSTtnQkFDbEIsNERBQTREO2dCQUM1RCxNQUFNQyxXQUFXRixRQUFRRyxJQUFJO2dCQUM3QkMsUUFBUUMsR0FBRyxDQUFDTCxRQUFRTSxFQUFFO2dCQUN0QixNQUFNQSxLQUFLTixRQUFRTSxFQUFFO2dCQUNyQixNQUFNQyxPQUFPTCxTQUFTSyxJQUFJO2dCQUMxQixNQUFNQyxNQUFNTixTQUFTTyxjQUFjO2dCQUNuQyxNQUFNQyxPQUFPO29CQUFDLE1BQUtKO29CQUFJLFFBQVFDO29CQUFNLE9BQU9DO2dCQUFJO2dCQUNoREosUUFBUUMsR0FBRyxDQUFDRztnQkFDWixPQUFPRTtZQUNYLE9BQU87Z0JBQ0hOLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixPQUFPO1lBQ1g7UUFDSixFQUFFLE9BQU9NLE9BQU87WUFDWlAsUUFBUU8sS0FBSyxDQUFDLHdCQUF3QkE7UUFDMUM7SUFDSjtJQUNBLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR3pCLHFEQUFjLENBQUMsRUFBRTtJQUM3RCxvQkFBb0I7SUFDcEIsb0RBQW9EO0lBRXBELG9FQUFvRTtJQUNwRSxnREFBZ0Q7SUFDaEQsbURBQW1EO0lBQ25ELFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwrQ0FBK0M7SUFHL0NJLGdEQUFTQSxDQUFDO1FBQ04sTUFBTXVCLGNBQWM7WUFDaEIsSUFBSTtnQkFDQSxrREFBa0Q7Z0JBQ2xELE1BQU1DLGVBQWUsTUFBTUMsUUFBUUMsR0FBRyxDQUNsQ3ZCLE1BQU13QixLQUFLLENBQUNDLEdBQUcsQ0FBQyxPQUFPQztvQkFDbkIsTUFBTWYsS0FBR2UsS0FBS0MsTUFBTTtvQkFDcEIsTUFBTUMsZ0JBQWdCRixLQUFLbEIsSUFBSSxDQUFDcUIsWUFBWSxDQUFDQyxNQUFNLENBQUNDLENBQUFBLE1BQU9BLFFBQVE5QjtvQkFDbkUsTUFBTUUsV0FBV3lCLGFBQWEsQ0FBQyxFQUFFLEVBQUUsNkJBQTZCO29CQUVoRSw2REFBNkQ7b0JBQzdELE1BQU1iLE9BQU8sTUFBTWIsZ0JBQWdCQztvQkFDbkMsMEJBQTBCO29CQUMxQixPQUFPO3dCQUFFLE1BQUtZLEtBQUtKLEVBQUU7d0JBQUMsUUFBUUksS0FBS0gsSUFBSTt3QkFBRSxRQUFRYyxLQUFLTSxJQUFJO3dCQUFFLGNBQWNqQixLQUFLRixHQUFHO3dCQUFFLFVBQVNGO29CQUFFO2dCQUNuRztnQkFHSix1Q0FBdUM7Z0JBQ3ZDTyxrQkFBa0JHO1lBQ3RCLEVBQUUsT0FBT0wsT0FBTztnQkFDWlAsUUFBUU8sS0FBSyxDQUFDLDBCQUEwQkE7WUFDNUM7UUFDSjtRQUVBSTtJQUNKLEdBQUc7UUFBQ3BCLE1BQU13QixLQUFLO1FBQUV2QjtLQUFPO0lBQ3hCLE1BQU0sQ0FBQ2dDLFFBQU9DLFVBQVUsR0FBQ3pDLHFEQUFjLENBQUM7SUFDeEMsU0FBUzBDLGFBQWFDLENBQUM7UUFFbkIzQixRQUFRQyxHQUFHLENBQUN1QjtRQUNaQyxVQUFVO0lBRWQ7SUFDQSxTQUFTRyxjQUFjRCxDQUFDO1FBQ3BCLElBQUdBLEVBQUVFLEdBQUcsSUFBRSxTQUNOSDtJQUNSO0lBQ0EscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUN6Qyw0RkFBU0E7d0JBQ1ZhLE1BQUs7d0JBQ0w2QixPQUFPUjt3QkFDUFMsT0FBTTt3QkFDTkMsVUFBVSxDQUFDUCxJQUFJRixVQUFVRSxFQUFFUSxNQUFNLENBQUNILEtBQUs7d0JBQ3ZDSSxXQUFXUjt3QkFDWEcsV0FBVTt3QkFDVE0sYUFBWTs7Ozs7O2tDQUNiLDhEQUFDQzt3QkFBT1AsV0FBVTtrQ0FBbUQ7Ozs7Ozs7Ozs7OzswQkFHekUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ087d0JBQU9QLFdBQVU7a0NBQTBCOzs7Ozs7a0NBQzVDLDhEQUFDTzt3QkFBT1AsV0FBVTtrQ0FBMEI7Ozs7Ozs7Ozs7OzswQkFFaEQsOERBQUNRO2dCQUFHUixXQUFVOztvQkFDVC9CLFFBQVFDLEdBQUcsQ0FBQ1YsTUFBTXdCLEtBQUs7b0JBQ3ZCUCxlQUFlZ0MsTUFBTSxHQUFHLEtBQUtoQyxlQUFlUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTXdCO3dCQUNwRCxxQ0FBcUM7d0JBQ3JDLG9CQUFvQjt3QkFDcEIsZ0VBQWdFO3dCQUNoRSx3Q0FBd0M7d0JBRXhDLHFCQUFPLDhEQUFDQzs0QkFBZVgsV0FBVTs0QkFBa0RZLFNBQVMsSUFBTXBELE1BQU1xRCxhQUFhLENBQUMzQixLQUFLZixFQUFFLEVBQUNlLEtBQUtDLE1BQU07c0NBQ3JJLDRFQUFDWTtnQ0FBSUMsV0FBVTs7b0NBQ1YvQixRQUFRQyxHQUFHLENBQUNnQixLQUFLNEIsVUFBVTtrREFDNUIsOERBQUM5RCxrREFBS0E7d0NBQUNnRCxXQUFVO3dDQUFlZSxLQUFLN0IsS0FBSzRCLFVBQVU7d0NBQUdFLFFBQVE7d0NBQUlDLE9BQU87d0NBQUlDLEtBQUk7Ozs7OztrREFFbEYsOERBQUNDO3dDQUFHbkIsV0FBVTtrREFBV2QsS0FBS2QsSUFBSTs7Ozs7Ozs7Ozs7OzJCQUwxQnNDOzs7OztvQkFVcEI7Ozs7Ozs7Ozs7Ozs7QUFPaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci5qc3g/ZGQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIC8vICAgIGNvbnN0IG1vZEFycmF5PXByb3BzLmNvbnRhY3QubWFwKClcbiAgICBjb25zdCB1c2VySWQgPSBwcm9wcy51c2VySWQ7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gdXNlcklkIGluIHRoZSBcInVzZXJzXCIgY29sbGVjdGlvblxuICAgICAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgXCJVc2Vyc1wiLCByZWNlaXZlcik7XG5cbiAgICAgICAgICAgIC8vIEZldGNoIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGdldERvYyh1c2VyUmVmKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJEb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGFuZCByZXR1cm4gdGhlIHVzZXIncyBuYW1lIGZyb20gdGhlIGRvY3VtZW50IGRhdGFcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJEb2MuZGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEb2MuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdXNlckRvYy5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdXNlckRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaWMgPSB1c2VyRGF0YS5wcm9maWxlUGljdHVyZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0ge1wiaWRcIjppZCwgXCJuYW1lXCI6IG5hbWUsIFwicGljXCI6IHBpYyB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBpYylcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFpcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIHVzZXIhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXI6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbcHJvY2Vzc2VkQ2hhdHMsIHNldFByb2Nlc3NlZENoYXRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgICAvLyAgIHVzZUVmZmVjdCgoKT0+e1xuICAgIC8vICAgICBjb25zdCBtb2RDaGF0PXByb3BzLmNoYXRzLm1hcCgoY29udCxpbmRleCk9PntcblxuICAgIC8vICAgICAgICAgY29uc3QgcmVjZWl2ZXI9Y29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZD0+cGlkIT11c2VySWQpXG4gICAgLy8gICAgICAgICBjb25zdCBuYW1lPWdldFVzZXJOYW1lQnlJZChyZWNlaXZlcik7XG4gICAgLy8gICAgICAgICByZXR1cm4gKHtcIm5hbWVcIjpuYW1lLFwiY2hhdFwiOmNvbnQuY2hhdH0pO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICBzZXRQcm9jZXNzZWRDaGF0cyhtb2RDaGF0KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cobW9kQ2hhdCk7XG4gICAgLy8gICB9LFtwcm9wcy5jaGF0c10pXG4gICAgLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kaWZ5Q2hhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIFVzaW5nIFByb21pc2UuYWxsIHRvIGhhbmRsZSBhc3luYyBtYXAgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZENoYXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoYXRzLm1hcChhc3luYyAoY29udCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQ9Y29udC5jaGF0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlckFycmF5ID0gY29udC5kYXRhLnBhcnRpY2lwYW50cy5maWx0ZXIocGlkID0+IHBpZCAhPT0gdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyID0gcmVjZWl2ZXJBcnJheVswXTsgLy8gQXNzdW1pbmcgb25seSBvbmUgcmVjZWl2ZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgZ2V0VXNlck5hbWVCeUlkIGlzIGFzeW5jIGFuZCBmZXRjaGVzIHRoZSB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IGF3YWl0IGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9maWxlUGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgXCJpZFwiOnBhaXIuaWQsXCJuYW1lXCI6IHBhaXIubmFtZSwgXCJjaGF0XCI6IGNvbnQuY2hhdCwgXCJwcm9maWxlUGljXCI6IHBhaXIucGljICxcImNoYXRJZFwiOmlkfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIG1vZGlmaWVkIGNoYXRzXG4gICAgICAgICAgICAgICAgc2V0UHJvY2Vzc2VkQ2hhdHModXBkYXRlZENoYXRzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1vZGlmeWluZyBjaGF0czpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGlmeUNoYXRzKCk7XG4gICAgfSwgW3Byb3BzLmNoYXRzLCB1c2VySWRdKTtcbiAgICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF09UmVhY3QudXNlU3RhdGUoXCJcIik7XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuICAgICAgICBzZXRTZWFyY2goXCJcIik7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYoZS5rZXk9PVwiRW50ZXJcIilcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW9yYW5nZS00MDAgdy0xLzQgcC0yIG0tMSBoLWZ1bGwgcm91bmRlZC1tZFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgcC0xIG0tMiB3LTMvNCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMiBtLTIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTMwMFwiPkdvPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIG0tMiBwLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcC0xXCI+IE5ldyBDaGF0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHAtMVwiPiBOZXcgR3JvdXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIFwiID5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMuY2hhdHMpfVxuICAgICAgICAgICAgICAgIHtwcm9jZXNzZWRDaGF0cy5sZW5ndGggPiAwICYmIHByb2Nlc3NlZENoYXRzLm1hcCgoY29udCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBncm91cE5hbWU9Y29udD8uZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmKCFncm91cE5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcmVjZWl2ZXI9Y29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZD0+cGlkIT11c2VySWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5hbWU9Z2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm0tMiBwLTEgcm91bmRlZC1tZCBiZy1zbGF0ZS05MDAgdGV4dC1vcmFuZ2UtNDAwXCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2VsZWN0Q29udGFjdChjb250LmlkLGNvbnQuY2hhdElkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3RhcnQganVzdGlmeS1hcm91bmQgbWF4LWgtMTAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGNvbnQucHJvZmlsZVBpYyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz17Y29udC5wcm9maWxlUGljfSAgaGVpZ2h0PXs1MH0gd2lkdGg9ezUwfSBhbHQ9XCJQcm9maWxlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e2NvbnQubmFtZX08L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDb250YWN0IDEgY2xpY2tlZFwiKX0+Q29udGFjdCAxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCAyPC9saT4gKi99XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsImRiIiwiZG9jIiwiZ2V0RG9jIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwicHJvcHMiLCJ1c2VySWQiLCJnZXRVc2VyTmFtZUJ5SWQiLCJyZWNlaXZlciIsInVzZXJSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwidXNlckRhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInBpYyIsInByb2ZpbGVQaWN0dXJlIiwicGFpciIsImVycm9yIiwicHJvY2Vzc2VkQ2hhdHMiLCJzZXRQcm9jZXNzZWRDaGF0cyIsInVzZVN0YXRlIiwibW9kaWZ5Q2hhdHMiLCJ1cGRhdGVkQ2hhdHMiLCJQcm9taXNlIiwiYWxsIiwiY2hhdHMiLCJtYXAiLCJjb250IiwiY2hhdElkIiwicmVjZWl2ZXJBcnJheSIsInBhcnRpY2lwYW50cyIsImZpbHRlciIsInBpZCIsImNoYXQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTdWJtaXQiLCJlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsInZhbHVlIiwibGFiZWwiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5RG93biIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidWwiLCJsZW5ndGgiLCJpbmRleCIsImxpIiwib25DbGljayIsInNlbGVjdENvbnRhY3QiLCJwcm9maWxlUGljIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});