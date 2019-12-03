import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'


import Admin from '../admin-panel/Admin';
import AllPolls from './AllPolls';
import MyPolls from './MyPolls';
import UserWindow from './UserWindow';
import Login from './Login';
import Registration from './Registration';




const Home = () => {
    return (
        <Switch>
            <Route path='/my-polls' component={MyPolls}/>
            <Route path='/all-polls' component={AllPolls}/>
        </Switch>

    )
}

export default Home
