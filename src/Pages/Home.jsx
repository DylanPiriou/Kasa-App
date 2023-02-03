import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import BackgroundHome from '../Assets/imgs/home-bg.jpg'
import { useState } from 'react'

export default function Home() {
  const [title] = useState("Chez vous, partout est ailleurs")
  return (
    <div className="home">
      <Navbar/>
      <Banner bg={BackgroundHome} title={title}/>
    </div>
  )
}
