import React from 'react'
import "./Card.scss"
export default function Card(props) {
    return (
        <div className='card-container'>
            <h1 className='blue-text'>{props.name}</h1>
            <div className='blue-text profession-font'><b>תחום מומחיות:</b> {props.profession}</div>
            <br/>
            <div><b>מס' רופא</b>: {props.id}</div>
            <div>{props.name} נותן/ת שירות במרפאות:</div>
            <div><span className='blue-text'>
            <b>{props.city} | </b></span>{props.address}, {props.city}</div>
            <br/>
            <hr/>
        </div>
    )
}
