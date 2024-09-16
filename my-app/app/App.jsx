// "use client"
// import React from "react"
// import { useState,useEffect } from "react"
// // import Navbar from "./components/navbar"
// // import Sidebar from "./components/sidebar"
// // import Chat from "./components/chat";
// // import Split from "react-split";
// import Login from "./pages/login"
// import Register from "./pages/register"
// import LandingPage from "./pages/landingPage"
// import { onAuthStateChanged } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { UserProvider } from "./contexts/userContext.jsx";
// import { useRouter } from "next/router"
// // import './globals.css'
// export const  App=() =>{
//   const auth = getAuth();
//   const [user, setUser] = useState("");
//   const router=useRouter();
//   useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     if (currentUser) {
//       setUser(currentUser);
//     } else {
//       router.push("/login"); // Redirect to login if no user
//     }
//   });
//   return () => unsubscribe();
// }, [auth, router]);
//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//   //     setUser(currentUser);
//   //   });

//   //   // console.log(userFirebase);
//   //   return () => unsubscribe();
//   // }, []);
//   // useEffect(() => {
//   //   async function getDocumentsByQuery(collectionName, field, operator, value) {
//   //     if (value != undefined) {
//   //       console.log(value);
//   //       const q = query(
//   //         collection(db, collectionName),
//   //         where(field, operator, value)
//   //       );
//   //       const querySnapshot = await getDocs(q);
//   //       querySnapshot.forEach((doc) => {
//   //         console.log(doc.id, " => ", doc.data());
//   //         setPlayerInfo(doc.data());
//   //       });
//   //     }
//   //   }

//   //   getDocumentsByQuery("users", "email", "==", user?.email);
//   // }, [user]);
//   const contact=[
//     {
//       "name":"Giga Don",
//       "msg":"Peene CHale"
//     },
//     {
//       "name":"Dimli",
//       "msg":"Fookne CHale"
//     },
//     {
//       "name":"Simlim",
//       "msg":"Tahalne CHale"
//     }
//   ];
//   const [currChat,setCurrChar]=React.useState(0);
//   function selectContact(index){
//     setCurrChar(index);
//     // console.log(cont.name);
// }
//   return(
//   <UserProvider user={playerInfo} setUser={setPlayerInfo}>
//   <div className="bg-slate-800 h-screen">
    
//     <TransitionGroup>
//       <CSSTransition key={location.key} timeout={300} classNames="fade">
//         <Routes location={location}>
//           <Route path="/" element={<LandingPage />} />
//           {/* <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} /> */}
//           {/* <Route path="/profile" element={<Profile />} /> */}
//           {/* <Route path="/landing" element={<LandingPage />} /> */}
//           {/* <Route path="/game" element={<Game />} />
//           <Route path="/spectate" element={<Spectate />} /> */}
//         </Routes>
//       </CSSTransition>
//     </TransitionGroup>
//   </div>
// </UserProvider>
// );
// }

// // Wrapping the App with BrowserRouter
// const WrappedApp = () => {
// return (
// <BrowserRouter>
//   <App />
// </BrowserRouter>
// );
// };
// export default WrappedApp;
//     // <div className="h-screen flex flex-col flex-1">
//     //   <Navbar/>
      
//     //   <Split sizes={[30,70]} direction="horizontal" className="flex h-full">
//     //   <Sidebar contact={contact}
//     //     selectContact={selectContact}
//     //     />
//     //   <Chat contact={contact}
//     //     currChat={currChat}/>
     
//     //  </Split>
     
//     // </div>
// import React from "react"

"use client";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import Split from "react-split";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";  // Import the auth instance
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useUser } from "./userContext";

export default function LandingPage() {
  const contact = [
    { name: "Giga Don", msg: "Peene Chale",time:Date() },
    { name: "Dimli", msg: "Fookne Chale" ,time:Date()},
    { name: "Simlim", msg: "Tahalne Chale" ,time:Date()}
  ];

  const [currChat, setCurrChat] = useState(0);
  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRouterReady, setIsRouterReady] = useState(false);
  // const router = useRouter(); // Only safe to use inside useEffect

  function selectContact(index) {
    setCurrChat(index);
  }
  const [user,setUser]=React.useState(null);
  if(useUser() && user==null)
      setUser(useUser());
  
  // Firebase Auth effect
  // useEffect(() => {
  //   // Check if router is ready
  //   if (!router.isReady) return;  // Wait until router is ready
  //   setIsRouterReady(true);

  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     if (!currentUser) {
  //       router.push("/login"); // Redirect to login if not authenticated
  //     }
  //     setLoading(false); // Stop loading once auth state is resolved
  //   });

  //   return () => unsubscribe();
  // }, [router.isReady]); // Ensure this effect only runs when router is ready

  // if (loading || !isRouterReady) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   return null; // Redirecting to login, return null until redirected
  // }

  return (
    <div className="h-screen flex flex-col flex-1">
      <Navbar />

      <Split sizes={[30, 70]} direction="horizontal" className="flex h-full">
        <Sidebar contact={contact} selectContact={selectContact} />
        <Chat contact={contact} currChat={currChat} />
      </Split>
    </div>
  );
}
