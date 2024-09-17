"use-client"

import React, { useContext } from "react";
import Profile from "./profile.jsx";
import { UserContext, useUser } from "../userContext.jsx";
import { TextField } from "@mui/material";
import Messages from "./messages.jsx";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useEffect } from "react";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";

export default function(props) {
    const userContext = useUser();
    const [processedChats, setProcessedChats] = React.useState([]);
    const [user, setUser] = React.useState(userContext);
    const otherUser=props.otherUser;
    React.useEffect(() => {
        setUser(userContext);
    }, [userContext]);
    // const {user,setUser}=useContext(UserContext);
    async function getUserNameById(receiver) {
        try {
            // Reference to the document with the given userId in the "users" collection
            const userRef = doc(db, "Users", receiver);

            // Fetch the document
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                // Extract and return the user's name from the document data
                const userData = userDoc.data();
                console.log(userDoc.id);
                const id = userDoc.id;
                const name = userData.name;
                const pic = userData.profilePicture;
                const pair = {"id":id, "name": name, "pic": pic };
                console.log(pic)
                return pair;
            } else {
                console.log("No such user!");
                return null;
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }
    const userId=props.userId;
    useEffect(() => {
        const modifyChats = async () => {
            try {
                // Using Promise.all to handle async map operation
                const updatedChats = await Promise.all(
                    props.chats.map(async (cont) => {
                        const receiverArray = cont.data.participants.filter(pid => pid !== userId);
                        const receiver = receiverArray[0]; // Assuming only one receiver

                        // Assuming getUserNameById is async and fetches the username
                        const pair = await getUserNameById(receiver);
                        // console.log(profilePic)
                        return { "id":pair.id,"name": pair.name, "chat": cont.chat, "profilePic": pair.pic };
                    })
                );

                // Update the state with modified chats
                setProcessedChats(updatedChats);
            } catch (error) {
                console.error("Error modifying chats:", error);
            }
        };

        modifyChats();
    }, [props.chats, props.userId]);
    const [currDisplayUser,setCurrDisplayUser]=React.useState("");
    useEffect(() => {
        const getUser = async () => {
            try {
                // Await the result of the async function getUserNameById
                const updatedUser = await getUserNameById(props.profileId);
                console.log(updatedUser);
    
                // Set the fetched user as the current display user
                setCurrDisplayUser(updatedUser);
            } catch (error) {
                console.error("Error updating user:", error);
            }
        };
    
        // Call the async function
        getUser();
        
    }, [props.profileId]); // Re-run the effect if profileId changes
    
    const [messages, setMessages] = React.useState([
        { "msg": "Hi My Main man", "id": "1" },
        { "msg": "Hi my Nigga", "id": "2" },
        { "msg": "Who you calling Nigga", "id": "1" },
        { "msg": "Hi My Main man", "id": "1" },
        { "msg": "Hi my Nigga", "id": "2" },
        { "msg": "Who you calling Nigga", "id": "1" },
        { "msg": "Hi My Main man", "id": "1" },
       
        
        { "msg": "Who you calling Nigga", "id": "1" },
        { "msg": "Hi My Main man", "id": "1" },
        { "msg": "Hi my Nigga", "id": "2" },
        { "msg": "Who you calling Nigga", "id": "1" },
        // Add more messages here...
    ]);

    const [currMsg, setCurrMsg] = React.useState("");

    function handleChange(event) {
        setCurrMsg(event.target.value);
    }

    function handleSubmit(e) {
        if(currMsg.length>0)
       { 
        // const temp = { "msg": currMsg, "id": userId };
        addMessageToChat(props.currChat,currMsg,userId);
        // setMessages(messages.concat(temp));
        setCurrMsg("");
    
    }
    }
    async function addMessageToChat (chatId, messageText, senderId) {
        try {
            console.log("I am here")
          // Reference to the specific chat document
          const chatRef = doc(db, "Chats", chatId);
      
          // Create the message object to be added
          const newMessage = {
            sender: senderId,
            msg: messageText,
            timestamp: new Date(), // Add timestamp if needed
          };
      
          // Update the chat document with the new message added to the messages array
          await updateDoc(chatRef, {
            chat: arrayUnion(newMessage), // Adds the new message to the messages array
          });
      
          console.log("Message added successfully!");
        } catch (error) {
          console.error("Error adding message:", error);
        }
      };
    function handleKeyDown(event) {
        if (event.key === "Enter")
            handleSubmit();
    }

    return (
        <div className="bg-slate-800 flex flex-col h-full p-1 m-1 rounded-md">
            {console.log(processedChats)}
            {console.log(props.chats)}
            <Profile currDisplayUser={currDisplayUser} />
            {/* <PerfectScrollbar> */}
            {/* <h1>{props.currChat}</h1> */}
            <div className="flex-grow overflow-hidden">
                <Messages messages={messages} 
                userId={userId}
                    currChat={props.currChat}
                />
            </div>
            {/* </PerfectScrollbar>  */}
            <div className="flex items-center gap-2 mt-auto p-2 bg-slate-700">
                <TextField 
                    className="bg-slate-200 rounded-full w-full drop-shadow-md" 
                    id="outlined-basic" 
                    label="Message"
                    value={currMsg}
                    variant="outlined" 
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} 
                />
                <button className="bg-green-500 rounded-full p-2 m-2" onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </div>
    );
}
