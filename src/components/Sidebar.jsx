import { NavLink } from "react-router-dom"
import SidebarData from './SidebarData'
import "../css/dashboard.css"

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="d-flex flex-column flex-shrink-0 bg-light">
                    <span className="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right">
                        <h6 className="fw-bolder text-center" style={{textShadow:"1px 1px 10px lightblue"}}>Studdy Buddy</h6>
                    </span>
                    <hr className="m-1" />
                    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                        {
                            
                        }
                    </ul>
                </div>

            </div>

            
        </>
    )
}
