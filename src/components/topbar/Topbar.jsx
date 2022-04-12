import React from 'react';
import "./topbar.css";
import BasicMenu from '../basic/basic';
import {NotificationsNone, Language} from '@material-ui/icons';
import { useContext } from "react"
import { UserContext } from "../../context/userContext";

export default function Topbar() {

    const { barState } =useContext(UserContext);

  return (
    <>
    {barState.Topbar && (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Supervision de la salle des serveurs</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <BasicMenu/>
                    <span className='topbarIconBag'></span>
                    </div>
                    <img src="https://www.codeur.com/system/user_profiles/avatars/000/387/635/large/avatar.jpg?1587463526" alt="" className='topAvatar'/>
                </div>
            </div>
        </div>
        )}
        </>
  )
}
