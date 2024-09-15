"use client";
import React from "react";

export default function(props){
   
    
    return(
        <div className="bg-blue-400 w-1/4 p-2 m-1 rounded-md">
         
            <div>
                <input className="rounded-md p-1 m-2 w-3/4" placeholder="Search" ></input>
                <button>Go</button>
                
            </div>
            <ul className="cursor-pointer" >
                {props.contact.map((cont,index)=>{
                  
                  return  <li key={index} onClick={()=>props.selectContact(index)}>{cont.name}</li>
                })}
                <li onClick={() => console.log("Contact 1 clicked")}>Contact 1</li>
                <li>Contact 2</li>
                
            </ul>
        </div>
    )
}