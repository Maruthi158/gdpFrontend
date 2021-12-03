import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import '../css/dashboard.css'
import Sidebar from "./Sidebar"
import path from 'path'
//import { Console } from "console"
// import axios from 'axios'

const Course = () => {

    const history = useHistory()
    useEffect(() => {
        const callBack = async () => {
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
