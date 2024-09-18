"use client"

import React from "react"
import navbar from "../components/navbar"
import Navbar from "../components/navbar"
import { useUser } from "../userContext"
import { useState } from "react"
import { useEffect } from "react"

export default function(){
    const userContext=useUser();
    const [user,setUser]=useState(userContext);
    useEffect(()=>{
        setUser(userContext);
    },[userContext])
    return (
        <Navbar user={user}/>

    )
}