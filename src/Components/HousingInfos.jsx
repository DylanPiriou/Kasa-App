import React from 'react'
import "../Assets/styles/HousingInfos.css"
import FullStar from "../Assets/logos/full-star.svg"
import EmptyStar from "../Assets/logos/empty-star.svg"

export default function HousingInfos({ data }) {
    const rating =[1, 2, 3, 4, 5]
  return (
    <div className="housing-infos">
        <div className="top-infos">
            <div className="title-location">
                <h2 className="housing-title">{data.title}</h2>
                <p className="housing-location">{data.location}</p>
            </div>
            <div className="host">
                <p className="host-name">{data.host.name}</p>
                <img src={data.host.picture} className="host-picture" alt={data.host.name} />
            </div>
        </div>
        <div className="middle-infos">
            <div className="tags-box">
                {data.tags.map(tag => <button className="tag">{tag}</button>)}
            </div>
            <div className="stars-box">
                {rating.map(score => score >= data.rating ? (
                    <img src={EmptyStar} alt="étoile grise"/>
                ) :(
                    <img src={FullStar} alt="étoile rouge"/>
                ))}
            </div>
        </div>
    </div>
  )
}
