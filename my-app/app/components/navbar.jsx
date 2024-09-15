"use client";
import React from "react";
import Image from "next/image";
// import {Avatar} from "@nextui-org/react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";

    // <div className="flex gap-3 items-center">
    //   
      
    //   <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
    //   <Avatar name="Jane" />
    //   <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
    //   <Avatar name="Joe" />
    // </div>

export default function () {

    return (
        <div className="bg-red-400 dark:bg-orange-400  flex flex-row justify-between items-center p-2">
            {/* <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"  className="rounded-md"/> */}
            <Image 
            src="/image10.jpg"
            height={50}
            width={50}
            priority={true}
            alt="Profile Picture"
            className="rounded-full m-1"
            />
            <Avatar name="Giga" />
            <h1 className="mx-auto font-bold text-4xl font-mono">Texter</h1>
            <ul className="flex flex-row justify-between gap-2 ">
                <li><button className="hover:bg-orange-500 rounded-md p-1">Home</button></li>
                <li><button className="hover:bg-orange-500 rounded-md p-1">Logout</button></li>
            </ul>
        </div>
    )
}