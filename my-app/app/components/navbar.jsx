"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { useUser } from "../userContext";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";



export default function () {
    const [user,setUser]=React.useState(null);
    if(useUser() && user==null)
        setUser(useUser());
    else if(!useUser() && user?.user!=null)
        setUser(null);

    // function updateCurrentUser(){
    //     const temp=useUser();
    //     setUser(temp);
    // }
    // useEffect(()=>{
    //     updateCurrentUser();
      
    // },[useUser(),user])
  


  
    async function logout() {
        await signOut(auth);
      }
    return (
        <div className="bg-slate-400 dark:bg-orange-400 w-screen flex flex-row justify-between items-center my-0 p-2">
            {console.log(user)}
           
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
                <Link href="/">
                    <li><button className="hover:bg-orange-500 rounded-md p-1">Home</button></li>
                </Link>

                {user==null || user?.user==null?
                 <Link href="/login">
                    <li><button className="hover:bg-orange-500 rounded-md p-1">Login</button></li>
                </Link>
                :
                
                <li><button className="hover:bg-orange-500 rounded-md p-1" onClick={logout}>Logout</button></li>
                
                }

            </ul>
        </div>
    )
}