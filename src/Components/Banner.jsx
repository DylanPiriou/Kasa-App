import React from 'react'
import '../Assets/styles/Banner.scss'

export default function Banner({ bg, title }) {
  return (
    <div className="banner">
        <img src={bg} className='banner-img' alt="nature" />
        <h1 className='banner-title'>{title}</h1>
    </div>
  )
}
