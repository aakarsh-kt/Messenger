"use client"

import React from "react"

import Navbar from "../components/navbar"
import { useUser } from "../userContext"
import { useState } from "react"
import { useEffect } from "react"
import SearchUser from "../components/searchUser"

export default function(){
    const userContext=useUser();
    const [user,setUser]=useState(userContext);
    useEffect(()=>{
        setUser(userContext);
    },[userContext])
    return (
        <div className="flex flex-col ">
        <Navbar />
        <SearchUser/>
        </div>
    )
}