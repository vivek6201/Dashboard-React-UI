import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./Pages/Homepage/HomePage";
import ModulesPage from "./Pages/ModulesPage/ModulesPage";
import InstructorPage from "./Pages/InstructorPage/InstructorPage"
import Accordian from "./Components/Accordian/Accordian";
import Quiz from "./Pages/Quiz/Quiz"
import Assignment from "./Pages/Assignment/Assignment"
import Course from "./Pages/Course/Course"

function App() {
  return (
    <div>
      <Navbar />
      <Accordian/>
      <div className="layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage />}>
            <Route path="/modules/course" element ={<Course/>}/>
            <Route path="/modules/quiz" element ={<Quiz/>}/>
            <Route path="/modules/assignment" element ={<Assignment/>}/>
          </Route>
          <Route path="/instructor" element={<InstructorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
