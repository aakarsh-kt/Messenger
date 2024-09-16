"use-client"

import React from "react"
import Profile from "./profile.jsx"
export default function(props){
    return(
        <div className="bg-slate-800 w-auto m-1 p-1 flex flex-col rounded-md">
            <Profile/>
            Hello {props.contact[props.currChat].name};
        </div>
    )
}