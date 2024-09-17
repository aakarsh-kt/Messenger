"use client"
import React from "react";
import OtherMessage from "./otherMessage";
import MyMessage from "./myMessage";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default function (props) {
    const id = 1;

    return (
        <div className="bg-green-500 rounded-2xl h-full">
            <PerfectScrollbar option={{ suppressScrollX: true }}>
                <div className="p-2">
                    {props.messages.map((msg, index) => {
                        if (msg.id == 1) {
                            return <MyMessage key={index} msg={msg.msg} />;
                        } else {
                            return <OtherMessage key={index} msg={msg.msg} />;
                        }
                    })}
                </div>
            </PerfectScrollbar>
        </div>
    );
}
