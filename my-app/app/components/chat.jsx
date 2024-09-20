"use-client"

import React, { useContext } from "react";
import Profile from "./profile.jsx";
import { UserContext, useUser } from "../userContext.jsx";
import { TextField } from "@mui/material";
import Messages from "./messages.jsx";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useEffect } from "react";
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase.js";
import { useRef } from "react";
import { useState } from "react";
import EmptyChat from "./emptyChat.jsx";

import IncomingCall from "./incomingCall.jsx";
import { useRouter } from "next/navigation.js";
import Caller from "./caller.jsx";
export default function (props) {
    console.log(props.playerInfo);
    const userContext = useUser();
    const [processedChats, setProcessedChats] = React.useState([]);
    const [user, setUser] = React.useState(userContext);
    const otherUser = props.otherUser;
    const router = useRouter();
    React.useEffect(() => {
        setUser(userContext);
        if (userContext == null)
            router.push("/login");
    }, [userContext]);


    // const {user,setUser}=useContext(UserContext);
    const [ws, setWs] = useState(null); // WebSocket instance
    const wsRef = useRef(null); // To keep track of the WebSocket instance
    const [messages, setMessages] = React.useState([]);
    const [updatedChat, setUpdatedChat] = React.useState([]);
    const [incomingCall, setIncomingCall] = useState(false);
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");

        socket.onopen = () => {
            console.log('WebSocket connection established');
            // ws.send(JSON.stringify({ senderId: 'user1' }));
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onmessage = (event) => {

            const message = JSON.parse(event.data);
            if (message?.type == "ping") {
                // "msg":currMsg, "senderId":userId, "chatId":props.currChat, "recipients":[props.profileId]
                socket.send(JSON.stringify({ "msg": "", "senderId": userId, "chatId": "none", "recipients": ["none"] }));

            }
            if (message?.type == "call-invitation") {
                setIncomingCall(true);
                setStartCall(true);
                console.log("Incoming call from", message.callerId);
            }
            // props.chats((prev)=>[...prev,message]);
            else {
                console.log(message)
                if (message)
                    setUpdatedChat((prev) => [...prev, message]);
                setMessages((prevMessages) => [...prevMessages, message]);

            }
            console.log('Received message from server:', message); // This should trigger
        };

        wsRef.current = socket;
        setWs(socket);
        // if(socket)
        // socket.send({type:"initialization"});
        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, [props.profileId]);


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
                const pair = { "id": id, "name": name, "pic": pic };
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
    const userId = props.userId;
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
                        return { "id": pair.id, "name": pair.name, "chat": cont.chat, "profilePic": pair.pic };
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
    const [currDisplayUser, setCurrDisplayUser] = React.useState("");
    useEffect(() => {
        const getUser = async () => {
            try {
                // Await the result of the async function getUserNameById
                const updatedUser = await getUserNameById(props.profileId);
                // console.log(updatedUser);

                // Set the fetched user as the current display user
                setCurrDisplayUser(updatedUser);
            } catch (error) {
                console.error("Error updating user:", error);
            }
        };

        // Call the async function
        getUser();

    }, [props.profileId]); // Re-run the effect if profileId changes



    const [currMsg, setCurrMsg] = React.useState("");

    function handleChange(event) {
        setCurrMsg(event.target.value);
    }
    useEffect(() => {

        props.chats.map((ch) => {
            if (ch.chatId == props.currChat) {
                //  console.log("Bingo")
                setUpdatedChat(ch.data.chat)
            }
        })
    }, [props.chats, props.currChat])
    function handleSubmit(e) {
        if (currMsg.length > 0) {
            if (wsRef.current) {

                // console.log(props.profileId);
                const serveMsg = { "msg": currMsg, "senderId": userId, "chatId": props.currChat, "recipients":participants }
                ws.send(JSON.stringify(serveMsg));
            
            }
            const temp = { "msg": currMsg, "sender": userId };
            

            if (temp.msg.length > 0) {
                setUpdatedChat((prev) => [...prev, temp]);
            }
            addMessageToChat(props.currChat, currMsg, userId);
            setCurrMsg("");

        }
    }
    const [participants, setParticipants] = useState([]);
    useEffect(() => {
        async function getDocumentsByQuery(collectionName, value) {
            try {
                const docRef = doc(db, collectionName, value); // Replace 'collectionName' with your actual collection name
                const docSnap = await getDoc(docRef);
            
                if (docSnap.exists()) {
                    setParticipants(docSnap.data().participants);
                  console.log("Document data:", docSnap.data());
                } else {
                  console.log("No such document!");
                }
              } catch (error) {
                console.error("Error getting document:", error);
              }
            
        }

        getDocumentsByQuery("Chats", props.currChat);
    }, [ props.currChat]);
    // console.log(props.currChat);
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
    async function addMessageToChat(chatId, messageText, senderId) {
        try {

            const chatRef = doc(db, "Chats", chatId);


            const newMessage = {
                sender: senderId,
                msg: messageText,
                timestamp: new Date(), // Add timestamp if needed
            };


            await updateDoc(chatRef, {
                chat: arrayUnion(newMessage),
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
    const [startCall, setStartCall] = useState(false);
    function handleAudioCall() {
        setStartCall(prev => !prev);
    }
    function sendInvitation() {
        const invitation = { "type": "call-invitation", "callerId": userId, "roomId": props.currChat, "receiverId": props.profileId };
        ws.send(JSON.stringify(invitation));
    }
    const [videoOn, setVideoOn] = useState(false);
    function handleVideoCall() {
        if (startCall == false)
            sendInvitation()
        setStartCall(prev => !prev);
        setVideoOn(prev => !prev);
    }

    return (
        <div className="bg-slate-800 flex flex-col h-full p-1 m-1 rounded-md">

            {props.currChat != "" && <Profile currDisplayUser={currDisplayUser} handleAudioCall={handleAudioCall} handleVideoCall={handleVideoCall} />}

            {startCall && <Caller roomId={props.currChat} userId={props.userId} name={playerInfo?.name} />}
            {incomingCall && <IncomingCall roomId={props.currChat} name={playerInfo?.name} userId={props.userId} />}
            {console.log(updatedChat)}
            {console.log(participants)} 
            <PerfectScrollbar>

                {props.currChat != "" ?
                    <div className="flex-grow overflow-auto  h-full">
                        <Messages messages={processedChats}
                            userId={userId}
                            chats={updatedChat}
                            currChat={props.currChat}
                        />
                    </div>
                    :
                    <div className="flex flex-col justify-center items-center h-full ">
                        <EmptyChat />
                    </div>
                }
            </PerfectScrollbar>
            <div className="flex items-center gap-2 mt-auto p-2 bg-slate-700">
                <TextField
                    className="bg-slate-200 rounded-full w-full "
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
            <style jsx>{`
        .transition-container {
          position: relative;
          overflow: hidden;
        }
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
}
