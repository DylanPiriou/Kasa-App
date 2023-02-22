import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Components/Footer';
import HousingInfos from '../Components/HousingInfos';
import Navbar from "../Components/Navbar"
import Slider from '../Components/Slider';
import "../Assets/styles/Housing.scss"


export default function Housing() {
    const location = useLocation();
    const { item } = location.state;
    console.log(item)

  return (
    <div className="housing">
        <Navbar/>
        <Slider data={item} />
        <HousingInfos data={item}/>
        <Footer/>
    </div>
  )
}
