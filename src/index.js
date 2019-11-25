import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Login from './components/Login'
import UserWindow from './components/UserWindow';
import Admin from './admin-panel/Admin'
import Registration from './components/Registration';




const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Registration}/>
            <Route exact path='/login' component={Login}/>
            <Route  path='/admin' component={Admin}/>
            
        </Switch>
        </BrowserRouter>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));
