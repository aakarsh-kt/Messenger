"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
export default function(props){
    return(
        <div className="bg-[#003049] w-auto p-2 m-2 cursor-pointer max-h-14 rounded-full flex items-center gap-2 justify-between">
            <Image src={props?.currDisplayUser?.pic?props?.currDisplayUser?.pic:"/profile-icon.png"}  width={50} height={50}  alt="Profile Picture" className="rounded-full"/>
            <h1 className="text-orange-400 text-2xl">{props?.currDisplayUser?.name}</h1>
            {/* {console.log(props?.currDisplayUser)} */}
            <div className="flex gap-2">
            <IconButton
             onClick={props.handleVideoCall}
        color="primary"
        aria-label="Voice Call"
        style={{ backgroundColor: '#4CAF50', color: 'white' }}
      >
        <PhoneIcon />
      </IconButton>
      <IconButton
        onClick={props.handleVideoCall}
        color="primary"
        aria-label="Video Call"
        style={{ backgroundColor: '#2196F3', color: 'white' }}
         >
        <VideocamIcon />
      </IconButton>
      </div>
        </div>
    )
}
