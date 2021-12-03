import { useEffect} from "react"
import { useHistory } from "react-router"
import axios from 'axios'
import '../css/dashboard.css'
import Sidebar from "./Sidebar"
import DataFetching from './DataFetching'

const Dashboard = () => {

    const history = useHistory()

    useEffect(() => {
        const callBack = () => {
            axios.get("/dashboard")
                .then((result) => {
                    if (!result.data.success)
                        history.push('/')
                })
        }
        callBack();
    }, [history]);

    return (
        <>
            <div className="contain">
                <Sidebar />
                <div className="view">
                    <DataFetching />
                </div>
            </div>
        </>
    )
}
