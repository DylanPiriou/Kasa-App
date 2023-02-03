import React from 'react'
import "../Assets/styles/Footer.css"
import LogoFooter from "../Assets/logos/kasa-footer-logo.svg"

export default function Footer() {
  return (
    <footer>
        <img src={LogoFooter} alt="Logo Kasa" />
        <p className='footer-text'>© 2023 Kasa. All rights reserved</p>
    </footer>
  )
}