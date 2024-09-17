"use client";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import Split from "react-split";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";  // Import the auth instance
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { UserContext, UserProvider, useUser } from "./userContext";

import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
export default function LandingPage() {
  const contact = [
    { name: "Giga Don", msg: "Peene Chale",time:Date() },
    { name: "Dimli", msg: "Fookne Chale" ,time:Date()},
    { name: "Simlim", msg: "Tahalne Chale" ,time:Date()}
  ];
  const [user, setUser] = useState("");
  // const userContext=useUser();
  const [currChat, setCurrChat] = useState(0);
  // const [user, setUser] = useState(userContext);

  // useEffect(()=>{
  //   setUser(userContext);
  // },[userContext])
  // const {user,setUser}=useContext(UserContext);
  const [chats,setChats]=React.useState(null);
  const [loading, setLoading] = useState(true);
  const [isRouterReady, setIsRouterReady] = useState(false);

  // const router = useRouter(); // Only safe to use inside useEffect
  const [playerInfo, setPlayerInfo] = useState(null);
  useEffect(() => {
    async function getDocumentsByQuery(collectionName, field, operator, value) {
      if (value != undefined) {
        console.log(value);
        const q = query(
          collection(db, collectionName),
          where(field, operator, value)
        );
        console.log(query);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setPlayerInfo(doc.data());
        });
      }
    }

    getDocumentsByQuery("Users", "email", "==", user?.user?.email);
  }, [user]);
console.log(user.uid)
  useEffect(()=>{
    async function getDocumentsWithUserId(userId) {
      const collectionRef = collection(db, "Chats"); // Replace with your collection name
      
      // Create a query to find documents where participants array contains the userId
      const q = query(collectionRef, where("participants", "array-contains", userId));
      
      try {
        // Execute the query
        const querySnapshot = await getDocs(q);
        
        // Get the total count of documents
        const totalDocuments = querySnapshot.size;
        setChats(querySnapshot);
        console.log(`Total documents with user ID ${userId}:`, totalDocuments);
        
        // Optionally, loop through documents if you need to access them
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
    
        return totalDocuments;
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    }
    
    // Example usage
    const userId = user?.uid; // Replace with the user ID you're searching for
    getDocumentsWithUserId(userId);
    // async function getChats(collectionName, field, operator, value) {
    //   if (value != undefined) {
    //     console.log(value);
    //     const q = query(
    //       collection(db, collectionName),
    //       where(field, operator, value)
    //     );
    //     console.log(query);
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.id, " => ", doc.data());
    //       setPlayerInfo(doc.data());
    //     });
    //   }
    // }

    // getChats("Chats", "participants", "==", user?.user?.email);
    
  },[user])

  function selectContact(index) {
    setCurrChat(index);
  }
  const [refinedChat,setRefinedChat]=useState(null);
  useEffect(()=>{
    if(chats!=null && chats.length>0)
  {  chats.map((obj)=>{
    console.log(obj);
      setRefinedChat({...refinedChat,obj})
    })}
  },[chats])
  const auth = getAuth();
  // const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // console.log(userFirebase);
    return () => unsubscribe();
  }, []);
  // const [playerInfo, setPlayerInfo] = useState(null);
  // useEffect(() => {
  //   async function getDocumentsByQuery(collectionName, field, operator, value) {
  //     if (value != undefined) {
  //       console.log(value);
  //       const q = query(
  //         collection(db, collectionName),
  //         where(field, operator, value)
  //       );
  //       const querySnapshot = await getDocs(q);
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());
  //         setPlayerInfo(doc.data());
  //       });
  //     }
  //   }

  //   getDocumentsByQuery("Users", "email", "==", user?.email);
  // }, [user]);

  return (
    <div className="h-screen w-screen flex flex-col flex-1">
      <UserProvider user={user} setUser={setUser}>
      <Navbar />

      <Split sizes={[30, 70]} direction="horizontal" className="flex h-full ">
        <Sidebar contact={contact} selectContact={selectContact} />
        <Chat contact={contact} currChat={currChat} />
      </Split>
    </UserProvider>
    </div>
  );
}
