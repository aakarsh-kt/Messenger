"use client"
import React from "react";
import OtherMessage from "./otherMessage";
import MyMessage from "./myMessage";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useRef } from "react";
import { useState } from "react";

export default function (props) {
    const messagesEndRef = useRef(null);
    // const scrollableRef = useRef(null); // Ref for the scrollable container
    const [isUserAtBottom, setIsUserAtBottom] = useState(true);

    // Function to scroll to the bottom of the container
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
        // if (messagesEndRef.current) {
        //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        // }
    }, [props.chats]); 
    // Function to check if the user is at the bottom of the chat
    const handleScroll = () => {
        if (scrollableRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollableRef.current;
            // Check if the user is within a certain range of the bottom
            if (scrollTop + clientHeight >= scrollHeight - 50) {
                setIsUserAtBottom(true);
            } else {
                setIsUserAtBottom(false);
            }
        }
    };

    
    // useEffect(() => {
    //     if (isUserAtBottom) {
    //         scrollToBottom();
    //     }
    // }, [props.chats]);

 
    
    return (
        <PerfectScrollbar 
            // containerRef={(el) => {scrollableRef.current = el}} 
            // onScrollY={handleScroll}
        >
            <div className="rounded-2xl h-full m-2 p-2">
                {console.log(props.chats)}
                
                {props.chats?.map((msg, index) => {
                    // Check if the message sender is the current user
                    if (msg.sender === props.userId) {
                        return <MyMessage key={index} msg={msg.msg} />;
                    } else {
                        return <OtherMessage key={index} msg={msg.msg} />;
                    }
                })}
    
                {/* Dummy div to ensure smooth scrolling to bottom */}
                <div ref={messagesEndRef} />
            </div>
        </PerfectScrollbar>
    );
    
    
}
