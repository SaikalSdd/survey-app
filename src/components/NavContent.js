import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MyPolls from './MyPolls';



const NavContent = () => {
    return (
        <Switch>
            <Route path="/my-polls" component={MyPolls}/>
            <Route path="/all-polls">
                <h1>All polls</h1>
            </Route>
            <Route path="/create-poll">
                <h1>Create poll</h1>
            </Route>
            <Route path="/statistics">
                <h1>Statistics</h1>
            </Route>
            <Route path="/profile">
                <h1>Profile</h1>
            </Route>
        </Switch>


    )
}

export default NavContent