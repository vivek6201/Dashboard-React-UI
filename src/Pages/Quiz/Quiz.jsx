import React from 'react'
import Card from '../../Components/Card/Card';
import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock-blue.svg";
import "./Quiz.css"

const Quiz = () => {

  const data = [
    {
      name: "Questions",
      value: "10",
    },
    {
      name: "Duration",
      value: "-",
    },
    {
      name: "Total Score",
      value: "125",
    },
  ];

  const startTiming = [
    {
      image: calendar,
      data: "20 December 2021",
    },
    {
      image: clock,
      data: "07:30 PM",
    },
  ];

  return (
    <div className='quiz'>
      <div className="container">
        <div className='topic'>
          <p>Quiz 1: Data Types</p>
          <p className="timing">15 December 2021, Thursday</p>
        </div>
        <Card data={data} startTiming={startTiming} topic={"Quiz Details"}/>
      </div>
    </div>
  )
}

export default Quiz