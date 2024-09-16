import React from "react"
import { UserProvider } from './userContext';
import './globals.css'
import App from "./App.jsx"
export default function(){
  return(
    
    <UserProvider>
    <div>
      <App/>
    </div>
    </UserProvider>
  )
}