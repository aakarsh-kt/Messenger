"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { UserContext, useUser } from "../userContext";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";



export default function () {
   
    const userContext=useUser();
    const [user,setUser]=useState(userContext);

    useEffect(()=>{
        setUser(userContext);
      
    },[userContext])
    const [playerInfo, setPlayerInfo] = useState(null);
  
  useEffect(() => {
    async function getDocumentsByQuery(collectionName, field, operator, value) {
      if (value != undefined) {
        // console.log(value);
        const q = query(
          collection(db , collectionName), 
          where(field, operator, value)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          setPlayerInfo(doc.data());
        });
      }
    }

    getDocumentsByQuery("Users", "email", "==", user?.user?.email);
  }, [user]);

  
  
    async function logout() {
        await signOut(auth);
        window.location.reload();
      }
    return (
        <div className="bg-orange-400 w-screen flex flex-row justify-between items-center my-0 p-2">
          
           
              {user!=="" && user!=undefined && < Image className='right-0  w-20 h-20 rounded-full p-2 cursor-pointer'
               src={playerInfo?.profilePicture}
               width={50}
               height={50}
               alt="Profile"
            //    onClick={()=>router.push("/profile")}
               />}
            {/* {console.log(user)}
            {console.log(playerInfo)} */}
            <h1 className="text-2xl">{playerInfo?.name} </h1> 
            <h1 className="mx-auto font-bold text-4xl font-mono ">Texter</h1>
            <ul className="flex flex-row justify-between gap-2 text-2xl">
                <Link href="/">
                    <li><button className="hover:bg-orange-300 rounded-md p-3  hover:text-white ease-in-out transform hover:shadow-lg hover:shadow-slate-500/50 hover:scale-110">Home</button></li>
                </Link>

                {user==null || user?.user?.email==null?
                 <Link href="/login">
                    <li><button className="hover:bg-orange-300 rounded-md p-3 hover:text-white ease-in-out transform hover:shadow-lg hover:shadow-slate-500/50 hover:scale-105">Login</button></li>
                </Link>
                :
                
                <li><button className="hover:bg-orange-300 rounded-md p-3 hover:text-white ease-in-out transform hover:shadow-lg hover:shadow-slate-500/50 hover:scale-105" onClick={logout}>Logout</button></li>
                
                }

            </ul>
        </div>
    )
}