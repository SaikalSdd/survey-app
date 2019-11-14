import React, { Component } from 'react'
import axios from 'axios'
//import FacebookLogin from 'react-facebook-login'
//import GoogleLogin from 'react-google-login'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import styles from '../assets/st.css'
import '../assets/st.css'

/* //Login with facebook
const responseFacebook = (response) => {
    console.log(response);
}
const responseGoogle = (response) => {
    console.log(response)
} */

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            nickname: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, name,surname,date,state,city,
               phone,password,password_confirmation} = this.state;

        axios.post(
            'https://jsonplaceholder.typicode.com/users',{email:email, name:name,
                        surname:surname,date:date,state:state,city:city,phone:phone,
                        password:password,password_confirmation:password_confirmation},
            {withCredentials: true})
            .then(response => {
                //if(response.data.status === '201') {
                    //this.props.handleSuccessfulAuth(response.data)
                    console.log(response)
                //}
            }) 
            .catch(error => {
                console.log("registration error:", error)
            });    
    }


    render() {
        return (
            <div className= 'wrapper'>
                <div className='container'>
                <h1 className='header'>WELCOME TO</h1>
                <a className='logotype' href='#'></a>
                <div className='options'>
                    <ul className='child'>
                        <li className='first'><a href="#" >Create Your Own Surveys</a></li>
                        <li className='second'><p >OR</p></li>
                        <li className='third'><a href="#" >Answer someone else's questions</a></li>
                    </ul>
                    <div className='clear'></div>
                </div>
                <div className='clear'></div>
                <div >
                <MDBRow>
                    <MDBCol md="4">
                    <form onSubmit={this.handleSubmit} >
                    <input
                       type="text"
                       id="defaultFormCardNameEx"
                       className="form-control mt-2 border-0"
                       style={{backgroundColor: "#e6e6e6"}}
                       name="nickname"
                       placeholder="Никнейм"
                       value={this.state.name}
                       onChange={this.handleChange}
                       required
                    />
                    
                    <input 
                       type="password"
                       name="password"
                       id="defaultFormCardPasswordEx"
                       className="form-control mt-2 border-0"
                    style={{backgroundColor: "#e6e6e6"}}
                       placeholder="Пароль"
                       value={this.state.password}
                       onChange={this.handleChange}
                       required
                    />
                   
                    <div className="text-center py-4 mt-2">
                    <MDBBtn color="red" type="submit" block>Sign In</MDBBtn>
                    <p className="mt-3"><hr/>или</p>
                    <MDBBtn social="fb" color="blue" block>
                        <MDBIcon fab icon="facebook-f" className="pr-1"/>Войти через Facebook
                    </MDBBtn>
                    <MDBBtn social="gplus" color='red' block>
                        <MDBIcon fab icon="google-plus-g" className="pr-1"/>Войти через Google
                    </MDBBtn>  
                    <p className="mt-4" style={{fontSize:10, width:200}}>Продолжая, вы соглашаетесь с <a href="#">Условиями использования</a> и 
                    <a href="instagram.com"> Политикой конфиденциальности</a> Survey App</p>
                    <div className="copyright">
		            <a>Neobis.kg</a>  ASU Design  2019
		                </div>
                    </div>
                </form>
                </MDBCol>
                </MDBRow>
                </div>
                </div>
        </div>
        )
    }
}
