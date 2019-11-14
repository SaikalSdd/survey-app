import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UserWindow from './components/UserWindow';
import Registration from './components/Registration';


export default class App extends Component {


    render() {
        return (
            <div>
                <Registration /> 
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
