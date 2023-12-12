import React from 'react'
import './Box.css'

const Box = (props) => {
  return (
    <div className='cardContainer' style={{flexDirection: props.just}} >
      <div className="card1">
        <img src={props.image}/>
      </div>
      <div className="card2">
        <h4>{props.heading}</h4>
        <p>{props.p} <span> {props.sp}</span></p>
      </div>
    </div>
  )
}

export default Box
