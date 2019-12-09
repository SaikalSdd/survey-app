import React, { Component } from 'react'
import axios from 'axios'
//import FacebookLogin from 'react-facebook-login'
//import GoogleLogin from 'react-google-login'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

import background from '../assets/images/1d5d0eb5dbc577d097a26950b0105d9b.jpg'
import logo from '../assets/images/logo.svg'
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
            <Wrapper>
                <Header>WELCOME TO</Header>
                <Logotype />
                <Title>
                        <Li>Create Your Own Surveys</Li>
                        <Li><p >OR</p></Li>
                        <Li>Answer someone else's questions</Li>
                </Title>
                <WrapCenter>
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
                </WrapCenter>
                </Wrapper>
        )

    
    }
}
const Wrapper = styled.div`
height:100vh;
background-image: url(${background}); 
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const WrapCenter = styled.div`
display: block;
margin: 0 auto;
width: 500px;
padding-top: 200px;
`

const HeaderDiv = styled

const Header = styled.h1`
padding-top: 89px;

width: 574px;
height: 261px;
left: calc(50% - 574px/2);
top: calc(50% - 261px/2 - 320.5px);

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 60px;
line-height: 73px;
text-align: center;

color: #FFFFFF;
`
const Logotype = styled.a`
    width:433px;
    height: 44px;
    display: block;
    margin: -60px auto 24px auto;
    background: url(${logo});
`

const Title = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin: 0 auto;
width: 900px;
margin-top: 50px;
`

const Li = styled.h1`
width: 274px;
height: 78px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;
text-align: center;

color: #FFFFFF;

margin-right: 50px;
`
