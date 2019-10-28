import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Registration from './components/Registration';
import Login from './components/Login';

export default class App extends Component {

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
