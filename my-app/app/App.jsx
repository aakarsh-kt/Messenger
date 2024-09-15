"use client"
import React from "react"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Chat from "./components/chat";
import Split from "react-split";
// import './globals.css'
export default function(){
  const contact=[
    {
      "name":"Giga Don",
      "msg":"Peene CHale"
    },
    {
      "name":"Dimli",
      "msg":"Fookne CHale"
    },
    {
      "name":"Simlim",
      "msg":"Tahalne CHale"
    }
  ];
  const [currChat,setCurrChar]=React.useState(0);
  function selectContact(index){
    setCurrChar(index);
    // console.log(cont.name);
}
  return(
    <div className="h-screen flex flex-col flex-1">
      <Navbar/>
      
      <Split sizes={[30,70]} direction="horizontal" className="flex h-full">
      <Sidebar contact={contact}
        selectContact={selectContact}
        />
      <Chat contact={contact}
        currChat={currChat}/>
     
     </Split>
     
    </div>
  )
}