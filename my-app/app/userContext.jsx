
"use client"
import { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

// Create the context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  // const auth = getAuth();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Current User:', currentUser?.email); 
      setUser(currentUser);
    });
    
    return () => unsubscribe();
  }, [auth]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
// import React, { createContext, useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// export const UserContext = createContext();

// export const UserProvider = ({ children, user, setUser }) => {
// //   const [user, setUser] = useState(null);
// //   const auth = getAuth();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });

// //     return () => unsubscribe();
// //   }, [auth]);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };