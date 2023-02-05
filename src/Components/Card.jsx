import React from 'react'
import "../Assets/styles/Card.css"
import { Link } from 'react-router-dom'

export default function Card({ key, item }) {
  return (
    <Link to={"/logement/" + item.id} state={{ item }} className="card" id={key}>
        <img src={item.cover} alt="Logmement" />
        <h2 className='card-title'>{item.title}</h2>
    </Link>
  )
}
