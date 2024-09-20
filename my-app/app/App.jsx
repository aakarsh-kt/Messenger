"use client";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import Split from "react-split";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";  // Import the auth instance
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { UserContext, UserProvider, useUser } from "./userContext";

import { db } from "./firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import SearchUser from "./components/searchUser";
import NewGroup from "./components/newGroup";
export default function LandingPage() {
  const contact = [
    { name: "Giga Don", msg: "Peene Chale", time: Date() },
    { name: "Dimli", msg: "Fookne Chale", time: Date() },
    { name: "Simlim", msg: "Tahalne Chale", time: Date() }
  ];
  const [user, setUser] = useState("");
  // const userContext=useUser();
  const [currChat, setCurrChat] = useState(0);
  const router = useRouter();
  // const [user, setUser] = useState(userContext);

  // useEffect(()=>{
  //   setUser(userContext);
  // },[userContext])
  // const {user,setUser}=useContext(UserContext);
  const [chats, setChats] = React.useState([]);
  
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
    if (user != null)
      getDocumentsByQuery("Users", "email", "==", user?.user?.email);
  }, [user]);
  // console.log(user.uid)
  useEffect(() => {
    async function getDocumentsWithUserId(userId) {
      const collectionRef = collection(db, "Chats"); // Replace with your collection name

      // Create a query to find documents where participants array contains the userId
      if(userId)
     { const q = query(collectionRef, where("participants", "array-contains", userId));

      try {
        // Execute the query
        const querySnapshot = await getDocs(q);

        // Get the total count of documents
        const totalDocuments = querySnapshot.size;
        console.log(`Total documents with user ID ${userId}:`, totalDocuments);
        const newChats = [];
        // Optionally, loop through documents if you need to access them
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          newChats.push({ "data": doc.data(), "chatId": doc.id });
          // setChats(...chats,doc.data().chat);
        });
        // setChats(querySnapshot);
        setChats((prevChats) => [...prevChats, ...newChats]);
        return totalDocuments;
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    }
}

    const userId = user?.uid; // Replace with the user ID you're searching for
    getDocumentsWithUserId(userId);


  }, [user])
  const [profileId, setProfileId] = React.useState("");
  function selectContact(id, chatId) {
    console.log("App mein hu mai",id,chatId);
    setProfileId(id)
    setCurrChat(chatId);
  }
  const [refinedChat, setRefinedChat] = useState([]);
  async function findChatBetweenTwoUsers(userId, otherUser) {
    const chatRef = collection(db, "Chats");  // The collection where your chat data is stored
  
    // First, query the chats where the participants array contains userId1
    const q = query(chatRef, where("participants", "array-contains", userId));
  
    try {
      const querySnapshot = await getDocs(q);
      let chatExists = null;
  
      // Now, filter the results to find chats that also contain userId2 in participants
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.participants.includes(otherUser)) {
          chatExists = doc;  // This is the chat document where both userId1 and userId2 are participants
        }
      });
  
      if (chatExists) {
        setCurrChat(chatExists.id);
        console.log("Chat found between the two users:", chatExists.id);
        return chatExists.id;  // Return the chat document ID or data as needed
      } else {
        console.log("No chat found between the two users.");
        const newChatDoc = await addDoc(chatRef, {
          participants: [userId, otherUser],  // Add both users to the participants array
          chat: [],  // Initialize an empty chat array for messages
          createdAt: new Date()  // Optionally, add a timestamp
        });
        router.push(router.asPath);
        console.log("New chat created with ID:", newChatDoc.id);
        setCurrChat(newChatDoc.id);
        return newChatDoc.id;
        // return null;
      }
  
    } catch (error) {
      console.error("Error finding chat between users:", error);
    }
  }
  function searchChat(opponentId){
    findChatBetweenTwoUsers(user?.uid,opponentId);
  }
  // useEffect(()=>{
  //   if(chats!=null)
  // {  
  //   console.log(chats);
  //   chats.map((obj)=>{
  //   console.log(obj);
  //   if(obj!==undefined)
  //     setRefinedChat([...refinedChat,obj])
  //   })
  // }
  // },[chats])
  const auth = getAuth();
  // const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // console.log(userFirebase);
    return () => unsubscribe();
  }, []);
 
  console.log(chats);
  const [searchUser,setSearchUser]=useState(false);
  function newChat(){
      setSearchUser(prev=>!prev);
      setNewGroup(false);
      // router.push("/newChat")
  }
  console.log(refinedChat);
  
  const [searchTerm, setSearchTerm] = useState("");   // Holds the input from the user
  const [availableUsers, setAvailableUsers] = useState([]); // Holds the list of matching users

  useEffect(() => {
    const searchUsers = async (search) => {
      if (search) {
        const usersRef = collection(db, "Users");

        // Create a query to find usernames that start with or contain the search term
        const q = query(
          usersRef,
          where("name", ">=", search),
          where("name", "<=", search + "\uf8ff")
        );

        try {
          const querySnapshot = await getDocs(q);
          const users = [];
          querySnapshot.forEach((doc) => {
            if(doc.id!=user?.uid)
            users.push({"data":doc.data(),"id":doc.id});  // Push each matching user into the array
          });
          
          setAvailableUsers(users);  // Update the state with the matching users
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      } else {
        setAvailableUsers([]);  // Clear the list if the search input is empty
      }
    };

    searchUsers(searchTerm);
  }, [searchTerm]); // Runs every time the search term changes
  const [processedChats, setProcessedChats] = React.useState([]);
  const [newGroup,setNewGroup]=React.useState(false);
  useEffect(() => {
    const modifyChats = async () => {
        try {
            // Using Promise.all to handle async map operation
            const updatedChats = await Promise.all(
                chats.map(async (cont) => {
                    const id=cont.chatId;
                    const receiverArray = cont.data.participants.filter(pid => pid !== user?.uid);
                    const receiver = receiverArray[0]; // Assuming only one receiver

                    // Assuming getUserNameById is async and fetches the username
                    const pair = await getUserNameById(receiver);
                    // console.log(profilePic)
                    return { "id":pair.id,"name": pair.name, "chat": cont.chat, "profilePic": pair.pic ,"chatId":id};
                })
            );

            // Update the state with modified chats
            setProcessedChats(updatedChats);
        } catch (error) {
            console.error("Error modifying chats:", error);
        }
    };

    modifyChats();
}, [chats, newGroup]);
async function getUserNameById(receiver) {
  try {
      // Reference to the document with the given userId in the "users" collection
      const userRef = doc(db, "Users", receiver);

      // Fetch the document
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
          // Extract and return the user's name from the document data
          const userData = userDoc.data();
          // console.log(userDoc.id);
          const id = userDoc.id;
          const name = userData.name;
          const pic = userData.profilePicture;
          const pair = {"id":id, "name": name, "pic": pic };
          // console.log(pic)
          return pair;
      } else {
          console.log("No such user!");
          return null;
      }
  } catch (error) {
      console.error("Error fetching user:", error);
  }
}
  function handleSearch(search){
    console.log(search);
    setSearchTerm(search);
    // searchUsers(search);
  }
  
  function newGrpFunc(){
    setNewGroup(prev=>!prev);
    setSearchUser(false);
  }
  return (
    <div className="h-screen w-screen flex flex-col ">
      <UserProvider user={user} setUser={setUser}>
        <Navbar />


        <Split sizes={[30, 70]} direction="horizontal" className="flex h-full ">
          <Sidebar contact={contact} 
          selectContact={selectContact} 
          chats={chats} 
          userId={user != null ? user?.uid : ""}
          searchUser={searchUser}
          newChat={newChat}
          newGrpFunc={newGrpFunc}
          />
          <Chat contact={contact} 
           currChat={currChat}
           profileId={profileId}
           chats={chats} userId={user != null ? user?.uid : ""} 
          //  currChat={currChat}
          />
          {searchUser && <SearchUser handleSearch={handleSearch}
          searchAnswers={availableUsers} 
          searchChat={searchChat}/>}
          {
            newGroup && <NewGroup processedChats={processedChats}
            userId={user != null ? user?.uid : ""}/>
          }
        </Split>

      </UserProvider>
    </div>
  );
}
