import React from 'react'
import '../Assets/styles/GridCards.css'
import Data from "../Data/data.json"
import Card from './Card'

export default function GridCards() {
  return (
    <div className="grid-cards">
        {Data.map((item, index) => {
            return <Card key={index} item={item}/>
        })}
    </div>
  )
}
