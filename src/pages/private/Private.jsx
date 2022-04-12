import React, {useContext} from 'react'
import { UserContext } from '../../context/userContext'
import {Outlet, useLocation, Navigate} from "react-router-dom"

import "./Private.css"

export default function Private() {

    const {currentUser} = useContext(UserContext)
    console.log("PRIVATE", currentUser);

    if (!currentUser) {
        return <Navigate to="/" />
    }

  return (
    <div className='Private'>
        <Outlet/>
    </div>
  )
}
