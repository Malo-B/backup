import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { signOut } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {auth} from "../../firebase-config"
import { Button } from 'react-bootstrap';

import "./Navbar.css"

export default function Navbar () {

    const {toggleModals, barState, toggleUser, } = useContext(UserContext)
    const navigate = useNavigate()

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/")
            toggleUser("deco")
        } catch {
            alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
    }

    return (
        <>
        {barState.Navbar && (
            <nav className='navbar'>
                <Link to ="/private/home" className='navbar-brand' onClick={() => toggleUser("co")}>
                    <img src="https://isen-brest.fr/wp-content/uploads/2016/06/logo-isen-yncrea-BD-1.jpg" className='photo'/>
                    Salle des serveurs ISEN Brest
                </Link>

                <div className='button-group'>
                    <button className='btn btn-primary ms-2' onClick={() => toggleModals("signIn")}>Se connecter</button>
                </div>
            </nav>
            )}
    </>
  )
}

//           <button className='btn btn-danger ms-2' onClick={logOut}>Se déconnecter</button>
//                     <button className='btn btn-primary' onClick={() => toggleModals("signUp")}>S'inscrire</button>