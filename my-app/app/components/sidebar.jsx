"use client";
import Image from "next/image";
import React from "react";

export default function(props){
//    const modArray=props.contact.map()
    
    return(
        <div className="bg-blue-400 w-1/4 p-2 m-1 h-full rounded-md">
         
            <div className="flex flex-row justify-around">
                <input className="rounded-md p-1 m-2 w-3/4" placeholder="Search" ></input>
                <button className="bg-blue-500 p-2 m-2 rounded-lg hover:bg-blue-300">Go</button>
                
            </div>
            <ul className="cursor-pointer " >
                {props.contact.map((cont,index)=>{
                  
                  return  <li key={index}  className="m-2 p-1 rounded-md bg-orange-300" onClick={()=>props.selectContact(index)}>
                    <div className="flex justify-between">
                     <Image  className="rounded-full" src="/image4.jpg" width={50} height={50} alt="Profile"/>
                    
                    <h3 className="text-xl">{cont.name}</h3>
                    <p>{cont.time.slice(0,10)}</p>
                    </div>
                    </li>
                })}
                {/* <li onClick={() => console.log("Contact 1 clicked")}>Contact 1</li>
                <li>Contact 2</li> */}
                
            </ul>
        </div>
    )
}