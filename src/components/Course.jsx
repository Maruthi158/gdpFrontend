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
        else {
            alert(response.error)
        }
    }

    return (
        <>
            <div className="contain">
                <Sidebar />
                <div className="view" style={{height:"100vh"}}>
                    <form encType="multipart/form-data" method="POST">
                        <div className="inputDnD text-center">
                            <label className="my-2 fs-4" htmlFor="inputFile">Upload file Here</label>
                            <input type="file" className="form-control-file text-primary font-weight-bold" name="file" id="inputFile" accept="application/json" onChange={checkFile} data-title="Drag and drop a file" required />
                        </div>
                        <center><button type="button" className="btn btn-success" onClick={submit} style={{ width: "12rem" }} >Submit JSON File</button></center>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Course
