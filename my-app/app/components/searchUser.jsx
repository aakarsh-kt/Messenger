"use client"

import { TextField } from "@mui/material"
import Image from "next/image";
import React from "react"

export default function(props){
    const [search,setSearch]=React.useState("");
    function moreSearch(e){
        setSearch(e.target.value);
        props.handleSearch(e.target.value);
    }
    return (
        <div className="h-full m-2 p-2  bg-slate-900 flex flex-col items-center w-96 py-10">
            <TextField id="outlined-basic" label="Username" 
                value={search}
                // onChange={(e)=>setSearch(e.target.value)}
                onChange={(e)=>moreSearch(e)}
            variant="outlined" className="bg-slate-100 rounded-md  p-2" />
            {console.log(props.searchAnswers)}
            <button
                onClick={()=>props.handleSearch(search)}
             className="bg-orange-400 rounded-md p-2 m-2">Search</button>
             {props.searchAnswers.length>0 && props.searchAnswers.map((ans,index)=>{
                 return <div key={index} 
                    onClick={()=>props.searchChat(ans.id)}
                 className="bg-orange-500 rounded-md p-2 cursor-pointer m-2 flex flex-row items-center gap-2 text-white w-full max-h-14">
                    <Image src={ans.data.profilePicture} width={30} height={30}   alt="Profile"  className="rounded-full"/>
                    {ans.data.name}
                    </div>
             })}
        </div>
    )
}