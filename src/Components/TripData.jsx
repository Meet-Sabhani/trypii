import React from 'react'
import './TripStyle.css'

const TripData = (props) => {
  return (
    <div className='t-cart'>
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default TripData
