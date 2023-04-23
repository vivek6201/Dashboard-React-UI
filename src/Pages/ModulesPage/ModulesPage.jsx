import ModuleSidebar from "../../Components/ModuleSidebar/ModuleSidebar"
import { Outlet } from "react-router-dom"
import "./ModulesPage.css"

const ModulesPage = () => {
  return (
    <div className="module-layout">
      <ModuleSidebar/>
      <Outlet/>
    </div>
  )
}

export default ModulesPage