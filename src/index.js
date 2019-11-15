import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UserWindow from './components/UserWindow';
import Registration from './components/Registration';
import Login from './components/Login';


export default class App extends Component {


    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
