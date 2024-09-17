"use client"
import React from "react";
import Image from "next/image";
export default function(props){
    return(
        <div className="bg-orange-400 w-auto p-2 m-1 max-h-14 rounded-full flex items-center gap-2">
            <Image src={props?.currDisplayUser?.pic}  width={50} height={50}  alt="Profile Picture" className="rounded-full"/>
            <h2>{props?.currDisplayUser?.name}</h2>
            {console.log(props?.currDisplayUser)}
        </div>
    )
}
