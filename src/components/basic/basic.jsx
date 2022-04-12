import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Home from '../../pages/private/home/Home';
import {Settings} from '@material-ui/icons';
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { signOut } from 'firebase/auth'
import {auth} from "../../firebase-config"

export default function BasicMenu() {

  let Navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/localisation`; 
    Navigate(path);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {toggleModals, toggleNavBar, toggleUser} = useContext(UserContext)
  const navigate = useNavigate()

  const logOut = async () => {
      try {
          await signOut(auth)
          Navigate("/")
          toggleUser("deco")
      } catch {
          alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
      }
  }

  const inscription = async () => {
    try {
        Navigate("/private/home/inscription")
    } catch {
        alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
    }
}


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="parameter"
      >
        <Settings className='paramater'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={inscription}>Créer un compte</MenuItem>
        <MenuItem onClick={logOut}>Se déconnecter</MenuItem>
      </Menu>
    </div>
  );
}
