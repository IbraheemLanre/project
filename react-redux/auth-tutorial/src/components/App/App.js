import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login'
import useToken from './useToken';
import './App.css'


const App = () => {

    const { token, setToken} = useToken()

    if(!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/preferences">
                        <Preferences/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;