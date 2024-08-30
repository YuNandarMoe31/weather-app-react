import React from 'react'
import { BsCloudFill } from "react-icons/bs";
import { BsArrowDownRightCircleFill  } from "react-icons/bs";

const Card = () => {
  return (
    <div className='d-flex justify-content-center flex-column gap-3 align-items-center'>
      <p>Aug 30, 10:56 AM</p>
      <h2>Maebashi, JP</h2>
      <h1>
        <BsCloudFill /> 25°C
      </h1>
      <p className="text-md"><BsArrowDownRightCircleFill  /> 0.0m/s NW</p>
      <p>Humidity:
      92%</p>
      <p>Dew point:
      25°C</p>
    </div>
  )
}

export default Card
