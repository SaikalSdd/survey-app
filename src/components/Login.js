import React, { Component } from 'react'
import axios from 'axios'
//import FacebookLogin from 'react-facebook-login'
//import GoogleLogin from 'react-google-login'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

import {Form, FormLabel, FormField, AuthInformation, Auth, FormContinButton, FormSocialLine, TermOfUse, FooterListing, FooterListingItem, Neobis } from './Registration'
import styled from 'styled-components'

 
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
            controls: {
                nickname: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'name',
                        placeholder: 'Nickname'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false
                }
            }
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
            <div className='filter_background'>
                <div>
                <div className='container'>
                <h1 className='header'>WELCOME TO</h1>
                <a className='logotype' href='#'></a>
                <div className='options'>
                    <ul className='child'>
                        <li className='first'><a href="#" >Create Your Own Surveys</a></li>
                        <li className='second'><p >OR</p></li>
                        <li className='third'><a href="#" >Answer someone else's questions</a></li>
                    </ul>
                </div>
                <div >
                    <Form onSubmit={this.handleSubmit} >
                        <FormLabel>
                            <FormField  placeholder='Никнейм' />
                        </FormLabel>
                        <FormLabel>
                        <FormField 
                       type="password"
                       name="password"
                       id="defaultFormCardPasswordEx"
                       className="form-input"
                        placeholder="Пароль"
                       value={this.state.password}
                       onChange={this.handleChange}
                       required
                    />
                    </FormLabel>

                    <FormContinButton>Продолжить</FormContinButton>
                    <FormSocialLine><AuthInformation>ИЛИ</AuthInformation></FormSocialLine>
                    
                    <TermOfUse>Продолжая, вы соглашаетесь с<Auth><b>Условиями использования</b></Auth> и <Auth><b>Политикой конфиденциальности</b></Auth>Survey App</TermOfUse>
                </Form>
                <footer>
                    <FooterListing>
                        <FooterListingItem><Neobis>Neobis.kg</Neobis></FooterListingItem>
                        <FooterListingItem>ASU design</FooterListingItem>
                        <FooterListingItem>2019</FooterListingItem>
                    </FooterListing>
                </footer>
            
                </div>
                </div>
                </div>
                </div>
        )

    
    }
}