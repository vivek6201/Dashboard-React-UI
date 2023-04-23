import { FaHome } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Home */}
      <NavLink to={"/"} className="tab">
        <FaHome className="icon" />
        <p>Home</p>
      </NavLink>

      {/* Modules */}
      <NavLink to={"/modules"} className="tab">
        <GiBookshelf className="icon" />
        <p>Modules</p>
      </NavLink>

      {/* Instructor */}
      <NavLink to={"/instructor"} className="tab">
        <BsFillPersonFill className="icon" />
        <p>Instructor</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
