import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import BackgroundAbout from '../Assets/imgs/about-bg.jpg'

export default function About() {
  return (
    <div className="about">
      <Navbar/>
      <Banner bg={BackgroundAbout} />
    </div>
  )
}
