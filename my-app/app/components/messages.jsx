"use client"
import React from "react";
import OtherMessage from "./otherMessage";
import MyMessage from "./myMessage";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function (props) {
    const id = 1;
    const [chat,setChat]=React.useState("");
    useEffect(() => {
        const fetchChat = async () => {
            if (props.currChat) { // Check if chatId exists
                try {
                    // Reference to the specific document in the "Chats" collection
                    const chatRef = doc(db, "Chats", props.currChat);
    
                    // Fetch the chat document from Firestore
                    const chatDoc = await getDoc(chatRef);
    
                    if (chatDoc.exists()) {
                        // Get the chat data
                        const chatData = chatDoc.data();
                        console.log("Chat Data:", chatData);
    
                        // Do something with the fetched chat data (e.g., store in state)
                        setChat(chatData);  // Assuming you have a state to store the chat
                    } else {
                        console.log("No such chat!");
                    }
                } catch (error) {
                    console.error("Error fetching chat:", error);
                }
            }
        };
    
        fetchChat();
    }, [props.currChat]); // Run effect when `currChat` changes
    return (
        <div className="bg-green-500 rounded-2xl h-full">
            {/* <PerfectScrollbar   option={{ suppressScrollX: true } }> */}
                <div className="p-2">
                    {console.log(chat)}
                    {chat?.chat?.map((msg, index) => {
                        {console.log(props.userId)}
                        {console.log(msg.sender)}
                        if (msg.sender == props.userId) {
                            return <MyMessage key={index} msg={msg.msg} />;
                        } else {
                            return <OtherMessage key={index} msg={msg.msg} />;
                        }
                    })}
                </div>
            {/* </PerfectScrollbar> */}
        </div>
    );
}
