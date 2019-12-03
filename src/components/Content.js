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
import CreatePoll from './CreatePoll';
import Home from './Home';




const Content = () => {
    return (
        <Switch>
            <Route exact path='/' component={Registration}/>
            <Route path='/login' component={Login}/>
            <Route path='/user-window' component={Home}/>
        </Switch>

    )
}

export default Content
