import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import '../css/dashboard.css'
import Sidebar from "./Sidebar"
import notificationData from "../dataFiles/notificationData"

const Notification = () => {

    const history = useHistory()
    useEffect(() => {
        const callBack = async () => {
            const result = await fetch("/dashboard", {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            const Data = await result.json()
            if (!Data.success) {
                history.push('/')
            }
        }
        callBack();
    }, [history]);
    return (
        <>
            <div className="contain">
                <Sidebar />
                <div className="view " style={{textAlign:"left" }}>
                    {
                        notificationData.map((data, index) => {
                            return (
                                <>
                                <p className="fs-1" >{data.from}</p>
                                    <h4 className="text-secondary">{data.message}</h4><hr />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Notification

