import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UserWindow from './components/UserWindow';
import Registration from './components/Registration';
import Login from './components/Login';
import SideNav from './assets/images/SideNav';


export default class App extends Component {


    render() {
        return (
            <div>
                <UserWindow />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
