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
    const checkFile = (event) => {
        const file = event.target.value
        const fileName = path.basename(file)
        console.log(fileName)
        if (path.extname(file) !== '.json' && file !== "") {
            event.preventDefault()
            alert('Please upload .json file...!')
        }

