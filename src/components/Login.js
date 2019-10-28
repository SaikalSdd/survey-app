import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField/TextField';
import {Button} from '@material-ui/core/Button/Button';
import axios from 'axios'; 


export default class Login extends Component {

    state = {
        email: "",
        password: "",
        loginErrors: ""
    };

   /*  handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const {email,password}

        axios
            .post(
                "http://localhost:3001/sessions",
                {user: {
                    email: email,
                    password: password                }
            },
            {withCredentials: true}
            )
            .then(response => {
                console.log("res from login", response);
                /* if(response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data) 
                
            })
            .catch(error => {
                console.log("login error:", error)
            });
        event.preventDefault();
    } */

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                       type="email"
                       name="email"
                       placeholder="Email"
                       value={this.state.email}
                       onChange={this.handleChange}
                       required
                    />
                    <input 
                       type="password"
                       name="password"
                       placeholder="Password"
                       value={this.state.password}
                       onChange={this.handleChange}
                       required
                    />
                    
                    <button type="submit">Login</button>

                </form>
            </div>
        )
    }
}
