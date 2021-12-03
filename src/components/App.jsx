import React from 'react'
import { Redirect } from 'react-router'
import { useEffect, useState } from "react"
import { Route, Switch } from 'react-router'
import NotFound from './404'
import Dashboard from './Dashboard'
import Course from './Course'
import Notification from './notification'
import Signup from './Signup'
import Login from './Login'
import Index from './Index'

const App = () => {

    const [State, setState] = useState(false)

    useEffect(() => {
        const callMethod = async () => {
            const result = await fetch("/auth", {
                method: "GET"
            })
            setState(await result.json())
        }
        callMethod();
    }, [])

    return (<>
        <Switch>
            <Route exact path="/">
                {State ? <Redirect to="/dashboard" /> : <Index />}
            </Route>
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/signup" render={() => <Signup />} />
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/course" render={() => <Course />} />
            <Route exact path="/notification" render={() => <Notification />} />
            <Route render={() => <NotFound />} />
        </Switch>
    </>
    )
}

export default App
