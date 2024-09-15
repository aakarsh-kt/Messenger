"use-client"

import React from "react"

export default function(props){
    return(
        <div className="bg-slate-800 w-auto">
            Hello {props.contact[props.currChat].name};
        </div>
    )
}