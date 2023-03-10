import React from 'react'
import "../Assets/styles/Card.scss"
import { Link } from 'react-router-dom'

export default function Card({ item }) {
  return (
      <Link to={`/logement/${item.id}`} state={{ item }} className="card">
          <img src={item.cover} alt={item.title} />
          <h2 className='card-title'>{item.title}</h2>
      </Link>
  )
}
