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

    return (
        <>
            {
                !Data.length ?
                    <h1 className="text-secondary " style={{margin:"200px",height:"100vh",textShadow: "none", fontSize: "2rem" }}>Please upload course schedule file sheet <Link to="/course">Click here</Link></h1> :
                    <ul className="fetch-data">
                        {Data.map((data, index) => {
                            return (
                                <li key={index}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={data.img} alt="Card img cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.subject}</h5>
                                            <p className="card-text">{data.prof}</p>
                                            <a href="/dashboard" className="btn btn-primary">About</a>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
            }
            {/* <h1>hii</h1> */}
        </>

    )
}

export default DataFetching
