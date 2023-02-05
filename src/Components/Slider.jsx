import React from 'react'
import "../Assets/styles/Slider.css"

export default function Slider({ data }) {
  return (
    <div className="slider">
        <img src={data.pictures[0]} className="slider-img" alt="Logement"/>
        <i className="fa-solid fa-chevron-left"></i>
        <i className="fa-solid fa-chevron-right"></i>
        <span className='slider-img-number'>N°img/total</span>
    </div>
  )
}
