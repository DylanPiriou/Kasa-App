import React from 'react'
import "../Assets/styles/HousingInfos.scss"
import FullStar from "../Assets/logos/full-star.svg"
import EmptyStar from "../Assets/logos/empty-star.svg"
import Collapse from '../Components/Collapse'

export default function HousingInfos({ data }) {
    const rating =[1, 2, 3, 4, 5]
  return (
    <div className="housing-infos">

        <div className="top-infos">
            <div className="title-location-tags-container">
                <h2 className="housing-title">{data.title}</h2>
                <p className="housing-location">{data.location}</p>
                <div className="tags-box">
                    {data.tags.map((tag, index) => <button className="tag" key={"tag-" + index}>{tag}</button>)}
                </div>
            </div>
            <div className="host-stars-container">
                <div className="host-box">
                    <p className="host-name">{data.host.name}</p>
                    <img src={data.host.picture} className="host-picture" alt={data.host.name} />
                </div>
                <div className="stars-box">
                    {rating.map((score, index) => score >= data.rating ? (
                    <img src={EmptyStar} key={"star-" + index} alt="étoile grise"/>
                    ) :(
                    <img src={FullStar} key={"star-" + index} alt="étoile rouge"/>
                    ))}
                </div>
            </div>
        </div>

        <div className="collapse-infos">
            <Collapse title={"Description"} content={data.description}/>
            <Collapse title={"Equipements"} content={data.equipments.map((equipement, index) => {
                return <p className='housing-equipment' key={"equipement-" + index}>{equipement}</p>
            })}/>
        </div>

    </div>
  )
}
