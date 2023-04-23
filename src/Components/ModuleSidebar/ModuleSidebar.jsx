import { NavLink, useLocation } from "react-router-dom";
import loopImg from "../../assets/topic.svg";
import activeloopImg from "../../assets/activeTopic.svg";
import quizImg from "../../assets/moduleQuiz.svg";
import activeQuizImg from "../../assets/activeModuleQuiz.svg";
import activeAssignment from "../../assets/activeAssignment.svg";
import Assignment from "../../assets/assignment.svg";
import { useEffect, useState } from "react";
import "./ModuleSidebar.css";

const ModuleSidebar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const path = location.pathname.split("/").at(-1);
    setActivePage(path);
  }, [location.pathname]);

  return (
    <div className="module-sidebar">
      <NavLink to={"/modules/course"} className="module-tab">
        <img src={activePage === "course" ? activeloopImg : loopImg} />
        <span className="tab-text">Python Loop</span>
      </NavLink>
      <NavLink to={"/modules/quiz"} className="module-tab">
        <img src={activePage === "quiz" ? activeQuizImg : quizImg} />
        <p className="tab-text">Quiz-1: DataTypes </p>
      </NavLink>
      <NavLink to={"/modules/assignment"} className="module-tab">
        <img src={activePage === "assignment" ? activeAssignment : Assignment} />
        <p className="tab-text">Assignment-1 : Operators/ Loops</p>
      </NavLink>
    </div>
  );
};

export default ModuleSidebar;
