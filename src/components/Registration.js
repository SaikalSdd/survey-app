import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

//import FacebookLogin from 'react-facebook-login'
//import GoogleLogin from 'react-google-login'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBIcon } from 'mdbreact';
import styled from 'styled-components'

import background from '../assets/images/survapp-bg1.png'
import logo from '../assets/images/logo.svg';
import eye from '../assets/images/eye.svg';
import facebook from '../assets/images/facebook.svg'

/* //Login with facebook
const responseFacebook = (response) => {
    console.log(response);
}
const responseGoogle = (response) => {
    console.log(response)
} */

export default class Registration extends Component {
    constructor(){
        super();
        this.state = {
            nickname: "",
            email: "",
            name: "",
            surname: "",
            date: "",
            state: "",
            city: "",
            phone: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
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
            <div>
            <FilterBackground />
            <Wrapper >
                <Header>
                    <NavLink to="/login"><LoginButton>Войти</LoginButton></NavLink>
                </Header>
                <NavLink to="/"><Logotype /></NavLink>
                <FormWrapper>
                    <FormTitle>Новый аккаунт</FormTitle>
                    <Form onSubmit={this.handleSubmit} >
                        <FormLabel>
                            <FormField  placeholder='Никнейм' />
                        </FormLabel>
                        <FormLabel> 
                            <FormField 
                                type="email"
                                name="email"
                                placeholder="Email почта"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required='required'
                            />
                        </FormLabel>
                        <FormLabel>
                    <FormField 
                       type="text"
                       name="name"
                       placeholder="Имя"
                       value={this.state.name}
                       onChange={this.handleChange}
                       required
                    />
                    </FormLabel>
                    <FormLabel>
                    <FormField 
                       type="text"
                       id="defaultFormCardSurnameEx"
                       name="surname"
                       placeholder="Фамилия"
                       value={this.state.surname}
                       onChange={this.handleChange}
                    />
                    </FormLabel>
                    <TwoInOne>
                    <FormLabel>
                    <FormFieldSmall
                       type="date"
                       name="date"
                       id="defaultFormCardDateEx"
                       placeholder="Дата рождения"
                       value={this.state.date}
                       onChange={this.handleChange}
                       required
                    />
                    </FormLabel>
                    <FormLabel> 
                    <FormSelect id="defaultFormCardSexEx"
                            className="form-input"            
                            name="Пол" value={this.state.value} 
                            onChange={this.handleChange}>Пол
                        <option value="none" selected>Не выбрано</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </FormSelect>
                    </FormLabel>
                    </TwoInOne>
                    <FormLabel>
                    <FormField 
                       type="text"
                       id="defaultFormCardStateEx"
                       className="form-input"
                       name="state"
                       placeholder="Страна"
                       value={this.state.state}
                       onChange={this.handleChange}
                       required
                    />
                    </FormLabel>
                    <FormLabel>
                    <FormField 
                       type="text"
                       name="city"
                       id="defaultFormCardCityEx"
                       className="form-input"
                       placeholder="Город"
                       value={this.state.city}
                       onChange={this.handleChange}
                    />
                    </FormLabel>
                    <FormLabel>
                    <FormField 
                       type="tel"
                       name="phone"
                       id="defaultFormCardPhoneEx"
                       className="form-input"
                       placeholder="Телефон"
                       value={this.state.phone}
                       onChange={this.handleChange}
                       required
                    />
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
                    <FormLabel>
                    <FormField 
                       type="password"
                       id="defaultFormCardPassConfEx"
                        name="password_confirmation"
                       placeholder="Подтвердите пароль"
                       value={this.state.password_confirmation}
                       onChange={this.handleChange}
                       required
                    />
                    </FormLabel>
                    <FormContinButton>Продолжить</FormContinButton>
                    <FormSocialLine><AuthInformation>Уже есть аккаунт?<Auth><NavLink to="/login"><b>Войти</b></NavLink></Auth></AuthInformation></FormSocialLine>
                    
                    <TermOfUse>Продолжая, вы соглашаетесь с<Auth><b>Условиями использования</b></Auth> и <Auth><b>Политикой конфиденциальности</b></Auth>Survey App</TermOfUse>
                </Form>
                </FormWrapper>
                <footer>
                    <FooterListing>
                        <FooterListingItem><Neobis>Neobis.kg</Neobis></FooterListingItem>
                        <FooterListingItem>ASU design</FooterListingItem>
                        <FooterListingItem>2019</FooterListingItem>
                    </FooterListing>
                </footer>
            </Wrapper>
            </div>
        )
    }
}

