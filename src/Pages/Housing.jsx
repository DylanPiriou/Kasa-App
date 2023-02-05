import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import HousingInfos from '../Components/HousingInfos';
import Navbar from "../Components/Navbar"
import Slider from '../Components/Slider';
import Collapse from '../Components/Collapse'

export default function Housing() {
    const location = useLocation();
    const { item } = location.state;

  return (
    <div className="housing">
        <Navbar/>
        <Slider data={item} />
        <HousingInfos data={item}/>
        <Collapse title={"Description"} content={item.description}/>
        <Collapse title={"Equipements"} content={item.equipments.map(equipement => {
            return <p>{equipement}</p>
        })}/>
    </div>
  )
}
