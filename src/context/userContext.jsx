import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

import SignInModal from "../components/modals/SignInModal";
import SignUpModal from "../components/modals/SignUpModal";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Chart from "../components/chart/Chart";

export const UserContext = createContext()

export function UserContextProvider(props) {

  const signUp = (email,pwd) => createUserWithEmailAndPassword(auth, email,pwd)
  const signIn = (email,pwd) => signInWithEmailAndPassword(auth, email,pwd)

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })

    return unsubscribe;

  }, [])

  const [modalState, setModalState] = useState({
    SignUpModal: false,
    SignInModal: false
  })

  const [barState, setBarState] = useState({
    Sidebar: false,
    Topbar: false,
    Navbar: true
  })


  const toggleUser = user =>{
    if (user === "deco") {
      setBarState({
        Sidebar: false,
        Topbar: false,
        Navbar: true
      })
    }
    if (user === "co") {
      setBarState({
        Sidebar: true,
        Topbar: true,
        Navbar: false
      })
    }
  }


  const toggleModals = modal => {
    if(modal === "signIn") {
      setModalState({
        SignUpModal: false,
        SignInModal: true
      })
    }
    if(modal === "signUp") {
      setModalState({
        SignUpModal: true,
        SignInModal: false,
      })
    }
    if(modal === "close") {
      setModalState({
        SignUpModal: false,
        SignInModal: false
      })
    }
  }
  console.log(signIn[0])

  return (
    <UserContext.Provider value={{modalState, toggleModals, signUp, currentUser, signIn,barState, toggleUser }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}