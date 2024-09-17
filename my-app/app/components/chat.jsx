"use-client"

import React, { useContext } from "react";
import Profile from "./profile.jsx";
import { UserContext, useUser } from "../userContext.jsx";
import { TextField } from "@mui/material";
import Messages from "./messages.jsx";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default function(props) {
    const userContext = useUser();
    const [user, setUser] = React.useState(userContext);

    React.useEffect(() => {
        setUser(userContext);
    }, [userContext]);
    // const {user,setUser}=useContext(UserContext);
    const [messages, setMessages] = React.useState([
        { "msg": "Hi My Main man", "id": "1" },
        { "msg": "Hi my Nigga", "id": "2" },
        { "msg": "Who you calling Nigga", "id": "1" },
        { "msg": "Hi My Main man", "id": "1" },
        { "msg": "Hi my Nigga", "id": "2" },
        { "msg": "Who you calling Nigga", "id": "1" },
        { "msg": "Hi My Main man", "id": "1" },
       
        
        { "msg": "Who you calling Nigga", "id": "1" },
        { "msg": "Hi My Main man", "id": "1" },
        { "msg": "Hi my Nigga", "id": "2" },
        { "msg": "Who you calling Nigga", "id": "1" },
        // Add more messages here...
    ]);

    const [currMsg, setCurrMsg] = React.useState("");

    function handleChange(event) {
        setCurrMsg(event.target.value);
    }

    function handleSubmit(e) {
        if(currMsg.length>0)
       { const temp = { "msg": currMsg, "id": 1 };
        setMessages(messages.concat(temp));
        setCurrMsg("");}
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") handleSubmit();
    }

    return (
        <div className="bg-slate-800 flex flex-col h-full p-1 m-1 rounded-md">
            <Profile />
            {/* <PerfectScrollbar> */}
            <div className="flex-grow overflow-hidden">
                <Messages messages={messages} />
            </div>
            {/* </PerfectScrollbar>  */}
            <div className="flex items-center gap-2 mt-auto p-2 bg-slate-700">
                <TextField 
                    className="bg-slate-200 rounded-full w-full drop-shadow-md" 
                    id="outlined-basic" 
                    label="Message"
                    value={currMsg}
                    variant="outlined" 
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} 
                />
                <button className="bg-green-500 rounded-full p-2 m-2" onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </div>
    );
}
