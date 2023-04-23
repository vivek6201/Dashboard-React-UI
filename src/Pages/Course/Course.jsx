import { useState } from "react";
import "./Course.css";
import documentSvg from "../../assets/document.svg";
import videoCamSvg from "../../assets/videocam.svg";
import infoCircle from "../../assets/information-circle 1.svg"
import playCircle from "../../assets/play-circle.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Course = () => {
  
  const tabContent = [
    {
      title: "SESSION PLAN",
      image: infoCircle,
    },
    {
      title: "PRE-WATCHED VIDEOS",
      image: playCircle,
    },
    {
      title: "SESSION RECORDING",
      image: videoCamSvg,
    },
    {
      title: "REFERENCES",
      image: documentSvg,
    },
  ]

  return (
    <div className="course">
      <div className="container">
        <div className="topic">
          <p>Python Loops</p>
          <p className="timing">15 December 2021, Thursday</p>
          <span>Daily Feedback</span>
        </div>

        <Tabs defaultIndex={0}>
          <TabList className="tab-title-list">
            {
              tabContent.map( ({title}) =>{
                return <Tab key={title} className={"tab-title"} selectedClassName={"activeTab"}>{title}</Tab>
              })
            }
          </TabList>

          <TabPanel selectedClassName="tab-body">
            <p>Sesion Plan</p>
            <p>Live Session is about to start.</p>
            <button>Join Now</button>

            <span>Sub Topic</span>
            <ol>
              <li>Filtering Dataframe.</li>
              <li>Usage of loc and iloc functions.</li>
              <li>Sorting and Indexing Dataframe.</li>
            </ol>

            <span>Session Details</span>
          </TabPanel>
          <TabPanel  selectedClassName="tab-body">
            <p>helo</p>
          </TabPanel>
          <TabPanel selectedClassName="tab-body">
            <p>Helo3</p>
          </TabPanel>
          <TabPanel selectedClassName="tab-body">
            <p>Helo4</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Course;
