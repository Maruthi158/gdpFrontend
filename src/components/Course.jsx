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
        else {
            console.log("entering else")
            document.getElementById('inputFile').setAttribute("data-title", fileName)
        }
    }
     const submit = async (event) => {
        event.preventDefault()
        const inputFile = document.getElementById('inputFile')

        var data = new FormData()
        data.append('file', inputFile.files[0])
        const result = await fetch('http://localhost:3300/course', {
            method: "POST",
            body: data
        })
        const response = await result.json()

        if (response.success) {
            history.push('/dashboard')
        }


