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

/***/ "(app-pages-browser)/./app/components/chat.jsx":
/*!*********************************!*\
  !*** ./app/components/chat.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.jsx */ \"(app-pages-browser)/./app/components/profile.jsx\");\n/* harmony import */ var _userContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userContext.jsx */ \"(app-pages-browser)/./app/userContext.jsx\");\n/* harmony import */ var _barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _messages_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.jsx */ \"(app-pages-browser)/./app/components/messages.jsx\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase.js */ \"(app-pages-browser)/./app/firebase.js\");\n\"use-client\";\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    const userContext = (0,_userContext_jsx__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [processedChats, setProcessedChats] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userContext);\n    const otherUser = props.otherUser;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setUser(userContext);\n    }, [\n        userContext\n    ]);\n    // const {user,setUser}=useContext(UserContext);\n    async function getUserNameById(receiver) {\n        try {\n            // Reference to the document with the given userId in the \"users\" collection\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase_js__WEBPACK_IMPORTED_MODULE_8__.db, \"Users\", receiver);\n            // Fetch the document\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)(userRef);\n            if (userDoc.exists()) {\n                // Extract and return the user's name from the document data\n                const userData = userDoc.data();\n                console.log(userDoc.id);\n                const id = userDoc.id;\n                const name = userData.name;\n                const pic = userData.profilePicture;\n                const pair = {\n                    \"id\": id,\n                    \"name\": name,\n                    \"pic\": pic\n                };\n                console.log(pic);\n                return pair;\n            } else {\n                console.log(\"No such user!\");\n                return null;\n            }\n        } catch (error) {\n            console.error(\"Error fetching user:\", error);\n        }\n    }\n    const userId = props.userId;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const modifyChats = async ()=>{\n            try {\n                // Using Promise.all to handle async map operation\n                const updatedChats = await Promise.all(props.chats.map(async (cont)=>{\n                    const receiverArray = cont.data.participants.filter((pid)=>pid !== userId);\n                    const receiver = receiverArray[0]; // Assuming only one receiver\n                    // Assuming getUserNameById is async and fetches the username\n                    const pair = await getUserNameById(receiver);\n                    // console.log(profilePic)\n                    return {\n                        \"id\": pair.id,\n                        \"name\": pair.name,\n                        \"chat\": cont.chat,\n                        \"profilePic\": pair.pic\n                    };\n                }));\n                // Update the state with modified chats\n                setProcessedChats(updatedChats);\n            } catch (error) {\n                console.error(\"Error modifying chats:\", error);\n            }\n        };\n        modifyChats();\n    }, [\n        props.chats,\n        props.userId\n    ]);\n    const [currDisplayUser, setCurrDisplayUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            try {\n                // Await the result of the async function getUserNameById\n                const updatedUser = await getUserNameById(props.profileId);\n                console.log(updatedUser);\n                // Set the fetched user as the current display user\n                setCurrDisplayUser(updatedUser);\n            } catch (error) {\n                console.error(\"Error updating user:\", error);\n            }\n        };\n        // Call the async function\n        getUser();\n    }, [\n        props.profileId\n    ]); // Re-run the effect if profileId changes\n    const [messages, setMessages] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi My Main man\",\n            \"id\": \"1\"\n        },\n        {\n            \"msg\": \"Hi my Nigga\",\n            \"id\": \"2\"\n        },\n        {\n            \"msg\": \"Who you calling Nigga\",\n            \"id\": \"1\"\n        }\n    ]);\n    const [currMsg, setCurrMsg] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    function handleChange(event) {\n        setCurrMsg(event.target.value);\n    }\n    function handleSubmit(e) {\n        if (currMsg.length > 0) {\n            const temp = {\n                \"msg\": currMsg,\n                \"id\": userId\n            };\n            addMessageToChat(props.currChat, currMsg, userId);\n            // setMessages(messages.concat(temp));\n            setCurrMsg(\"\");\n        }\n    }\n    async function addMessageToChat(chatId, messageText, senderId) {\n        try {\n            console.log(\"I am here\");\n            // Reference to the specific chat document\n            const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase_js__WEBPACK_IMPORTED_MODULE_8__.db, \"Chats\", chatId);\n            // Create the message object to be added\n            const newMessage = {\n                sender: senderId,\n                msg: messageText,\n                timestamp: new Date()\n            };\n            // Update the chat document with the new message added to the messages array\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.updateDoc)(chatRef, {\n                chat: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.arrayUnion)(newMessage)\n            });\n            console.log(\"Message added successfully!\");\n        } catch (error) {\n            console.error(\"Error adding message:\", error);\n        }\n    }\n    ;\n    function handleKeyDown(event) {\n        if (event.key === \"Enter\") handleSubmit();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-800 flex flex-col h-full p-1 m-1 rounded-md\",\n        children: [\n            console.log(processedChats),\n            console.log(props.chats),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                currDisplayUser: currDisplayUser\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 160,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_messages_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    messages: messages,\n                    userId: userId,\n                    currChat: props.currChat\n                }, void 0, false, {\n                    fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                    lineNumber: 164,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 163,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 mt-auto p-2 bg-slate-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        className: \"bg-slate-200 rounded-full w-full drop-shadow-md\",\n                        id: \"outlined-basic\",\n                        label: \"Message\",\n                        value: currMsg,\n                        variant: \"outlined\",\n                        onChange: handleChange,\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 171,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-500 rounded-full p-2 m-2\",\n                        onClick: handleSubmit,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                        lineNumber: 180,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n                lineNumber: 170,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akarsh/Desktop/Projects/Texter/my-app/app/components/chat.jsx\",\n        lineNumber: 157,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NoYXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFMEM7QUFDTjtBQUNzQjtBQUNoQjtBQUNKO0FBQ2lCO0FBQ0Y7QUFDbkI7QUFDc0M7QUFDcEM7QUFFcEMsNkJBQWUsb0NBQVNjLEtBQUs7SUFDekIsTUFBTUMsY0FBY1gseURBQU9BO0lBQzNCLE1BQU0sQ0FBQ1ksZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLHFEQUFjLENBQUMsRUFBRTtJQUM3RCxNQUFNLENBQUNtQixNQUFNQyxRQUFRLEdBQUdwQixxREFBYyxDQUFDZTtJQUN2QyxNQUFNTSxZQUFVUCxNQUFNTyxTQUFTO0lBQy9CckIsc0RBQWUsQ0FBQztRQUNab0IsUUFBUUw7SUFDWixHQUFHO1FBQUNBO0tBQVk7SUFDaEIsZ0RBQWdEO0lBQ2hELGVBQWVPLGdCQUFnQkMsUUFBUTtRQUNuQyxJQUFJO1lBQ0EsNEVBQTRFO1lBQzVFLE1BQU1DLFVBQVVkLHVEQUFHQSxDQUFDRyw0Q0FBRUEsRUFBRSxTQUFTVTtZQUVqQyxxQkFBcUI7WUFDckIsTUFBTUUsVUFBVSxNQUFNZCwwREFBTUEsQ0FBQ2E7WUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO2dCQUNsQiw0REFBNEQ7Z0JBQzVELE1BQU1DLFdBQVdGLFFBQVFHLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNMLFFBQVFNLEVBQUU7Z0JBQ3RCLE1BQU1BLEtBQUtOLFFBQVFNLEVBQUU7Z0JBQ3JCLE1BQU1DLE9BQU9MLFNBQVNLLElBQUk7Z0JBQzFCLE1BQU1DLE1BQU1OLFNBQVNPLGNBQWM7Z0JBQ25DLE1BQU1DLE9BQU87b0JBQUMsTUFBS0o7b0JBQUksUUFBUUM7b0JBQU0sT0FBT0M7Z0JBQUk7Z0JBQ2hESixRQUFRQyxHQUFHLENBQUNHO2dCQUNaLE9BQU9FO1lBQ1gsT0FBTztnQkFDSE4sUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtRQUNK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b3VyY2VzQ29udGVudCI6WyJcInVzZS1jbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vcHJvZmlsZS5qc3hcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0LCB1c2VVc2VyIH0gZnJvbSBcIi4uL3VzZXJDb250ZXh0LmpzeFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBNZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlcy5qc3hcIjtcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9jc3Mvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFycmF5VW5pb24sIGRvYywgZ2V0RG9jLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9wcykge1xuICAgIGNvbnN0IHVzZXJDb250ZXh0ID0gdXNlVXNlcigpO1xuICAgIGNvbnN0IFtwcm9jZXNzZWRDaGF0cywgc2V0UHJvY2Vzc2VkQ2hhdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKHVzZXJDb250ZXh0KTtcbiAgICBjb25zdCBvdGhlclVzZXI9cHJvcHMub3RoZXJVc2VyO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFVzZXIodXNlckNvbnRleHQpO1xuICAgIH0sIFt1c2VyQ29udGV4dF0pO1xuICAgIC8vIGNvbnN0IHt1c2VyLHNldFVzZXJ9PXVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJOYW1lQnlJZChyZWNlaXZlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCB3aXRoIHRoZSBnaXZlbiB1c2VySWQgaW4gdGhlIFwidXNlcnNcIiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCBcIlVzZXJzXCIsIHJlY2VpdmVyKTtcblxuICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIGRvY3VtZW50XG4gICAgICAgICAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0RG9jKHVzZXJSZWYpO1xuXG4gICAgICAgICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgYW5kIHJldHVybiB0aGUgdXNlcidzIG5hbWUgZnJvbSB0aGUgZG9jdW1lbnQgZGF0YVxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlckRvYy5kYXRhKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRvYy5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB1c2VyRG9jLmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB1c2VyRGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpYyA9IHVzZXJEYXRhLnByb2ZpbGVQaWN0dXJlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSB7XCJpZFwiOmlkLCBcIm5hbWVcIjogbmFtZSwgXCJwaWNcIjogcGljIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGljKVxuICAgICAgICAgICAgICAgIHJldHVybiBwYWlyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggdXNlciFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHVzZXJJZD1wcm9wcy51c2VySWQ7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kaWZ5Q2hhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIFVzaW5nIFByb21pc2UuYWxsIHRvIGhhbmRsZSBhc3luYyBtYXAgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZENoYXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoYXRzLm1hcChhc3luYyAoY29udCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjZWl2ZXJBcnJheSA9IGNvbnQuZGF0YS5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZCA9PiBwaWQgIT09IHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXZlciA9IHJlY2VpdmVyQXJyYXlbMF07IC8vIEFzc3VtaW5nIG9ubHkgb25lIHJlY2VpdmVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtaW5nIGdldFVzZXJOYW1lQnlJZCBpcyBhc3luYyBhbmQgZmV0Y2hlcyB0aGUgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSBhd2FpdCBnZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZmlsZVBpYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFwiaWRcIjpwYWlyLmlkLFwibmFtZVwiOiBwYWlyLm5hbWUsIFwiY2hhdFwiOiBjb250LmNoYXQsIFwicHJvZmlsZVBpY1wiOiBwYWlyLnBpYyB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbW9kaWZpZWQgY2hhdHNcbiAgICAgICAgICAgICAgICBzZXRQcm9jZXNzZWRDaGF0cyh1cGRhdGVkQ2hhdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW9kaWZ5aW5nIGNoYXRzOlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kaWZ5Q2hhdHMoKTtcbiAgICB9LCBbcHJvcHMuY2hhdHMsIHByb3BzLnVzZXJJZF0pO1xuICAgIGNvbnN0IFtjdXJyRGlzcGxheVVzZXIsc2V0Q3VyckRpc3BsYXlVc2VyXT1SZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBBd2FpdCB0aGUgcmVzdWx0IG9mIHRoZSBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTmFtZUJ5SWRcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IGdldFVzZXJOYW1lQnlJZChwcm9wcy5wcm9maWxlSWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRVc2VyKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGZldGNoZWQgdXNlciBhcyB0aGUgY3VycmVudCBkaXNwbGF5IHVzZXJcbiAgICAgICAgICAgICAgICBzZXRDdXJyRGlzcGxheVVzZXIodXBkYXRlZFVzZXIpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBDYWxsIHRoZSBhc3luYyBmdW5jdGlvblxuICAgICAgICBnZXRVc2VyKCk7XG4gICAgICAgIFxuICAgIH0sIFtwcm9wcy5wcm9maWxlSWRdKTsgLy8gUmUtcnVuIHRoZSBlZmZlY3QgaWYgcHJvZmlsZUlkIGNoYW5nZXNcbiAgICBcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKFtcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIE15IE1haW4gbWFuXCIsIFwiaWRcIjogXCIxXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIkhpIG15IE5pZ2dhXCIsIFwiaWRcIjogXCIyXCIgfSxcbiAgICAgICAgeyBcIm1zZ1wiOiBcIldobyB5b3UgY2FsbGluZyBOaWdnYVwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBNeSBNYWluIG1hblwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBteSBOaWdnYVwiLCBcImlkXCI6IFwiMlwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJXaG8geW91IGNhbGxpbmcgTmlnZ2FcIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICB7IFwibXNnXCI6IFwiSGkgTXkgTWFpbiBtYW5cIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgeyBcIm1zZ1wiOiBcIldobyB5b3UgY2FsbGluZyBOaWdnYVwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBNeSBNYWluIG1hblwiLCBcImlkXCI6IFwiMVwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJIaSBteSBOaWdnYVwiLCBcImlkXCI6IFwiMlwiIH0sXG4gICAgICAgIHsgXCJtc2dcIjogXCJXaG8geW91IGNhbGxpbmcgTmlnZ2FcIiwgXCJpZFwiOiBcIjFcIiB9LFxuICAgICAgICAvLyBBZGQgbW9yZSBtZXNzYWdlcyBoZXJlLi4uXG4gICAgXSk7XG5cbiAgICBjb25zdCBbY3Vyck1zZywgc2V0Q3Vyck1zZ10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRDdXJyTXNnKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgaWYoY3Vyck1zZy5sZW5ndGg+MClcbiAgICAgICB7IFxuICAgICAgICBjb25zdCB0ZW1wID0geyBcIm1zZ1wiOiBjdXJyTXNnLCBcImlkXCI6IHVzZXJJZCB9O1xuICAgICAgICBhZGRNZXNzYWdlVG9DaGF0KHByb3BzLmN1cnJDaGF0LGN1cnJNc2csdXNlcklkKTtcbiAgICAgICAgLy8gc2V0TWVzc2FnZXMobWVzc2FnZXMuY29uY2F0KHRlbXApKTtcbiAgICAgICAgc2V0Q3Vyck1zZyhcIlwiKTtcbiAgICBcbiAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZE1lc3NhZ2VUb0NoYXQgKGNoYXRJZCwgbWVzc2FnZVRleHQsIHNlbmRlcklkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaGVyZVwiKVxuICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgc3BlY2lmaWMgY2hhdCBkb2N1bWVudFxuICAgICAgICAgIGNvbnN0IGNoYXRSZWYgPSBkb2MoZGIsIFwiQ2hhdHNcIiwgY2hhdElkKTtcbiAgICAgIFxuICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbWVzc2FnZSBvYmplY3QgdG8gYmUgYWRkZWRcbiAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xuICAgICAgICAgICAgc2VuZGVyOiBzZW5kZXJJZCxcbiAgICAgICAgICAgIG1zZzogbWVzc2FnZVRleHQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksIC8vIEFkZCB0aW1lc3RhbXAgaWYgbmVlZGVkXG4gICAgICAgICAgfTtcbiAgICAgIFxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgY2hhdCBkb2N1bWVudCB3aXRoIHRoZSBuZXcgbWVzc2FnZSBhZGRlZCB0byB0aGUgbWVzc2FnZXMgYXJyYXlcbiAgICAgICAgICBhd2FpdCB1cGRhdGVEb2MoY2hhdFJlZiwge1xuICAgICAgICAgICAgY2hhdDogYXJyYXlVbmlvbihuZXdNZXNzYWdlKSwgLy8gQWRkcyB0aGUgbmV3IG1lc3NhZ2UgdG8gdGhlIG1lc3NhZ2VzIGFycmF5XG4gICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgYWRkZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIG1lc3NhZ2U6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIilcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtODAwIGZsZXggZmxleC1jb2wgaC1mdWxsIHAtMSBtLTEgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKHByb2Nlc3NlZENoYXRzKX1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5jaGF0cyl9XG4gICAgICAgICAgICA8UHJvZmlsZSBjdXJyRGlzcGxheVVzZXI9e2N1cnJEaXNwbGF5VXNlcn0gLz5cbiAgICAgICAgICAgIHsvKiA8UGVyZmVjdFNjcm9sbGJhcj4gKi99XG4gICAgICAgICAgICB7LyogPGgxPntwcm9wcy5jdXJyQ2hhdH08L2gxPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17bWVzc2FnZXN9IFxuICAgICAgICAgICAgICAgIHVzZXJJZD17dXNlcklkfVxuICAgICAgICAgICAgICAgICAgICBjdXJyQ2hhdD17cHJvcHMuY3VyckNoYXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvUGVyZmVjdFNjcm9sbGJhcj4gICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC1hdXRvIHAtMiBiZy1zbGF0ZS03MDBcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgcm91bmRlZC1mdWxsIHctZnVsbCBkcm9wLXNoYWRvdy1tZFwiIFxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCIgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyTXNnfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHJvdW5kZWQtZnVsbCBwLTIgbS0yXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiUHJvZmlsZSIsIlVzZXJDb250ZXh0IiwidXNlVXNlciIsIlRleHRGaWVsZCIsIk1lc3NhZ2VzIiwiUGVyZmVjdFNjcm9sbGJhciIsInVzZUVmZmVjdCIsImFycmF5VW5pb24iLCJkb2MiLCJnZXREb2MiLCJ1cGRhdGVEb2MiLCJkYiIsInByb3BzIiwidXNlckNvbnRleHQiLCJwcm9jZXNzZWRDaGF0cyIsInNldFByb2Nlc3NlZENoYXRzIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsIm90aGVyVXNlciIsImdldFVzZXJOYW1lQnlJZCIsInJlY2VpdmVyIiwidXNlclJlZiIsInVzZXJEb2MiLCJleGlzdHMiLCJ1c2VyRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJuYW1lIiwicGljIiwicHJvZmlsZVBpY3R1cmUiLCJwYWlyIiwiZXJyb3IiLCJ1c2VySWQiLCJtb2RpZnlDaGF0cyIsInVwZGF0ZWRDaGF0cyIsIlByb21pc2UiLCJhbGwiLCJjaGF0cyIsIm1hcCIsImNvbnQiLCJyZWNlaXZlckFycmF5IiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGlkIiwiY2hhdCIsImN1cnJEaXNwbGF5VXNlciIsInNldEN1cnJEaXNwbGF5VXNlciIsImdldFVzZXIiLCJ1cGRhdGVkVXNlciIsInByb2ZpbGVJZCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjdXJyTXNnIiwic2V0Q3Vyck1zZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwibGVuZ3RoIiwidGVtcCIsImFkZE1lc3NhZ2VUb0NoYXQiLCJjdXJyQ2hhdCIsImNoYXRJZCIsIm1lc3NhZ2VUZXh0Iiwic2VuZGVySWQiLCJjaGF0UmVmIiwibmV3TWVzc2FnZSIsInNlbmRlciIsIm1zZyIsInRpbWVzdGFtcCIsIkRhdGUiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ2YXJpYW50Iiwib25DaGFuZ2UiLCJvbktleURvd24iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/chat.jsx\n"));

/***/ })

});