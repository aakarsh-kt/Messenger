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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    //    const modArray=props.contact.map()\n    const userId = props.userId;\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userDoc.id;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"id\": id,\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    //   useEffect(()=>{\n    //     const modChat=props.chats.map((cont,index)=>{\n    //         const receiver=cont.participants.filter(pid=>pid!=userId)\n    //         const name=getUserNameById(receiver);\n    //         return ({\"name\":name,\"chat\":cont.chat});\n    //     })\n    //     setProcessedChats(modChat);\n    //     console.log(modChat);\n    //   },[props.chats])\n    // import { useState, useEffect } from 'react';\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const id = cont.chatId;\n                    const receiverArray = cont.data.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const pair = await getUserNameById(receiver);\n                    // console.log(profilePic)\n                    return {\n                        \"id\": pair.id,\n                        \"name\": pair.name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": pair.pic,\n                        \"chatId\": id\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        userId\n    ]);\n    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    function handleSubmit(e) {\n        console.log(search);\n        setSearch(\"\");\n    }\n    function handleKeyDown(e) {\n        if (e.key == \"Enter\") handleSubmit();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        name: \"search\",\n                        value: search,\n                        label: \"Search\",\n                        onChange: (e)=>setSearch(e.target.value),\n                        onKeyDown: handleKeyDown,\n                        className: \"rounded-md p-1 m-2 w-3/4 bg-white\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\",\n                        children: \"Go\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"bg-white\",\n                        children: \" New Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"bg-white\",\n                        children: \" New Group\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"cursor-pointer \",\n                children: [\n                    console.log(props.chats),\n                    processedChats.length > 0 && processedChats.map((cont, index)=>{\n                        //   const groupName=cont?.groupName;\n                        //   if(!groupName){\n                        //     const receiver=cont.participants.filter(pid=>pid!=userId)\n                        // const name=getUserNameById(receiver);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-2 p-1 rounded-md bg-orange-300\",\n                            onClick: ()=>props.selectContact(cont.id, cont.chatId),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between max-h-10 \",\n                                children: [\n                                    console.log(cont.profilePic),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        className: \"rounded-full\",\n                                        src: cont.profilePic,\n                                        height: 50,\n                                        width: 50,\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl\",\n                                        children: cont.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 25\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 28\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/sidebar.jsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDTDtBQUNPO0FBQ2dCO0FBQ2Y7QUFDZ0I7QUFFbEQsNkJBQWUsb0NBQVVRLEtBQUs7SUFDMUIsd0NBQXdDO0lBQ3hDLE1BQU1DLFNBQVNELE1BQU1DLE1BQU07SUFFM0IsZUFBZUMsZ0JBQWdCQyxRQUFRO1FBQ25DLElBQUk7WUFDQSw0RUFBNEU7WUFDNUUsTUFBTUMsVUFBVVQsdURBQUdBLENBQUNELHlDQUFFQSxFQUFFLFNBQVNTO1lBRWpDLHFCQUFxQjtZQUNyQixNQUFNRSxVQUFVLE1BQU1ULDBEQUFNQSxDQUFDUTtZQUU3QixJQUFJQyxRQUFRQyxNQUFNLElBQUk7Z0JBQ2xCLDREQUE0RDtnQkFDNUQsTUFBTUMsV0FBV0YsUUFBUUcsSUFBSTtnQkFDN0JDLFFBQVFDLEdBQUcsQ0FBQ0wsUUFBUU0sRUFBRTtnQkFDdEIsTUFBTUEsS0FBS04sUUFBUU0sRUFBRTtnQkFDckIsTUFBTUMsT0FBT0wsU0FBU0ssSUFBSTtnQkFDMUIsTUFBTUMsTUFBTU4sU0FBU08sY0FBYztnQkFDbkMsTUFBTUMsT0FBTztvQkFBQyxNQUFLSjtvQkFBSSxRQUFRQztvQkFBTSxPQUFPQztnQkFBSTtnQkFDaERKLFFBQVFDLEdBQUcsQ0FBQ0c7Z0JBQ1osT0FBT0U7WUFDWCxPQUFPO2dCQUNITixRQUFRQyxHQUFHLENBQUM7Z0JBQ1osT0FBTztZQUNYO1FBQ0osRUFBRSxPQUFPTSxPQUFPO1lBQ1pQLFFBQVFPLEtBQUssQ0FBQyx3QkFBd0JBO1FBQzFDO0lBQ0o7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUd6QixxREFBYyxDQUFDLEVBQUU7SUFDN0Qsb0JBQW9CO0lBQ3BCLG9EQUFvRDtJQUVwRCxvRUFBb0U7SUFDcEUsZ0RBQWdEO0lBQ2hELG1EQUFtRDtJQUNuRCxTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLDRCQUE0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eD9kZDRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgLy8gICAgY29uc3QgbW9kQXJyYXk9cHJvcHMuY29udGFjdC5tYXAoKVxuICAgIGNvbnN0IHVzZXJJZCA9IHByb3BzLnVzZXJJZDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCB3aXRoIHRoZSBnaXZlbiB1c2VySWQgaW4gdGhlIFwidXNlcnNcIiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCBcIlVzZXJzXCIsIHJlY2VpdmVyKTtcblxuICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIGRvY3VtZW50XG4gICAgICAgICAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0RG9jKHVzZXJSZWYpO1xuXG4gICAgICAgICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgYW5kIHJldHVybiB0aGUgdXNlcidzIG5hbWUgZnJvbSB0aGUgZG9jdW1lbnQgZGF0YVxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlckRvYy5kYXRhKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRvYy5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB1c2VyRG9jLmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB1c2VyRGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpYyA9IHVzZXJEYXRhLnByb2ZpbGVQaWN0dXJlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSB7XCJpZFwiOmlkLCBcIm5hbWVcIjogbmFtZSwgXCJwaWNcIjogcGljIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGljKVxuICAgICAgICAgICAgICAgIHJldHVybiBwYWlyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggdXNlciFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtwcm9jZXNzZWRDaGF0cywgc2V0UHJvY2Vzc2VkQ2hhdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICAgIC8vICAgdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gICAgIGNvbnN0IG1vZENoYXQ9cHJvcHMuY2hhdHMubWFwKChjb250LGluZGV4KT0+e1xuXG4gICAgLy8gICAgICAgICBjb25zdCByZWNlaXZlcj1jb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkPT5waWQhPXVzZXJJZClcbiAgICAvLyAgICAgICAgIGNvbnN0IG5hbWU9Z2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcbiAgICAvLyAgICAgICAgIHJldHVybiAoe1wibmFtZVwiOm5hbWUsXCJjaGF0XCI6Y29udC5jaGF0fSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHNldFByb2Nlc3NlZENoYXRzKG1vZENoYXQpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhtb2RDaGF0KTtcbiAgICAvLyAgIH0sW3Byb3BzLmNoYXRzXSlcbiAgICAvLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RpZnlDaGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gVXNpbmcgUHJvbWlzZS5hbGwgdG8gaGFuZGxlIGFzeW5jIG1hcCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2hhdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hhdHMubWFwKGFzeW5jIChjb250KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZD1jb250LmNoYXRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyQXJyYXkgPSBjb250LmRhdGEucGFydGljaXBhbnRzLmZpbHRlcihwaWQgPT4gcGlkICE9PSB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjZWl2ZXIgPSByZWNlaXZlckFycmF5WzBdOyAvLyBBc3N1bWluZyBvbmx5IG9uZSByZWNlaXZlclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBnZXRVc2VyTmFtZUJ5SWQgaXMgYXN5bmMgYW5kIGZldGNoZXMgdGhlIHVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0gYXdhaXQgZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2ZpbGVQaWMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBcImlkXCI6cGFpci5pZCxcIm5hbWVcIjogcGFpci5uYW1lLCBcImNoYXRcIjogY29udC5jaGF0LCBcInByb2ZpbGVQaWNcIjogcGFpci5waWMgLFwiY2hhdElkXCI6aWR9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbW9kaWZpZWQgY2hhdHNcbiAgICAgICAgICAgICAgICBzZXRQcm9jZXNzZWRDaGF0cyh1cGRhdGVkQ2hhdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW9kaWZ5aW5nIGNoYXRzOlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kaWZ5Q2hhdHMoKTtcbiAgICB9LCBbcHJvcHMuY2hhdHMsIHVzZXJJZF0pO1xuICAgIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXT1SZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaCk7XG4gICAgICAgIHNldFNlYXJjaChcIlwiKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpe1xuICAgICAgICBpZihlLmtleT09XCJFbnRlclwiKVxuICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgdy0xLzQgcC0yIG0tMSBoLWZ1bGwgcm91bmRlZC1tZFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgcC0xIG0tMiB3LTMvNCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMiBtLTIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTMwMFwiPkdvPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGVcIj4gTmV3IENoYXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+IE5ldyBHcm91cDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgXCIgPlxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5jaGF0cyl9XG4gICAgICAgICAgICAgICAge3Byb2Nlc3NlZENoYXRzLmxlbmd0aCA+IDAgJiYgcHJvY2Vzc2VkQ2hhdHMubWFwKChjb250LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IGdyb3VwTmFtZT1jb250Py5ncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYoIWdyb3VwTmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCByZWNlaXZlcj1jb250LnBhcnRpY2lwYW50cy5maWx0ZXIocGlkPT5waWQhPXVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbmFtZT1nZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibS0yIHAtMSByb3VuZGVkLW1kIGJnLW9yYW5nZS0zMDBcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZWxlY3RDb250YWN0KGNvbnQuaWQsY29udC5jaGF0SWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWF4LWgtMTAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGNvbnQucHJvZmlsZVBpYyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz17Y29udC5wcm9maWxlUGljfSAgaGVpZ2h0PXs1MH0gd2lkdGg9ezUwfSBhbHQ9XCJQcm9maWxlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e2NvbnQubmFtZX08L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDb250YWN0IDEgY2xpY2tlZFwiKX0+Q29udGFjdCAxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCAyPC9saT4gKi99XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsImRiIiwiZG9jIiwiZ2V0RG9jIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwicHJvcHMiLCJ1c2VySWQiLCJnZXRVc2VyTmFtZUJ5SWQiLCJyZWNlaXZlciIsInVzZXJSZWYiLCJ1c2VyRG9jIiwiZXhpc3RzIiwidXNlckRhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInBpYyIsInByb2ZpbGVQaWN0dXJlIiwicGFpciIsImVycm9yIiwicHJvY2Vzc2VkQ2hhdHMiLCJzZXRQcm9jZXNzZWRDaGF0cyIsInVzZVN0YXRlIiwibW9kaWZ5Q2hhdHMiLCJ1cGRhdGVkQ2hhdHMiLCJQcm9taXNlIiwiYWxsIiwiY2hhdHMiLCJtYXAiLCJjb250IiwiY2hhdElkIiwicmVjZWl2ZXJBcnJheSIsInBhcnRpY2lwYW50cyIsImZpbHRlciIsInBpZCIsImNoYXQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTdWJtaXQiLCJlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsInZhbHVlIiwibGFiZWwiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5RG93biIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidWwiLCJsZW5ndGgiLCJpbmRleCIsImxpIiwib25DbGljayIsInNlbGVjdENvbnRhY3QiLCJwcm9maWxlUGljIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});