import React, {useContext} from 'react'
import { UserContext } from '../../context/userContext'

export default function Porte() {

const {currentUser} = useContext(UserContext)

  return (
      <div className="container p-5">
          <h1 className='display-3 text-dark mb-4'>
              {currentUser ? "Bienvenue vous êtes connecté !" : "Connectez vous !"}
          </h1>
      </div>
  )
}
