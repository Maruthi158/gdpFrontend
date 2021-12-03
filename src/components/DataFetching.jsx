import axios from 'axios'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const DataFetching = () => {
    const [Data, setData] = useState([])

    useEffect(() => {
        const callBack = () => {
            axios.get("/fetchData")
                .then((result) => {
                    setData((result.data))
                })
        }
        callBack();
    }, []);

