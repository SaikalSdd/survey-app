import React, { Component } from 'react'
import axios from 'axios'
//import FacebookLogin from 'react-facebook-login'
//import GoogleLogin from 'react-google-login'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBIcon } from 'mdbreact';
import '../assets/st.css'

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
            <div className='reg_container' >
                <span className='login-button'>Войти</span>
                <a className='logotype' href='#'></a>
                <div className="reg-card text-center py-4 mt-3">
                    <div className='text-center'>           
                        <h1>Новый аккаунт</h1>
                        <h5>Спрашивайте и отвечайте!</h5>
                        <hr/>
                    </div>
                    <form onSubmit={this.handleSubmit} className='form'>
                        <label className='form_label'>
                            <input className='form-input' placeholder='Никнейм' />
                        </label>
                    <input 
                       type="email"
                       name="email"
                       id="defaultFormCardEmailEx"
                        className="form-input"
                       placeholder="Email почта"
                       value={this.state.email}
                       onChange={this.handleChange}
                       required='required'
                    />
                    <input 
                       type="text"
                       id="defaultFormCardNameEx"
                       className="form-input"
                       name="name"
                       placeholder="Имя"
                       value={this.state.name}
                       onChange={this.handleChange}
                       required
                    />
                    <input 
                       type="text"
                       id="defaultFormCardSurnameEx"
                       className="form-input"
                       name="surname"
                       placeholder="Фамилия"
                       value={this.state.surname}
                       onChange={this.handleChange}
                    />
                    <input 
                       type="date"
                       name="date"
                       id="defaultFormCardDateEx"
                       className="form-input"
                       placeholder="Дата рождения"
                       value={this.state.date}
                       onChange={this.handleChange}
                       required
                    />
                    <select id="defaultFormCardSexEx"
                    className="form-input"            
                    name="Пол" value={this.state.value} onChange={this.handleChange}>
                        <option value="none" selected>Не выбрано</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                    <input 
                       type="text"
                       id="defaultFormCardStateEx"
                       className="form-input"
                       name="state"
                       placeholder="Страна"
                       value={this.state.state}
                       onChange={this.handleChange}
                       required
                    />
                    <input 
                       type="text"
                       name="city"
                       id="defaultFormCardCityEx"
                       className="form-input"
                       placeholder="Город"
                       value={this.state.city}
                       onChange={this.handleChange}
                    />
                    <input 
                       type="tel"
                       name="phone"
                       id="defaultFormCardPhoneEx"
                       className="form-input"
                       placeholder="Телефон"
                       value={this.state.phone}
                       onChange={this.handleChange}
                       required
                    />
                    <input 
                       type="password"
                       name="password"
                       id="defaultFormCardPasswordEx"
                       className="form-input"
                        placeholder="Пароль"
                       value={this.state.password}
                       onChange={this.handleChange}
                       required
                    />
                    <input 
                       type="password"
                       id="defaultFormCardPassConfEx"
                       className="form-input"
                        name="password_confirmation"
                       placeholder="Подтвердите пароль"
                       value={this.state.password_confirmation}
                       onChange={this.handleChange}
                       required
                    />
                    <div className="text-center py-4 mt-3">
                    <button className='form-button' type="submit" block>Продолжить</button>
                    <p className="or-text"><hr/>или</p>
                    <MDBBtn social="fb" color="blue" block className='form-button-social'>
                        <MDBIcon fab icon="facebook-f" className="pr-1"/>Зарегистрироваться с помощью Facebook
                    </MDBBtn>
                    <MDBBtn social="gplus" color='red' block className='form-button-social'>
                        <MDBIcon fab icon="google-plus-g" className="pr-1"/>Зарегистрироваться с помощью Google
                    </MDBBtn>  
                    <p className="conditions">Продолжая, вы соглашаетесь с <a href="#">Условиями использования</a> и 
                    <a href="instagram.com"> Политикой конфиденциальности</a> Survey App</p>
                    </div>
                </form>
               
                </div>
                <div className="copyright">
		            <a>Neobis.kg</a>  ASU Design  2019
		                </div>
            </div>
        )
    }
}
