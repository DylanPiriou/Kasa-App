import React, { useState } from 'react'
import "../Assets/styles/Collapse.css"

export default function Collapse({ data, index }) {
    const [isActive, setIsActive] = useState(false)
    
    const handleCollapse = () => {
        setIsActive(!isActive)
    }

  return (
    <div className="collapse" id={index}>
       <button className='collapse-btn' onClick={() => handleCollapse()}>
        <h2 className='collapse-title'>{data.title}</h2>
        {isActive ? <i className="fa-solid fa-chevron-up"></i>
        : <i className="fa-solid fa-chevron-down"></i>}
        
       </button>
       {isActive && <div className="collapse-content">{data.content}</div>}
    </div>
  )
}
