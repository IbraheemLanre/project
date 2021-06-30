import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Manatee from '../Manatee';
import Narwhal from '../Narwhal';
import Whale from '../Whale/Whale';

import './App.css'


const App = () => {
    return (
        <div className="wrapper">
            <h1>Marine Mammals</h1>
            
            <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/manatee">Manatee</Link></li>
                    <li><Link to="/narwhal">Narwhal</Link></li>
                    <li><Link to="/whale">Whale</Link></li>
                    <li><Link to="/whale/beluga">Beluga Whale</Link></li>
                    <li><Link to="/whale/blue">Blue Whale</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/manatee">
                    <Manatee/>
                </Route>
                <Route path="/narwhal">
                    <Narwhal/>
                </Route>
                <Route path="/whale">
                    <Whale/>
                </Route>
               
            </Switch>
                
            </BrowserRouter>
            
        </div>
    );
};

export default App;