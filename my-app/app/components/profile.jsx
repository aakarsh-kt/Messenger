"use client"
import React from "react";
import Image from "next/image";
export default function(){
    return(
        <div className="bg-orange-400 w-auto p-2 m-1 rounded-full flex items-center gap-2">
            <Image src={"/image5.jpeg"}  width={50} height={50} alt="Profile Picture" className="rounded-full"/>
            Hello
        </div>
    )
}
