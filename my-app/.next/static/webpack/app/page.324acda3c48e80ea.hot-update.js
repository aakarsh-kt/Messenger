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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"24a3db5fe628\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzRmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyNGEzZGI1ZmU2MjhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/sidebar.jsx":
/*!************************************!*\
  !*** ./app/components/sidebar.jsx ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// \"use client\";\n// import Image from \"next/image\";\n// import React from \"react\";\n// import { db } from \"../firebase\";\n// import { doc, getDoc } from \"firebase/firestore\";\n// import { useEffect } from \"react\";\n// import { Button, TextField } from \"@mui/material\";\n// import { useRouter } from \"next/navigation\";\n// import { useState } from \"react\";\n// import SearchUser from \"./searchUser\";\n// export default function (props) {\n//     //    const modArray=props.contact.map()\n//     const userId = props.userId;\n//     async function getUserNameById(receiver) {\n//         try {\n//             // Reference to the document with the given userId in the \"users\" collection\n//             const userRef = doc(db, \"Users\", receiver);\n//             // Fetch the document\n//             const userDoc = await getDoc(userRef);\n//             if (userDoc.exists()) {\n//                 // Extract and return the user's name from the document data\n//                 const userData = userDoc.data();\n//                 // console.log(userDoc.id);\n//                 const id = userDoc.id;\n//                 const name = userData.name;\n//                 const pic = userData.profilePicture;\n//                 const pair = {\"id\":id, \"name\": name, \"pic\": pic };\n//                 // console.log(pic)\n//                 return pair;\n//             } else {\n//                 console.log(\"No such user!\");\n//                 return null;\n//             }\n//         } catch (error) {\n//             console.error(\"Error fetching user:\", error);\n//         }\n//     }\n//     const [processedChats, setProcessedChats] = React.useState([]);\n//     //   useEffect(()=>{\n//     //     const modChat=props.chats.map((cont,index)=>{\n//     //         const receiver=cont.participants.filter(pid=>pid!=userId)\n//     //         const name=getUserNameById(receiver);\n//     //         return ({\"name\":name,\"chat\":cont.chat});\n//     //     })\n//     //     setProcessedChats(modChat);\n//     //     console.log(modChat);\n//     //   },[props.chats])\n//     // import { useState, useEffect } from 'react';\n//     useEffect(() => {\n//         const modifyChats = async () => {\n//             try {\n//                 // Using Promise.all to handle async map operation\n//                 const updatedChats = await Promise.all(\n//                     props.chats.map(async (cont) => {\n//                         const groupname=cont?.groupName;\n//                         const id=cont.chatId;\n//                         const receiverArray = cont.data.participants.filter(pid => pid !== userId);\n//                         const receiver = receiverArray[0]; // Assuming only one receiver\n//                         // Assuming getUserNameById is async and fetches the username\n//                         const pair = await getUserNameById(receiver);\n//                         // console.log(profilePic)\n//                         return { \"id\":pair.id,\"name\": pair.name, \"chat\": cont.chat, \"profilePic\": pair.pic ,\"chatId\":id};\n//                     })\n//                 );\n//                 // Update the state with modified chats\n//                 setProcessedChats(updatedChats);\n//             } catch (error) {\n//                 console.error(\"Error modifying chats:\", error);\n//             }\n//         };\n//         modifyChats();\n//     }, [props.chats, userId]);\n//     const [search,setSearch]=React.useState(\"\");\n//     function handleSubmit(e) {\n//         // console.log(search);\n//         setSearch(\"\");\n//     }\n//     function handleKeyDown(e){\n//         if(e.key==\"Enter\")\n//             handleSubmit();\n//     }\n//     const router=useRouter();\n//     return (\n//         <div className=\"bg-black p-2 m-1 h-full rounded-md \">\n//             <div className=\"flex flex-row justify-around m-2 p-2\">\n//                 <button className=\"bg-white rounded-md p-1\" onClick={props.newChat}> New Chat</button>\n//                 <button className=\"bg-white rounded-md p-1\" onClick={props.newGrpFunc}> New Group</button>\n//             </div>\n//             <h1 className=\"text-white m-2 p-2 align-center\">Your Chats</h1>\n//             <div className=\"flex flex-row justify-around\">\n//                 <TextField \n//                 name=\"search\"\n//                 value={search}\n//                 label=\"Search\"\n//                 onChange={(e)=>setSearch(e.target.value)}\n//                 onKeyDown={handleKeyDown}\n//                 className=\"rounded-md p-1 m-2 w-3/4 bg-white\"\n//                  placeholder=\"Search\" />\n//                 <button className=\"bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300\">Go</button>\n//             </div>\n//             <ul className=\"cursor-pointer \" >\n//                  {console.log(processedChats)} \n//                 {processedChats.length > 0 && processedChats.map((cont, index) => {\n//                     //   const groupName=cont?.groupName;\n//                     //   if(!groupName){\n//                     //     const receiver=cont.participants.filter(pid=>pid!=userId)\n//                     // const name=getUserNameById(receiver);\n//                     return <li key={index} className=\"m-2 p-1 rounded-md border-orange-400 border-2 bg-slate-900 text-orange-400\" onClick={() => props.selectContact(cont.id,cont.chatId)}>\n//                         <div className=\"flex  justify-around max-h-10 \">\n//                             {/* {console.log(cont.profilePic)} */}\n//                             <Image className=\"rounded-full\" src={cont.profilePic}  height={50} width={50} alt=\"Profile\" />\n//                             <h3 className=\"text-xl\">{cont.name}</h3>\n//                         </div>\n//                     </li>\n//                 })}\n//                 {/* <li onClick={() => console.log(\"Contact 1 clicked\")}>Contact 1</li>\n//                 <li>Contact 2</li> */}\n//             </ul>\n//         </div>\n//     )\n// }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIuanN4IiwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQyxvREFBb0Q7QUFDcEQscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCwrQ0FBK0M7QUFDL0Msb0NBQW9DO0FBQ3BDLHlDQUF5QztBQUV6QyxvQ0FBb0M7QUFDcEMsK0NBQStDO0FBQy9DLG1DQUFtQztBQUVuQyxpREFBaUQ7QUFDakQsZ0JBQWdCO0FBQ2hCLDJGQUEyRjtBQUMzRiwwREFBMEQ7QUFFMUQsb0NBQW9DO0FBQ3BDLHFEQUFxRDtBQUVyRCxzQ0FBc0M7QUFDdEMsK0VBQStFO0FBQy9FLG1EQUFtRDtBQUNuRCw4Q0FBOEM7QUFDOUMseUNBQXlDO0FBQ3pDLDhDQUE4QztBQUM5Qyx1REFBdUQ7QUFDdkQscUVBQXFFO0FBQ3JFLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCLGdEQUFnRDtBQUNoRCwrQkFBK0I7QUFDL0IsZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1Qiw0REFBNEQ7QUFDNUQsWUFBWTtBQUNaLFFBQVE7QUFDUixzRUFBc0U7QUFDdEUsMkJBQTJCO0FBQzNCLDJEQUEyRDtBQUUzRCwyRUFBMkU7QUFDM0UsdURBQXVEO0FBQ3ZELDBEQUEwRDtBQUMxRCxnQkFBZ0I7QUFDaEIseUNBQXlDO0FBQ3pDLG1DQUFtQztBQUNuQyw0QkFBNEI7QUFDNUIsc0RBQXNEO0FBR3RELHdCQUF3QjtBQUN4Qiw0Q0FBNEM7QUFDNUMsb0JBQW9CO0FBQ3BCLHFFQUFxRTtBQUNyRSwwREFBMEQ7QUFDMUQsd0RBQXdEO0FBQ3hELDJEQUEyRDtBQUMzRCxnREFBZ0Q7QUFDaEQsc0dBQXNHO0FBQ3RHLDJGQUEyRjtBQUUzRix3RkFBd0Y7QUFDeEYsd0VBQXdFO0FBQ3hFLHFEQUFxRDtBQUNyRCw0SEFBNEg7QUFDNUgseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUVyQiwwREFBMEQ7QUFDMUQsbURBQW1EO0FBQ25ELGdDQUFnQztBQUNoQyxrRUFBa0U7QUFDbEUsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFFYix5QkFBeUI7QUFDekIsaUNBQWlDO0FBQ2pDLG1EQUFtRDtBQUNuRCxpQ0FBaUM7QUFFakMsa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUV6QixRQUFRO0FBQ1IsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsUUFBUTtBQUNSLGdDQUFnQztBQUVoQyxlQUFlO0FBQ2YsZ0VBQWdFO0FBR2hFLHFFQUFxRTtBQUNyRSx5R0FBeUc7QUFDekcsNkdBQTZHO0FBQzdHLHFCQUFxQjtBQUdyQiw4RUFBOEU7QUFDOUUsNkRBQTZEO0FBQzdELDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyw0REFBNEQ7QUFDNUQsNENBQTRDO0FBQzVDLGdFQUFnRTtBQUNoRSwyQ0FBMkM7QUFDM0MsbUdBQW1HO0FBRW5HLHFCQUFxQjtBQUNyQixnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELHNGQUFzRjtBQUN0Riw0REFBNEQ7QUFDNUQsMkNBQTJDO0FBQzNDLHVGQUF1RjtBQUN2RiwrREFBK0Q7QUFFL0QsOExBQThMO0FBQzlMLDJFQUEyRTtBQUMzRSxxRUFBcUU7QUFDckUsNkhBQTZIO0FBRTdILHVFQUF1RTtBQUV2RSxpQ0FBaUM7QUFDakMsNEJBQTRCO0FBRTVCLHNCQUFzQjtBQUN0QiwwRkFBMEY7QUFDMUYseUNBQXlDO0FBRXpDLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsUUFBUTtBQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci5qc3g/ZGQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIjtcbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbi8vIGltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuLy8gaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSBcIi4vc2VhcmNoVXNlclwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbi8vICAgICAvLyAgICBjb25zdCBtb2RBcnJheT1wcm9wcy5jb250YWN0Lm1hcCgpXG4vLyAgICAgY29uc3QgdXNlcklkID0gcHJvcHMudXNlcklkO1xuXG4vLyAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKSB7XG4vLyAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHVzZXJJZCBpbiB0aGUgXCJ1c2Vyc1wiIGNvbGxlY3Rpb25cbi8vICAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZGIsIFwiVXNlcnNcIiwgcmVjZWl2ZXIpO1xuXG4vLyAgICAgICAgICAgICAvLyBGZXRjaCB0aGUgZG9jdW1lbnRcbi8vICAgICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlclJlZik7XG5cbi8vICAgICAgICAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XG4vLyAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBhbmQgcmV0dXJuIHRoZSB1c2VyJ3MgbmFtZSBmcm9tIHRoZSBkb2N1bWVudCBkYXRhXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKTtcbi8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyRG9jLmlkKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHVzZXJEb2MuaWQ7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgcGljID0gdXNlckRhdGEucHJvZmlsZVBpY3R1cmU7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IHtcImlkXCI6aWQsIFwibmFtZVwiOiBuYW1lLCBcInBpY1wiOiBwaWMgfTtcbi8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwaWMpXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHBhaXI7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCB1c2VyIVwiKTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyOlwiLCBlcnJvcik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc3QgW3Byb2Nlc3NlZENoYXRzLCBzZXRQcm9jZXNzZWRDaGF0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4vLyAgICAgLy8gICB1c2VFZmZlY3QoKCk9Pntcbi8vICAgICAvLyAgICAgY29uc3QgbW9kQ2hhdD1wcm9wcy5jaGF0cy5tYXAoKGNvbnQsaW5kZXgpPT57XG5cbi8vICAgICAvLyAgICAgICAgIGNvbnN0IHJlY2VpdmVyPWNvbnQucGFydGljaXBhbnRzLmZpbHRlcihwaWQ9PnBpZCE9dXNlcklkKVxuLy8gICAgIC8vICAgICAgICAgY29uc3QgbmFtZT1nZXRVc2VyTmFtZUJ5SWQocmVjZWl2ZXIpO1xuLy8gICAgIC8vICAgICAgICAgcmV0dXJuICh7XCJuYW1lXCI6bmFtZSxcImNoYXRcIjpjb250LmNoYXR9KTtcbi8vICAgICAvLyAgICAgfSlcbi8vICAgICAvLyAgICAgc2V0UHJvY2Vzc2VkQ2hhdHMobW9kQ2hhdCk7XG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKG1vZENoYXQpO1xuLy8gICAgIC8vICAgfSxbcHJvcHMuY2hhdHNdKVxuLy8gICAgIC8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG1vZGlmeUNoYXRzID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgICAgICAvLyBVc2luZyBQcm9taXNlLmFsbCB0byBoYW5kbGUgYXN5bmMgbWFwIG9wZXJhdGlvblxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDaGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuLy8gICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGF0cy5tYXAoYXN5bmMgKGNvbnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwbmFtZT1jb250Py5ncm91cE5hbWU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZD1jb250LmNoYXRJZDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVyQXJyYXkgPSBjb250LmRhdGEucGFydGljaXBhbnRzLmZpbHRlcihwaWQgPT4gcGlkICE9PSB1c2VySWQpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjZWl2ZXIgPSByZWNlaXZlckFycmF5WzBdOyAvLyBBc3N1bWluZyBvbmx5IG9uZSByZWNlaXZlclxuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBnZXRVc2VyTmFtZUJ5SWQgaXMgYXN5bmMgYW5kIGZldGNoZXMgdGhlIHVzZXJuYW1lXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0gYXdhaXQgZ2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2ZpbGVQaWMpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBcImlkXCI6cGFpci5pZCxcIm5hbWVcIjogcGFpci5uYW1lLCBcImNoYXRcIjogY29udC5jaGF0LCBcInByb2ZpbGVQaWNcIjogcGFpci5waWMgLFwiY2hhdElkXCI6aWR9O1xuLy8gICAgICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgICAgICk7XG5cbi8vICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbW9kaWZpZWQgY2hhdHNcbi8vICAgICAgICAgICAgICAgICBzZXRQcm9jZXNzZWRDaGF0cyh1cGRhdGVkQ2hhdHMpO1xuLy8gICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW9kaWZ5aW5nIGNoYXRzOlwiLCBlcnJvcik7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH07XG5cbi8vICAgICAgICAgbW9kaWZ5Q2hhdHMoKTtcbi8vICAgICB9LCBbcHJvcHMuY2hhdHMsIHVzZXJJZF0pO1xuLy8gICAgIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXT1SZWFjdC51c2VTdGF0ZShcIlwiKTtcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaCk7XG4vLyAgICAgICAgIHNldFNlYXJjaChcIlwiKTtcblxuLy8gICAgIH1cbi8vICAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpe1xuLy8gICAgICAgICBpZihlLmtleT09XCJFbnRlclwiKVxuLy8gICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcbiAgXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBwLTIgbS0xIGgtZnVsbCByb3VuZGVkLW1kIFwiPlxuXG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCBtLTIgcC0yXCI+XG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHAtMVwiIG9uQ2xpY2s9e3Byb3BzLm5ld0NoYXR9PiBOZXcgQ2hhdDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1tZCBwLTFcIiBvbkNsaWNrPXtwcm9wcy5uZXdHcnBGdW5jfT4gTmV3IEdyb3VwPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgXG4vLyAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtLTIgcC0yIGFsaWduLWNlbnRlclwiPllvdXIgQ2hhdHM8L2gxPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kXCI+XG4vLyAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcbi8vICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbi8vICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuLy8gICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcbi8vICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuLy8gICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHAtMSBtLTIgdy0zLzQgYmctd2hpdGVcIlxuLy8gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBwLTIgbS0yIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS0zMDBcIj5HbzwvYnV0dG9uPlxuXG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBcIiA+XG4vLyAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9jZXNzZWRDaGF0cyl9IFxuLy8gICAgICAgICAgICAgICAgIHtwcm9jZXNzZWRDaGF0cy5sZW5ndGggPiAwICYmIHByb2Nlc3NlZENoYXRzLm1hcCgoY29udCwgaW5kZXgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBncm91cE5hbWU9Y29udD8uZ3JvdXBOYW1lO1xuLy8gICAgICAgICAgICAgICAgICAgICAvLyAgIGlmKCFncm91cE5hbWUpe1xuLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcmVjZWl2ZXI9Y29udC5wYXJ0aWNpcGFudHMuZmlsdGVyKHBpZD0+cGlkIT11c2VySWQpXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5hbWU9Z2V0VXNlck5hbWVCeUlkKHJlY2VpdmVyKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm0tMiBwLTEgcm91bmRlZC1tZCBib3JkZXItb3JhbmdlLTQwMCBib3JkZXItMiBiZy1zbGF0ZS05MDAgdGV4dC1vcmFuZ2UtNDAwXCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2VsZWN0Q29udGFjdChjb250LmlkLGNvbnQuY2hhdElkKX0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGp1c3RpZnktYXJvdW5kIG1heC1oLTEwIFwiPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coY29udC5wcm9maWxlUGljKX0gKi99XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz17Y29udC5wcm9maWxlUGljfSAgaGVpZ2h0PXs1MH0gd2lkdGg9ezUwfSBhbHQ9XCJQcm9maWxlXCIgLz5cblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e2NvbnQubmFtZX08L2gzPlxuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuLy8gICAgICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDb250YWN0IDEgY2xpY2tlZFwiKX0+Q29udGFjdCAxPC9saT5cbi8vICAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCAyPC9saT4gKi99XG5cbi8vICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.jsx\n"));

/***/ })

});