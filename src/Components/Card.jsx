import React from 'react'
import "../Assets/styles/Card.css"
import { Link } from 'react-router-dom'

export default function Card({ key, item }) {
  return (
    <Link to="" className="card" id={key}>
        <img src={item.cover} alt="Image de maison" />
        <h2 className='card-title'>{item.title}</h2>
    </Link>
  )
}
