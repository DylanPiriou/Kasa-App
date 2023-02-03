import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from '../Assets/logos/kasa-nav-logo.svg'
import '../Assets/styles/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <img src={NavLogo} alt="Logo de Kasa" />
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
        </nav>
    </div>
  )
}
