import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Login from './components/Login'
import UserWindow from './components/UserWindow';
import Admin from './admin-panel/Admin'
import Registration from './components/Registration';
import MyPolls from './components/MyPolls';
import AllPolls from './components/AllPolls';
import Content from './components/Content';




const App = () => {
    return (
        <div>
        <UserWindow/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
