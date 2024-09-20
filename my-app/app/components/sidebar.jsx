
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export default function (props) {
    const userId = props.userId;
    // const [callingUserId, setCallingUserId] = useState(null);
    // Function to get user details by ID
    async function getUserNameById(receiver) {
        try {
            const userRef = doc(db, "Users", receiver);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();
                const id = userDoc.id;
                const name = userData.name;
                const pic = userData.profilePicture;
                return { id, name, pic };
            } else {
                console.log("No such user!");
                return null;
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const [processedChats, setProcessedChats] = useState([]);

    // Modify chats list based on whether it's a group or individual chat
    useEffect(() => {
        const modifyChats = async () => {
            try {
                const updatedChats = await Promise.all(
                    props.chats.map(async (cont) => {
                        const id = cont.chatId;

                        if (cont.data.groupName) {
                            // It's a group chat, so use groupName instead of individual names
                            return {
                                id,
                                name: cont.data.groupName,  // Use group name for display
                                chat: cont.data.chat,
                                chatId: id, 
                                profilePic: cont?.data?.profilePic,  // Default group icon
                                isGroup: true,
                            };
                        } else {
                            // It's a one-on-one chat
                            const receiverArray = cont.data.participants.filter(
                                (pid) => pid !== userId
                            );
                            const receiver = receiverArray[0]; // Assuming only one receiver
                            const pair = await getUserNameById(receiver);
                            return {
                                id: pair.id,
                                chatId:id,
                                name: pair.name,
                                chat: cont.data.chat,
                                profilePic: pair.pic,
                                isGroup: false,
                            };
                        }
                    })
                );

                setProcessedChats(updatedChats);
            } catch (error) {
                console.error("Error modifying chats:", error);
            }
        };

        modifyChats();
    }, [props.chats, userId]);

    const [search, setSearch] = useState("");

    function handleSubmit(e) {
        setSearch("");
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") handleSubmit();
    }

    const router = useRouter();

    return (
        <div className="bg-black p-2 m-1 h-full rounded-md text-2xl">
            <div className="flex flex-row justify-around m-2 p-2">
                <button className="bg-orange-500 rounded-md p-3 hover:text-white ease-in-out transform hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105" onClick={props.newChat}>
                    New Chat
                </button>
                <button className="bg-orange-400 rounded-md p-3 hover:text-white ease-in-out transform hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105" onClick={props.newGrpFunc}>
                    New Group
                </button>
            </div>

            <h1 className="text-white m-2 p-2 align-center">Your Chats</h1>
            {/* <div className="flex flex-row justify-around">
                <TextField
                    name="search"
                    value={search}
                    label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="rounded-md p-1 m-2 w-3/4 bg-white"
                    placeholder="Search"
                />
                <button className="bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300">
                    Go
                </button>
            </div> */}
            {/* {console.log(processedChats)} */}
            <ul className="cursor-pointer gap-2 text-xl">
                {processedChats.length > 0 &&
                    processedChats.map((cont, index) => {
                        return (
                            <li
                                key={index}
                                className="m-2 p-2 rounded-md border-orange-400 
                                ease-in-out transform hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105
                                transition duration-300  hover:shadow-glow
                                 drop-shadow-sm h-16 bg-slate-900 text-orange-400 align-center items-center hover:drop-shadow-xl  hover:text-white" 
                                onClick={() => props.selectContact(cont.id, cont.chatId)}
                                
                            >
                                <style jsx>{`
  .hover\\:shadow-glow:hover {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(59, 130, 246, 0.5);
  }
`}</style>
                                <div className="flex justify-around items-center max-h-16 ">
                                    <Image
                                        className="rounded-full"
                                        src={cont.profilePic?cont.profilePic:"/group-icon.png"}
                                        height={40}
                                        width={40}
                                
                                        alt="Profile"
                                    />
                                    <h3 className="text-2xl">{cont.name}</h3>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
