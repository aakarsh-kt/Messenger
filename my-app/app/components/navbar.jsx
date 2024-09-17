"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { UserContext, useUser } from "../userContext";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";



export default function () {
    // const {user,setUser}=useContext(UserContext);
    const userContext=useUser();
    const [user,setUser]=useState(userContext);
    // if(useUser() && user==null)
    //     setUser(useUser());
    // else if(!useUser() && user?.user!=null)
    //     setUser(null);

    // function updateCurrentUser(){
    //     const temp=useUser();
    //     setUser(temp);
    // }
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

    // React.useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //       // console.log(currentUser.email);
    //       setUser(currentUser);
    
    //     });
    //     return () => unsubscribe();
    //   }, []);


  
    async function logout() {
        await signOut(auth);
      }
    return (
        <div className="bg-slate-400 dark:bg-orange-400 w-screen flex flex-row justify-between items-center my-0 p-2">
            {/* {console.log(user)}
            {console.log(playerInfo)} */}
           
            {/* <Image
                src="/image10.jpg"
                height={50}
                width={50}
                priority={true}
                alt="Profile Picture"
                className="rounded-full m-1"
            /> */}
              {user!=="" && user!=undefined && < Image className='right-0  w-20 h-20 rounded-full p-2 cursor-pointer'
               src={playerInfo?.profilePicture}
               width={50}
               height={50}
               alt="Profile"
            //    onClick={()=>router.push("/profile")}
               />}
            {/* {console.log(user)} */}
            <h3>{playerInfo?.name} </h3> 
            <h1 className="mx-auto font-bold text-4xl font-mono">Texter</h1>
            <ul className="flex flex-row justify-between gap-2 ">
                <Link href="/">
                    <li><button className="hover:bg-orange-500 rounded-md p-1">Home</button></li>
                </Link>

                {user==null || user?.user?.email==null?
                 <Link href="/login">
                    <li><button className="hover:bg-orange-500 rounded-md p-1">Login</button></li>
                </Link>
                :
                
                <li><button className="hover:bg-orange-500 rounded-md p-1" onClick={logout}>Logout</button></li>
                
                }

            </ul>
        </div>
    )
}