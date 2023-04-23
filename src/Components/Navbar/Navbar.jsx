import {MdAccountCircle} from "react-icons/md"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <h1 className="logo">EDYOGA</h1>
        <div className="right-nav-div">
          <p>Hi, Test Learner!</p>
          <MdAccountCircle size={40}/>
        </div>
      </div>
    </div>
  )
}