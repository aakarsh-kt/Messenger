// "use client"
import React from "react"
// import { UserProvider } from './userContext';
import './globals.css'
import App from "./App.jsx"
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "./firebase";
export default function(){
  // const auth = getAuth();
  // const [user, setUser] = useState("");

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   // console.log(userFirebase);
  //   return () => unsubscribe();
  // }, []);
  // const [playerInfo, setPlayerInfo] = useState(null);
  // useEffect(() => {
  //   async function getDocumentsByQuery(collectionName, field, operator, value) {
  //     if (value != undefined) {
  //       console.log(value);
  //       const q = query(
  //         collection(db, collectionName),
  //         where(field, operator, value)
  //       );
  //       const querySnapshot = await getDocs(q);
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());
  //         setPlayerInfo(doc.data());
  //       });
  //     }
  //   }

  //   getDocumentsByQuery("Users", "email", "==", user?.email);
  // }, [user]);

  return(
    
    // <UserProvider user={playerInfo} setUser={setPlayerInfo}>
    <div>
      <App/>
    </div>
    // </UserProvider>
  )
}