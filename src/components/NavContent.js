import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MyPolls from './MyPolls';
import AllPolls from './AllPolls';
import ProfilePage from './ProfilePage';



const NavContent = () => {
    return (
        <Switch>
            <Route path="/my-polls" component={MyPolls}/>
            <Route path="/all-polls" component={AllPolls} />
            <Route path="/create-poll">
                <h1>Create poll</h1>
            </Route>
            <Route path="/statistics">
                <h1>Statistics</h1>
            </Route>
            <Route path="/profile" component={ProfilePage}>
            </Route>
        </Switch>


    )
}

export default NavContent