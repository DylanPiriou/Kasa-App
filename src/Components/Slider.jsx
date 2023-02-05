import React, { useState } from 'react'
import "../Assets/styles/Slider.css"

export default function Slider({ data }) {
    const [currentImg, setCurrentImg] = useState(0);

    const handlePrev = () => {
        currentImg === 0 ? setCurrentImg(data.pictures.length - 1) : setCurrentImg(currentImg - 1)
    }
    const handleNext = () => {
        currentImg === data.pictures.length - 1 ? setCurrentImg(0) : setCurrentImg(currentImg + 1)
    }

  return (
    <div className="slider">
        <img src={data.pictures[currentImg]} className="slider-img" alt={data.title}/>
        {data.pictures.length > 1 &&
        <>
        <i className="fa-solid fa-chevron-left" onClick={() => handlePrev()}></i>
        <i className="fa-solid fa-chevron-right" onClick={() => handleNext()}></i>
        <span className='slider-img-number'>{currentImg + 1}/{data.pictures.length}</span>
        </>
        }
    </div>
  )
}
