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

