import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../Components/Navbar"

export default function Housing() {
    const location = useLocation();
    const { item } = location.state;
  return (
    <div className="housing">
        <Navbar/>
    </div>
  )
}
