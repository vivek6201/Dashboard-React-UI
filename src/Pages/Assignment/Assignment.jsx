import "./Assignment.css";
import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock-blue.svg";
import Card from "../../Components/Card/Card";

const Assignment = () => {
  const data = [
    {
      name: "Problems",
      value: "3",
    },
    {
      name: "Total Score",
      value: "100",
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
    <div className="assignment">
      <div className="ass-container">
        <div className="ass-topic">
          <div className="topic-title">
            <p>Assignment - 1: Operators | Loops </p>
            <p className="timing">20 December 2021, Thursday</p>
          </div>
          <div className="topic-data">
            {data.map((obj, index) => {
              return (
                <div key={index}>
                  <p>{obj.value}</p>
                  <p>{obj.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Card startTiming={startTiming} data={data} topic={"Assignment Details"}/>
      </div>
    </div>
  );
};

export default Assignment;
