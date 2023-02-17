import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from '../Assets/logos/kasa-nav-logo.svg'
import '../Assets/styles/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <NavLink to="/"><img src={NavLogo} alt="Logo de Kasa" /></NavLink>
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/a-propos">A Propos</NavLink>
        </nav>
    </div>
  )
}
