import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Admin = () => {
    return(
        <div className = 'wrapper'>
            <BrowserRouter>
                <Header/>
                <Sidebar/>
                <Dashboard/>
            </BrowserRouter>
        </div>
    )
}
export default Admin