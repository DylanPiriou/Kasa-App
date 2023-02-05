import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../Components/Navbar"
import Slider from '../Components/Slider';

export default function Housing() {
    const location = useLocation();
    const { item } = location.state;
  return (
    <div className="housing">
        <Navbar/>
        <Slider data={item} />
    </div>
  )
}
