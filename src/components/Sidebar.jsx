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
                            SidebarData.map((data, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <NavLink exact to={data.link} activeClassName="active text-white" className="nav-link py-3 border-bottom text-black" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
                                            <center><img src={data.img} className="img-fluid  pb-0" alt="source img" height="30" width="30" /><font style={{fontSize:"13px"}}>{data.title}</font></center>
                                        </NavLink>
                                        <hr className="m-1"/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

            
        </>
    )
}

export default Sidebar
