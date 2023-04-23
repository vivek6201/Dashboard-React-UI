import React from 'react'
import "./Card.css"

const Card = ({startTiming,data,topic}) => {
  return (
    <div className="details">
          <p>{topic}</p>
          <div className="data-chart">
            <div className="left">
              {data.map((obj, index) => {
                return (
                  <div key={index}>
                    <p>{obj.value}</p>
                    <p>{obj.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="right">
              <div className="direction">
                <p>Start:</p>
                {startTiming.map(({ image, data }) => {
                  return (
                    <div className="date" key={data}>
                      <img src={image} />
                      <p>{data}</p>
                    </div>
                  );
                })}
              </div>
              <div className="direction">
                <p>End:</p>
                {startTiming.map(({ image, data }) => {
                  return (
                    <div className="date" key={data}>
                      <img src={image} />
                      <p>{data}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card