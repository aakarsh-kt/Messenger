
"use client"

import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import {  collection, addDoc } from 'firebase/firestore'; // Adjust the path as needed
import {db} from "../firebase";
export default function(props){
    const [groupName, setGroupName] = useState("");
    const n = props.processedChats.length;
    const [isChecked, setIsChecked] = useState(() => Array(n).fill(false));

    const handleToggle = (index) => {
        setIsChecked(prevState => 
            prevState.map((item, i) => (i === index ? !item : item))
        );
    };

    const handleCreateGroup = async () => {
        // Gather selected members' IDs
        const selectedMembers = props.processedChats
            .filter((_, index) => isChecked[index])
            .map(cont => cont.id); // Adjust according to your data structure
        selectedMembers.push(props.userId);
        if (groupName.trim() === "" || selectedMembers.length === 0) {
            alert("Please enter a group name and select at least one member.");
            return;
        }

        try {
            // Add new chat to Firebase
            await addDoc(collection(db, "Chats"), {
                participants: selectedMembers,
                chat: [], // Initial empty array for messages
                groupName: groupName // Optional: Store the group name
            });
            alert("Group created successfully!");
            setGroupName("");
            window.location.reload();

            setIsChecked(Array(n).fill(false)); // Reset the state after creation
        } catch (error) {
            console.error("Error creating group: ", error);
            alert("Error creating group. Please try again.");
        }
    };

    return (
        <div className="bg-slate-900 w-1/4 p-2 m-1 rounded-md">
            <h1 className="text-white text-2xl m-2 p-2">Create Group</h1>
            <div className="flex flex-col gap-2 m-2">
                <TextField
                    type="outlined"
                    className="bg-slate-100 rounded-md p-2"
                    placeholder="Group Name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />
                <h1 className="text-2xl text-white">Add Members</h1>
                <div className="flex flex-col gap-2 m-2">
                    <ul className="cursor-pointer">
                        {props.processedChats.length > 0 && props.processedChats.map((cont, index) => (
                            <li
                                key={index}
                                className="m-2 p-1 rounded-md bg-slate-700 text-orange-400 flex items-center gap-4 max-h-10"
                                onClick={() => handleToggle(index)}
                            >
                                {/* Circular Checkbox */}
                                <input
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    checked={isChecked[index]}
                                    onChange={() => handleToggle(index)}
                                    className="hidden"
                                />
                                <label
                                    htmlFor={`checkbox-${index}`}
                                    className={`w-6 h-6 rounded-full border-2 border-orange-400 cursor-pointer flex items-center justify-center ${isChecked[index] ? 'bg-orange-400' : 'bg-transparent'}`}
                                >
                                    {isChecked[index] && (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    )}
                                </label>

                                <Image
                                    className="rounded-full"
                                    src={cont.profilePic}
                                    height={40}
                                    width={40}
                                    alt="Profile"
                                />

                                <h3 className="text-xl">{cont.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={handleCreateGroup}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Create Group
                </button>
            </div>
        </div>
    )
}
