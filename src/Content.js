import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard';
import Widgets from './Widgets';
import Calendar from './Calendar';


const Content = () => {
    return (
        <Switch>
            <Route  path='/admin' component={Dashboard}/>
            <Route  path='/widgets' component={Widgets}/>
            <Route  path='/calendar' component={Calendar}/>
        </Switch>


    )
}

export default Content