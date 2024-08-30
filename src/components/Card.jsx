import React from "react";
import { BsCloudFill } from "react-icons/bs";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

const Card = ({ data }) => {
    console.log(data)
  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex justify-content-center flex-column gap-3 align-items-center">
        <p>Aug 30, 10:56 AM</p>
        <h2>{data.name}, {data.sys.country}</h2>
        <h1>
          <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} /> {data.main.temp} °C
        </h1>
        <p className="text-lg fw-bold">
          {data.weather[0].main}
        </p>
        <p>Humidity: {data.main.humidity} %</p>
        <p>Visibility: {parseInt(data.visibility) / 1000} km</p>
      </div>
    );
  } else {
    return (
        <h2>Loading...</h2>
    )
  }
};

export default Card;
