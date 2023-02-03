import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import "../Assets/styles/NotFound.css"

export default function NotFound() {
  return (
    <div className="notfound">
      <Navbar/>
      <div className="notfound-content">
        <span className='error-number'>404</span>
        <h2 className='error-message'>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <Link to="/" className="goback-home">Retourner sur la page d'accueil</Link>
    </div>
  )
}