const FilterBackground = styled.div`
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center/cover;
    filter: blur(4px);
    position: absolute;
    top: 0;
`

const Wrapper = styled.main`
padding-top: 16px;
`

const Header = styled.header`
`

const LoginButton = styled.span`
    font: 16px;
    font-weight: bold;
    color: #373737;
    background: #FFFFFF;
    display: block;
    padding: 4px 0;
    width: 72px;
    border-radius: 10px;
    text-align: center;
    margin-left: 24px;
    cursor: pointer;
`

const Logotype = styled.a`
width: 433px;
height: 44px;
display: block;
margin: 12px auto 24px auto;
background-image: url(${logo});
`
const FormWrapper = styled.div`
    width: 548px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 17px 18px 26px 18px;
    margin: 0 auto;

`
const FormTitle = styled.h5`
    font-size: 24px;
    color: #373737;
    text-align: center;
    font-weight: 500;
    margin-bottom: 30px;
    padding-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #E9E9E9;

`
const Form = styled.form`
    margin-top: 10px;
    display:block;
    margin-left: -650px
`
const FormLabel = styled.label`
    width: 435px;
    height: 37px;
    margin: 0 auto 20px auto;
    display: block;

    :focus-within:first-child::after,.form_label:focus-within:nth-child(2)::before{
        display: none;
    }

    :first-child::after{
    content: '*';
    color: rgba(255, 0, 0, 0.66);
    font-size: 24px;
    position: absolute;
    left: 430px;
    top: 28%;
    }
    :nth-child(2)::before{
        content: '*';
        color: rgba(255, 0, 0, 0.66);
        font-size: 24px;
        position: absolute;
        left: 430px;
        top: 28%;
        z-index: 1;
    }
    :nth-child(10)::after{
    content: '';
    width: 24px;
    height: 14px;
    position: absolute;
    right: 10px;
    top: 28%;
    background: url(${eye}) no-repeat center/cover;
    }

`
const FormField = styled.input`
    border-radius: 8px;
    background: #E9E9E9;
    font-size: 16px;
    border: none;
    width: 450px;
    height: 100%;
    padding-left: 20px;
    box-sizing: border-box;

    :focus{
        outline: none;
    }
    ::placeholder {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
    }
`
const FormFieldSmall = styled.input`
    border-radius: 8px;
    background: #E9E9E9;
    font-size: 16px;
    border: none;
    width: 200px;
    height: 100%;
    padding-left: 20px;
    box-sizing: border-box;

    :focus{
        outline: none;
    }
    ::placeholder {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
    }
`

const FormSelect = styled.select`
    border-radius: 8px;
    background: #E9E9E9;
    font-size: 16px;
    border: none;
    width: 250px;
    height: 100%;
    padding-left: 20px;
    box-sizing: border-box;

    :focus{
        outline: none;
    }
    ::placeholder {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
    }
`

const TwoInOne = styled.div`
display:flex;
flex-wrap:nowrap;
flex-direction: row;
`

const FormContinButton = styled.button`
width: 450px;
height: 42px;
background:#FF473A;
border-radius: 10px;
color: #FFFFFF;
border: none;
margin: 0 auto;
display:block;
cursor: pointer;
`
const FormSocialLine = styled.span`
text-align: center;
display:block;
margin: 23px auto 15px auto;
font-size: 12px;
color:  #373737
font-weight: 500;

    ::before{
        content: '';
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #373737;
        width: 171px;
    }

    ::after{
        content: '';
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #373737;
        width: 171px;
    }
`

const AuthInformation = styled.span`
    display: block;
    text-align: center;
    font-size: 10px;
    color: #373737;
    margin-bottom: 11px;
    margin-top: 16px;
`

const Auth = styled.a`
    text-decoration: none;
    color: #000000;
`

const TermOfUse = styled.span`
    display: block;
    width: 245px;
    margin: 0 auto;
    font-size: 10px;
    text-align: center;
`

const FooterListing = styled.ul`
    display: flex;
    width: 190px;
    margin: 20px auto 0 auto;
    justify-content: space-between;
`
const FooterListingItem = styled.li`
    list-style: none;
    font-weight: 600;
    font-size: 12px;
    color: #FFFFFF;
`
const Neobis = styled.a`
    color: #00D160;
    text-decoration: none;
`