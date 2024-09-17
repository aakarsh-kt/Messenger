"use client"
import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import { auth, provider } from "../firebase.js";

import Link from "next/link.js";
import { UserContext,useUser } from '../userContext';
import {  useRouter } from "next/navigation.js";
export default function () {
  // const navigate = useNavigate();
  
  // const {user, setUser} = useContext(UserContext);

  // if(user==null)
  //   console.log("Empty Box")
  const userContext=useUser();
  const [user,setUser]=React.useState(userContext);
  const router=useRouter();
  useEffect(()=>{
    setUser(userContext);
  
},[userContext])
  //   if(useUser() && user==null)
  //       setUser(useUser());
  // const {user,setUser}=useContext(UserContext);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const tempUser = result.user;
        console.log("User info:", tempUser);
        router.push("/");
        // navigate("/landing?use  r=");
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
      // window.location.reload();
  };
  async function login(event) {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        info.username,
        info.password
      );
      // navigate("/landing?user=" + user.user.email);
      console.log(user.user.email);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  const [info, setInfo] = React.useState({ username: "", password: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  // useEffect(() => {
  //   // This will only run on the client side
  //   console.log(router.pathname);
  // }, [router]);
  // React.useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     // console.log(currentUser.email);
  //     setUser(currentUser);

  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <div className="w-screen  items-center flex flex-col justify-between h-screen bg-slate-600">
	<NavBar className="my-0 "/>     
  {
    // console.log(user)
  }
  {/* <div className="flex flex-col justify-evenly items-center h-"> */}
 <h1 className="text-6xl text-center font-bold text-white">Login</h1>
      <form className="flex flex-col justify-evenly">
        <label htmlFor="username" className="text-white">Username</label>
        <input
          className="size-10 w-60 h-10 bg-white  rounded-md"
          type="text"
          id="username"
          name="username"
          required
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="password" className="text-white">Password</label>
        <input
          className="size-10 w-60 h-10 bg-white  rounded-md"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
        ></input>
        <br />
        <button type="submit" 
        onClick={login}
        className="size-8 w-40 ml-10 h-10 bg-cyan-500  rounded-md" >Login</button>
        {/* {user?.email} */}
      </form>
      <div className="flex flex-col items-center">
          <h1 className="text-2xl text-white font-bold">Sign In with Google</h1>

          <img
            src="/googleSignInLogo.png"
            onClick={signInWithGoogle}
            className="bg-white w-10 h-10 cursor-pointer border rounded-full"
          />
        </div>
      <div className="flex flex-col text-white items-center gap-2">
          <h3>Don't have an account, Sign up now</h3>
          <Link href="/register">
          <Button
          
            className="text-cyan-400" >
            Register
          </Button>
          </Link>
      </div>
      {/* <Button 
      // onClick={logout}
       type="primary" className="">
        Logout
      </Button> */}

  
      {/* </div> */}
    </div>
  );
}