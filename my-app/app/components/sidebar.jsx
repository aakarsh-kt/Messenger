"use client";
import Image from "next/image";
import React from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { Button, TextField } from "@mui/material";

export default function (props) {
    //    const modArray=props.contact.map()
    const userId = props.userId;

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
    const [processedChats, setProcessedChats] = React.useState([]);
    //   useEffect(()=>{
    //     const modChat=props.chats.map((cont,index)=>{

    //         const receiver=cont.participants.filter(pid=>pid!=userId)
    //         const name=getUserNameById(receiver);
    //         return ({"name":name,"chat":cont.chat});
    //     })
    //     setProcessedChats(modChat);
    //     console.log(modChat);
    //   },[props.chats])
    // import { useState, useEffect } from 'react';


    useEffect(() => {
        const modifyChats = async () => {
            try {
                // Using Promise.all to handle async map operation
                const updatedChats = await Promise.all(
                    props.chats.map(async (cont) => {
                        const id=cont.chatId;
                        const receiverArray = cont.data.participants.filter(pid => pid !== userId);
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
    }, [props.chats, userId]);
    const [search,setSearch]=React.useState("");
    function handleSubmit(e) {

        console.log(search);
        setSearch("");

    }
    function handleKeyDown(e){
        if(e.key=="Enter")
            handleSubmit();
    }
    function newChat(){
        
    }
    return (
        <div className="bg-black w-1/4 p-2 m-1 h-full rounded-md">

            
            <div className="flex flex-row justify-around m-2 p-2">
                <button className="bg-white rounded-md p-1" onClick={newChat}> New Chat</button>
                <button className="bg-white rounded-md p-1"> New Group</button>
            </div>
          
            <h1 className="text-white m-2 p-2 align-center">Your Chats</h1>
            <div className="flex flex-row justify-around">
                <TextField 
                name="search"
                value={search}
                label="Search"
                onChange={(e)=>setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                className="rounded-md p-1 m-2 w-3/4 bg-white"
                 placeholder="Search" />
                <button className="bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300">Go</button>

            </div>
            <ul className="cursor-pointer " >
                {console.log(props.chats)}
                {processedChats.length > 0 && processedChats.map((cont, index) => {
                    //   const groupName=cont?.groupName;
                    //   if(!groupName){
                    //     const receiver=cont.participants.filter(pid=>pid!=userId)
                    // const name=getUserNameById(receiver);

                    return <li key={index} className="m-2 p-1 rounded-md border-orange-400 border-2 bg-slate-900 text-orange-400" onClick={() => props.selectContact(cont.id,cont.chatId)}>
                        <div className="flex  justify-around max-h-10 ">
                            {console.log(cont.profilePic)}
                            <Image className="rounded-full" src={cont.profilePic}  height={50} width={50} alt="Profile" />

                            <h3 className="text-xl">{cont.name}</h3>

                        </div>
                    </li>

                })}
                {/* <li onClick={() => console.log("Contact 1 clicked")}>Contact 1</li>
                <li>Contact 2</li> */}

            </ul>
        </div>
    )
}